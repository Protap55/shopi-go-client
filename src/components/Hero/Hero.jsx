"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative rounded-b-2xl bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 text-center">
        {/* Headline */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Welcome to ShopiGo
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-gray-100 mb-8">
          Discover the best products at unbeatable prices.
        </p>

        {/* Primary CTA */}
        <Link
          href="/shop"
          className="btn btn-primary btn-lg px-8 py-4 text-lg hover:bg-blue-600 transition"
        >
          Shop Now
        </Link>
      </div>
    </section>
  );
}
