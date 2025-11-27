"use client";

import { useState, useContext } from "react";
import Link from "next/link";
import { AuthContext } from "@/Context/AuthContext";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { updateProfile } from "firebase/auth";
import { User, Mail, Lock, Eye, EyeOff, Camera } from "lucide-react";

export default function RegisterPage() {
  const { createUser, signInGoogle } = useContext(AuthContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    photo: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, photo, password } = formData;

    if (!name || !email || !password) {
      toast.error("All fields are required!");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email address");
      return;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters");
      return;
    }

    setLoading(true);
    try {
      const result = await createUser(email, password);
      await updateProfile(result.user, {
        displayName: name,
        photoURL: photo || "https://i.ibb.co.com/4pDNDk1/avatar.png",
      });

      toast.success("Account created successfully!");
      router.push("/");
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("Email already registered. Try logging in.");
      } else if (error.code === "auth/weak-password") {
        toast.error("Password too weak");
      } else {
        toast.error("Registration failed. Try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    try {
      await signInGoogle();
      toast.success("Welcome with Google!");
      router.push("/");
    } catch (error) {
      toast.error("Google sign up failed");
    }
  };

  return (
    <div className="min-h-screen py-22 flex items-center  justify-center px-4 ">
      <div className="w-full max-w-md bg-[#e6edff]">
        {/* Main Card */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-primary">Join ShopiGo</h1>
            <p className="text-gray-600 mt-2">Create your account in seconds</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            {/* Photo URL */}
            <div className="relative">
              <Camera className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type="url"
                id="photo"
                placeholder="Photo URL (optional)"
                value={formData.photo}
                onChange={handleChange}
                className="w-full pl-12 pr-5 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Password (min 6 chars)"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full pl-12 pr-12 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute  right-4 top-4 text-gray-500 hover:text-gray-700"
              >
                {showPassword ? (
                  <EyeOff className="w-5 h-5" />
                ) : (
                  <Eye className="w-5 h-5" />
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-2xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <div className="my-6 text-center text-gray-500 font-medium">or</div>

          {/* Google Button */}
          <button
            onClick={handleGoogle}
            className="w-full cursor-pointer flex items-center justify-center gap-3 py-4 border border-gray-300 rounded-2xl hover:bg-gray-50 transition font-medium text-gray-700"
          >
            <img
              src="https://www.google.com/favicon.ico"
              alt="G"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          {/* Login Link */}
          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-bold text-blue-600 hover:underline"
            >
              Log in
            </Link>
          </p>
        </div>

        {/* Decorative Blob */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>
      </div>
    </div>
  );
}
