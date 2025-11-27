"use client";

import Image from "next/image";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const products = [
  { img: "/Smartphone-X.webp", name: "Smartphone X", price: "$499" },
  { img: "/Wireless-Earbuds.png", name: "Wireless Earbuds", price: "$79" },
  { img: "/Laptop-Pro.png", name: "Laptop Pro", price: "$1099" },
  { img: "/Smartwatch.webp", name: "Smartwatch", price: "$199" },
];

export default function FeaturedProducts() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-primary">
        Featured Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((p, i) => (
          <div
            key={i}
            className="group relative bg-white/70 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 flex flex-col h-full"
          >
            {/* Image with Zoom Effect */}
            <div className="relative overflow-hidden h-64 bg-gradient-to-br from-gray-100 to-gray-200">
              <Image
                src={p.img}
                alt={p.name}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <span className="absolute top-4 left-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
                Hot
              </span>
            </div>

            {/* Content - Flex grow to push button down */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                {p.name}
              </h3>

              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">(128)</span>
              </div>

              <p className="text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-auto">
                {p.price}
              </p>
            </div>

            {/* Button - Always at bottom */}
            <div className="px-6 pb-6 mt-auto">
              <button
                onClick={() =>
                  toast.success(`"Succefully added to cart!"`, {
                    duration: 3000,
                    style: {
                      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                      color: "white",
                      borderRadius: "12px",
                      fontWeight: "600",
                    },
                    icon: "Shopping Cart",
                  })
                }
                className="w-full cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Buy Now
              </button>
            </div>

            {/* Glowing border on hover */}
            <div className="absolute inset-0 rounded-2xl ring-4 ring-transparent group-hover:ring-purple-500/30 pointer-events-none transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
