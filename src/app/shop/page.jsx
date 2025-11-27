// "use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";

// export default function ShopPage() {
//   const [products, setProducts] = useState([]);
//   const [searchText, setSearchText] = useState("");
//   const [category, setCategory] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetch(
//       `http://localhost:5000/products${category ? `?category=${category}` : ""}`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Fetch products error:", err);
//         setLoading(false);
//       });
//   }, [category]);

//   const filtered = products.filter((p) =>
//     p.title?.toLowerCase().includes(searchText.toLowerCase())
//   );

//   if (loading)
//     return (
//       <div className="flex justify-center py-20">
//         <span className="loading loading-spinner loading-lg"></span>
//       </div>
//     );

//   // helper to robustly convert various _id shapes to a string id
//   const getIdString = (rawId) => {
//     if (!rawId && rawId !== 0) return "";
//     // If it's a MongoDB ObjectId instance (has toHexString)
//     if (typeof rawId === "object" && typeof rawId.toHexString === "function") {
//       return rawId.toHexString();
//     }
//     // If it's stored like { $oid: "..." }
//     if (typeof rawId === "object" && rawId.$oid) {
//       return String(rawId.$oid);
//     }
//     // fallback
//     return String(rawId);
//   };

//   return (
//     <div className="max-w-7xl mx-auto px-6 py-16">
//       <h1 className="text-6xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//         Shop Our Collection
//       </h1>

//       <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
//         <input
//           type="text"
//           placeholder="Search..."
//           className="input input-bordered w-full md:w-96"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//         />
//         <select
//           className="select select-bordered"
//           value={category}
//           onChange={(e) => setCategory(e.target.value)}
//         >
//           <option value="">All Categories</option>
//           <option>Electronics</option>
//           <option>Audio</option>
//           <option>Gaming</option>
//         </select>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {filtered.map((product) => {
//           const id = getIdString(product._id);

//           return (
//             <Link key={id} href={`/shop/${id}`} className="block group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col h-full">
//                 <div className="relative h-64 bg-gray-100">
//                   <img
//                     src={product.image || "/placeholder.jpg"}
//                     alt={product.title}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
//                   />
//                   <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
//                     NEW
//                   </span>
//                 </div>
//                 <div className="p-6 flex flex-col flex-grow">
//                   <h3 className="text-xl font-bold mb-2 line-clamp-2">
//                     {product.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
//                     {product.shortDescription || "Premium quality product"}
//                   </p>
//                   <div className="flex justify-between items-center mt-auto">
//                     <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                       ${product.price}
//                     </p>
//                     <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
//                       View Details
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ShopPage() {
  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/products${category ? `?category=${category}` : ""}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Fetch products error:", err);
        setLoading(false);
      });
  }, [category]);

  const filtered = products.filter((p) =>
    p.title?.toLowerCase().includes(searchText.toLowerCase())
  );

  const getIdString = (rawId) => {
    if (!rawId && rawId !== 0) return "";
    if (typeof rawId === "object" && rawId.toHexString)
      return rawId.toHexString();
    if (typeof rawId === "object" && rawId.$oid) return rawId.$oid;
    return String(rawId);
  };

  if (loading)
    return <div className="flex justify-center py-20">Loading...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Shop Our Collection
      </h1>

      <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full md:w-96"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <select
          className="select select-bordered"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          <option>Electronics</option>
          <option>Audio</option>
          <option>Gaming</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filtered.map((product) => {
          const id = getIdString(product._id);
          return (
            <Link key={id} href={`/shop/${id}`} className="block group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 overflow-hidden flex flex-col h-full">
                <div className="relative h-64 bg-gray-100">
                  <img
                    src={product.image || "/placeholder.jpg"}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <span className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    NEW
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                    {product.shortDescription || "Premium quality product"}
                  </p>
                  <div className="flex justify-between items-center mt-auto">
                    <p className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      ${product.price}
                    </p>
                    <button className="cursor-pointer bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
