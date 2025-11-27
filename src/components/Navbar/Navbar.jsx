"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContext, useState, useRef, useEffect } from "react";
import { AuthContext } from "@/Context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const { user, signOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  const isActive = (path) => {
    const active = pathname === path;

    if (["/add-product", "/manage-products"].includes(path)) {
      return active
        ? "bg-blue-600 text-white"
        : "btn-ghost hover:bg-blue-100 hover:text-black";
    }

    return active
      ? "bg-blue-600 text-white"
      : "btn-ghost hover:bg-blue-100 hover:text-black";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* NAVBAR ANIMATION */}
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="bg-base-100 shadow-md fixed top-0 w-full max-w-7xl mx-auto z-50 px-6"
      >
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={80}
              priority
            />
          </Link>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/" className={`btn ${isActive("/")}`}>
              Home
            </Link>
            <Link href="/shop" className={`btn ${isActive("/shop")}`}>
              Shop
            </Link>
            <Link href="/about" className={`btn ${isActive("/about")}`}>
              About
            </Link>
            <Link href="/contact" className={`btn ${isActive("/contact")}`}>
              Contact
            </Link>
            <Link href="/blog" className={`btn ${isActive("/blog")}`}>
              Blog
            </Link>

            {user ? (
              <div ref={dropdownRef} className="relative">
                <button
                  className="btn btn-ghost btn-circle avatar"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={user.photoURL || "/avater.jpg"} alt="User" />
                  </div>
                </button>

                {/* DROPDOWN ANIMATION */}
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-64 p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg flex flex-col gap-3"
                    >
                      <div className="flex items-center gap-3 border-b pb-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden">
                          <img
                            src={user.photoURL || "/avater.jpg"}
                            alt="User"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">
                            {user.displayName || "User"}
                          </p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </div>

                      <Link
                        href="/add-product"
                        className={`px-3 py-2 rounded-lg ${isActive(
                          "/add-product"
                        )}`}
                      >
                        Add Product
                      </Link>

                      <Link
                        href="/manage-products"
                        className={`px-3 py-2 rounded-lg ${isActive(
                          "/manage-products"
                        )}`}
                      >
                        Manage Products
                      </Link>

                      <button
                        onClick={signOutUser}
                        className="px-3 py-2 text-red-600 rounded-lg hover:bg-red-100"
                      >
                        Logout
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`btn btn-secondary ${isActive("/login")}`}
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className={`btn btn-secondary ${isActive("/register")}`}
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* mobile btn */}
          <div className="md:hidden">
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              ☰
            </button>
          </div>
        </div>

        {/* MOBILE MENU ANIMATION */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-2 flex flex-col gap-2 pb-4"
            >
              <Link className={`btn ${isActive("/")}`} href="/">
                Home
              </Link>
              <Link className={`btn ${isActive("/shop")}`} href="/shop">
                Shop
              </Link>
              <Link className={`btn ${isActive("/about")}`} href="/about">
                About
              </Link>
              <Link className={`btn ${isActive("/contact")}`} href="/contact">
                Contact
              </Link>
              <Link className={`btn ${isActive("/blog")}`} href="/blog">
                Blog
              </Link>

              {user ? (
                <>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img src={user.photoURL || "/avater.jpg"} alt="User" />
                    </div>
                    <div>
                      <p className="font-bold">{user.displayName || "User"}</p>
                      <p className="text-sm">{user.email}</p>
                    </div>
                  </div>

                  <Link
                    className={`btn ${isActive("/add-product")}`}
                    href="/add-product"
                  >
                    Add Product
                  </Link>
                  <Link
                    className={`btn ${isActive("/manage-products")}`}
                    href="/manage-products"
                  >
                    Manage Products
                  </Link>

                  <button
                    className="btn bg-red-500 text-white"
                    onClick={signOutUser}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="btn btn-primary">
                    Login
                  </Link>
                  <Link href="/register" className="btn btn-secondary">
                    Register
                  </Link>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <div className="h-20"></div>
    </>
  );
}
