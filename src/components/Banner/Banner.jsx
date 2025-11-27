"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/bannert.png",
    title: "Welcome to ShopiGo!",
    subtitle: "Find the cutest gadgets for your daily life.",
    cta: "Shop Now",
    link: "/shop",
  },
  {
    image: "/bannermi.png",
    title: "Fast Delivery",
    subtitle: "Get your products delivered quickly and safely.",
    cta: "Explore",
    link: "/shop",
  },
  {
    image: "/bannerf.png",
    title: "Special Offers",
    subtitle: "Grab exclusive deals and discounts every week.",
    cta: "Check Deals",
    link: "/shop",
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] overflow-hidden rounded-2xl">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
            index === current ? "opacity-100 z-20" : "opacity-0 z-10"
          }`}
        >
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0  bg-opacity-40 flex flex-col justify-center items-center mt-96 text-center px-4 sm:px-8">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow">
              {slide.title}
            </h2>
            <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-6 drop-shadow">
              {slide.subtitle}
            </p>
            <a
              href={slide.link}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              {slide.cta}
            </a>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full transition ${
              idx === current ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
}
