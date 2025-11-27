"use client";

const features = [
  {
    image: "/Shipping.png",
    title: "Fast Shipping",
    desc: "Get your products delivered quickly.",
  },
  {
    image: "/Payment.png",
    title: "Secure Payment",
    desc: "100% safe and secure checkout.",
  },
  {
    image: "/Support.png",
    title: "24/7 Support",
    desc: "We are here to help anytime.",
  },
  {
    image: "/Returns.png",
    title: "Easy Returns",
    desc: "Hassle-free returns within 30 days.",
  },
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
      <h2 className="text-4xl md:text-4xl font-extrabold text-center mb-20 text-primary">
        Why Choose ShopiGo?
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
        {features.map((f, i) => (
          <div
            key={i}
            className="group relative bg-white/70 backdrop-blur-2xl border border-white/30 rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-8"
            style={{ animationDelay: `${i * 150}ms` }}
          >
            {/* Floating Glow Background */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-pink-500/20 blur-3xl opacity-0 group-hover:opacity-70 transition-opacity duration-1000 -z-10" />

            <div className="relative mx-auto w-32 h-32 mb-10 flex items-center justify-center">
              {/* Outer Glow Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 blur-3xl scale-0 group-hover:scale-125 transition-transform duration-700" />

              {/* Icon Background Circle */}
              <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-600/10 backdrop-blur-md border border-white/40 shadow-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-500">
                {/* Main Icon - Super Large */}
                <img
                  src={f.image}
                  alt={f.title}
                  className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-700"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
              {f.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-center text-base md:text-lg leading-relaxed px-4">
              {f.desc}
            </p>

            {/* Bottom Shine Line */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-all duration-700" />
          </div>
        ))}
      </div>
    </section>
  );
}
