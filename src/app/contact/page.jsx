"use client";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill all fields!");
      return;
    }

    toast.success("Message Sent Successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="px-6 sm:px-6 lg:px-20 py-16 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <ToastContainer position="top-right" autoClose={3000} />

      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Contact Us
      </h2>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h3 className="text-2xl text-primary font-semibold  dark:text-white">
            Get in Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            Have questions or need support? Reach out to us and we’ll get back
            to you as soon as possible.
          </p>
          <div className="space-y-4">
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Email:</span> support@shopigo.com
            </p>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Phone:</span> +880 1234 567 890
            </p>
            <p className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <span className="font-semibold">Address:</span> 123, Tech Street,
              Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-lg">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className="mb-1 font-semibold text-gray-700 dark:text-gray-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="email"
                className="mb-1 font-semibold text-gray-700 dark:text-gray-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                required
              />
            </div>

            <div className="flex flex-col">
              <label
                htmlFor="message"
                className="mb-1 font-semibold text-gray-700 dark:text-gray-200"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-xl px-4 py-2 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-white"
                rows={5}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer py-2 mt-4 rounded-xl bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 font-semibold text-white shadow-lg hover:scale-105 transition-transform"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map */}
      <div className="mt-16 w-full h-64 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.906601146711!2d90.39126311543065!3d23.75090398458877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b05f37b0f7%3A0x4629e33d775d8d3!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1698458690077!5m2!1sen!2sus"
          width="100%"
          height="100%"
          className="border-0"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}
