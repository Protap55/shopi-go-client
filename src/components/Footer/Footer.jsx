"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-base-200  text-base-content py-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        {/* Logo */}
        <Link href="/" className="inline-block mb-4">
          <Image
            src="/logo.png"
            alt="ShopiGo Logo"
            width={150}
            height={50}
            style={{ objectFit: "contain" }}
            priority
          />
        </Link>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-6">
          <Link href="/" className="hover:text-primary transition">
            Home
          </Link>
          <Link href="/shop" className="hover:text-primary transition">
            Shop
          </Link>
          <Link href="/about" className="hover:text-primary transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-primary transition">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-primary transition">
            Blog
          </Link>
        </div>

        {/* Optional social icons */}
        <div className="flex justify-center gap-4 mb-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition"
          >
            Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition"
          >
            Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-secondary transition"
          >
            Instagram
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()} ShopiGo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
