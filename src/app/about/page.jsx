"use client";

import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="space-y-24">
      <section className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 text-white py-20 px-6 text-center rounded-b-3xl">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">About ShopiGo</h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto">
          ShopiGo is your go-to online store for the latest gadgets and tech
          accessories. We strive to bring quality products to your doorstep with
          fast delivery and unbeatable service.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          Our mission is to simplify your life with cutting-edge technology and
          smart gadgets. We focus on quality, convenience, and customer
          satisfaction.
        </p>
      </section>

      <section className="bg-gray-100 dark:bg-gray-900 py-12 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-primary">Our Vision</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          To become the most trusted online gadget store in the region,
          connecting technology lovers with the products they love, quickly and
          reliably.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-20 py-20 text-center">
        <h2 className="text-3xl font-bold mb-10 text-primary">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              title: "Quality",
              desc: "We provide only high-quality products.",
            },
            { title: "Trust", desc: "Customer trust is our top priority." },
            {
              title: "Innovation",
              desc: "We always bring the latest gadgets.",
            },
            { title: "Support", desc: "Fast and friendly customer service." },
          ].map((val, idx) => (
            <div
              key={idx}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-2">{val.title}</h3>
              <p className="text-gray-500 dark:text-gray-300">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 sm:px-6 lg:px-20 py-16 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">
          Meet Our Team
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {[
            { name: "Rahim", role: "Founder & CEO", img: "/Rahim.jpg" },
            { name: "Karim", role: "Marketing Head", img: "/Komol.jpg" },
            { name: "Fatima", role: "Product Manager", img: "/Fatima.jpg" },
            { name: "Nabila", role: "Lead Designer", img: "/Nabila.jpg" },
            { name: "Sabbir", role: "Customer Support", img: "/Sabbir.jpg" },
            { name: "Tania", role: "Developer", img: "/Tania.jpg" },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-gray-800 p-6 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-blue-500 dark:ring-indigo-400">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="font-semibold text-xl mb-1 text-gray-900 dark:text-white">
                {member.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-blue-600 text-white py-20 text-center rounded-t-3xl px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to Shop?</h2>
        <p className="mb-6 max-w-xl mx-auto">
          Explore our wide range of gadgets and tech products. Join thousands of
          happy customers!
        </p>
        <Link
          href="/shop"
          className="inline-block px-8 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:shadow-lg transition"
        >
          Start Shopping
        </Link>
      </section>
    </main>
  );
}
