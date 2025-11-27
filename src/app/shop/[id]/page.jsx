// src/app/shop/[id]/page.jsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Star,
  Package,
  Truck,
  Shield,
  Calendar,
  Tag,
} from "lucide-react";

async function getProduct(id) {
  try {
    const res = await fetch(`http://localhost:5000/products/${id}`, {
      cache: "no-store",
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Fetch error:", err);
    return null;
  }
}

export default async function ProductDetails({ params }) {
  const { id } = await params;
  if (!id) notFound();

  const product = await getProduct(id);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 sm:pt-10">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 sm:gap-3 text-gray-700 hover:text-purple-600 font-semibold text-base sm:text-lg transition-all duration-300 group"
        >
          <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 group-hover:-translate-x-1 transition" />
          Back to Shop
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
          {/* Large Image Banner */}
          <div className="order-2 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl bg-white">
              <img
                src={product.image || "/placeholder.jpg"}
                alt={product.title}
                className="w-full object-cover h-64 sm:h-80 md:h-[420px] lg:h-[520px] hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6">
                <span className="bg-red-600 text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-full font-bold text-xs sm:text-sm shadow-lg">
                  BEST SELLER
                </span>
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="order-1 lg:order-2 flex flex-col justify-center">
            <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl sm:shadow-2xl p-6 sm:p-10 lg:p-12 border border-gray-100">
              {/* Product Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 mb-4 sm:mb-6 leading-tight">
                {product.title}
              </h1>

              {/* Price */}
              <div className="mb-8 sm:mb-10">
                <div className="flex flex-wrap items-baseline gap-3 sm:gap-4">
                  <p className="text-4xl sm:text-5xl lg:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    ${product.price}
                  </p>
                  <p className="text-xl sm:text-2xl text-gray-500 line-through">
                    ${(product.price * 1.4).toFixed(2)}
                  </p>
                  <span className="bg-red-100 text-red-700 px-3 py-1.5 rounded-full font-bold text-xs sm:text-sm">
                    -30% OFF
                  </span>
                </div>
              </div>

              {/* Meta Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10 text-gray-700">
                <div className="flex items-center gap-3">
                  <Tag className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Category</p>
                    <p className="font-semibold">
                      {product.category || "Electronics"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Package className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">
                      Availability
                    </p>
                    <p className="font-semibold text-green-600">In Stock</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Delivery</p>
                    <p className="font-semibold">Free Across Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500">Added</p>
                    <p className="font-semibold">November 25, 2025</p>
                  </div>
                </div>
              </div>

              {/* Full Description */}
              <div className="mb-10 sm:mb-12">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-5 flex items-center gap-3">
                  <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  Product Description
                </h3>
                <div className="prose prose-sm sm:prose-lg text-gray-700 leading-relaxed space-y-3 sm:space-y-4">
                  <p className="whitespace-pre-line">
                    {product.description ||
                      product.shortDescription ||
                      "Experience premium product features and quality."}
                  </p>
                  <ul className="list-disc list-inside space-y-1 sm:space-y-2 mt-2 sm:mt-4 text-gray-600">
                    <li>Active Noise Cancellation (ANC)</li>
                    <li>40+ Hours Battery Life</li>
                    <li>Bluetooth 5.3 Connectivity</li>
                    <li>Premium Build Quality</li>
                    <li>1 Year Official Warranty</li>
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold text-lg sm:text-xl py-4 sm:py-6 rounded-xl sm:rounded-2xl hover:scale-105 transition-all duration-300 shadow-xl sm:shadow-2xl hover:shadow-purple-500/50 flex items-center justify-center gap-3 sm:gap-4">
                <Package className="w-6 h-6 sm:w-8 sm:h-8" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
