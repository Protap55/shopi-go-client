"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Alice",
    text: "Amazing service and fast delivery!",
    img: "/Alice.jpeg",
  },
  {
    name: "Bob",
    text: "Great quality products at good prices.",
    img: "/Bob.jpeg",
  },
  {
    name: "Charlie",
    text: "Highly recommend ShopiGo for gadgets.",
    img: "/Charlie.jpeg",
  },
  {
    name: "Diana",
    text: "Excellent customer support. Loved it!",
    img: "/Diana.avif",
  },
  {
    name: "Ethan",
    text: "Fast shipping and the product was top-notch!",
    img: "/Ethan.jpeg",
  },
  {
    name: "Fiona",
    text: "Best online store for tech gadgets!",
    img: "/Fiona.avif",
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
      <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 text-primary">
        What Our Customers Say
      </h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all p-8 h-full flex flex-col items-center text-center">
              {/* Profile image */}
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                <Image
                  src={t.img}
                  alt={t.name}
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Text */}
              <p className="italic text-gray-600 mb-4 leading-relaxed">
                “{t.text}”
              </p>

              {/* Name */}
              <h4 className="font-semibold text-lg">{t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
