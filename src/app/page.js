import Banner from "@/components/Banner/Banner";
import Features from "@/components/Features/Features";
import Hero from "@/components/Hero/Hero";
import FeaturedProducts from "@/components/ProductsSection/FeaturedProducts";
import Testimonials from "@/components/Testimonials/Testimonials";
import React from "react";

const page = () => {
  return (
    <div className="space-y-8">
      <Hero></Hero>
      <Banner></Banner>
      <Features></Features>
      <FeaturedProducts></FeaturedProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default page;
