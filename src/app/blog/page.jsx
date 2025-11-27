// src/app/blog/page.jsx
import Link from "next/link";

export const metadata = {
  title: "Blog - Shopi Go",
  description: "Latest Reviews, Tech Tips & Exclusive Deals from Shopi Go",
};

export default function BlogPage() {
  const blogs = [
    {
      id: 1,
      title: "Top 10 Wireless Earbuds in 2025 – Which One Should You Buy?",
      excerpt:
        "We tested over 50 earbuds this year. From crystal-clear sound to insane battery life and comfort that lasts all day – here are the absolute best wireless earbuds you can buy right now in 2025.",
      author: "Rahim Khan",
      date: "November 25, 2025",
      readTime: "8 min read",
      category: "Reviews",
      image:
        "https://paikaree.com.bd/public/uploads/products/photos/model-p9-wireless-bluetooth-headphone-white-paikaree-3ibw.webp",
      slug: "top-10-wireless-earbuds-2025",
    },
    {
      id: 2,
      title: "How to Choose the Perfect Gaming Headset for PS5 & PC",
      excerpt:
        "Surround sound, crystal-clear mic, RGB lighting, comfort for long sessions – we break down everything you need to know before dropping money on a gaming headset in 2025.",
      author: "Karim Ahmed",
      date: "November 20, 2025",
      readTime: "6 min read",
      category: "Guide",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepwpNJK5D9kgMWdlWDTUoPbgDU5z7Zq5tzQ&s",
      slug: "gaming-headset-buying-guide",
    },
    {
      id: 3,
      title: "Why Noise-Cancelling Headphones Are a Must in 2025",
      excerpt:
        "Whether you're working from home, traveling, or just want peace – Active Noise Cancellation (ANC) is no longer a luxury. Here's why every serious buyer needs ANC headphones now.",
      author: "Fatema Akter",
      date: "November 18, 2025",
      readTime: "5 min read",
      category: "Tech",
      image:
        "https://sm.pcmag.com/pcmag_uk/photo/s/sony-wh-10/sony-wh-1000xm6_ak31.jpg",
      slug: "why-noise-cancelling-matters",
    },
    {
      id: 4,
      title: "Black Friday Deals 2025 – Best Gadgets Under $50",
      excerpt:
        "Insane discounts on wireless earbuds, fast chargers, smartwatches, RGB keyboards and more! These are the hottest deals you don't want to miss this Black Friday 2025.",
      author: "Shopi Go Team",
      date: "November 15, 2025",
      readTime: "4 min read",
      category: "Deals",
      image: "https://cdn.mos.cms.futurecdn.net/L8KMFsnbvfRKrweZuzoBBi.jpg",
      slug: "black-friday-deals-2025",
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <div className="rounded-b-2xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-4xl font-extrabold mb-6 tracking-tight">
            Shopi Go Blog
          </h1>
          <p className="text-xl md:text-2xl font-light opacity-95 max-w-4xl mx-auto">
            Honest Reviews • Expert Guides • Exclusive Deals
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.id}
              href={`/blog/${blog.slug}`}
              className="group block"
            >
              <article className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden h-full flex flex-col border border-gray-100">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                  <img
                    src={blog.image || "/placeholder.jpg"}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-4 py-2 rounded-full border border-white/30 shadow-lg">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* Meta Info */}
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                    <span className="font-medium text-gray-700">
                      {blog.author}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span>{blog.date}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-purple-600 font-medium">
                      {blog.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-2xl font-extrabold text-gray-800 mb-4 leading-tight group-hover:text-purple-600 transition line-clamp-3">
                    {blog.title}
                  </h2>

                  {/* Longer Description */}
                  <p className="text-gray-600 text-base leading-relaxed mb-6 flex-grow line-clamp-4">
                    {blog.excerpt}
                  </p>

                  {/* Read More Removed - Clean Bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 font-medium">
                        Click to read full article
                      </span>
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                        <svg
                          className="w-5 h-5 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-20">
          <button className="relative cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg px-12 py-5 rounded-2xl hover:scale-105 transition-all shadow-2xl hover:shadow-purple-500/50">
            <span>Load More Articles</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
