"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/Context/AuthContext";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";

export default function ManageProductsPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const [products, setProducts] = useState([]);
  const [loadingProducts, setLoadingProducts] = useState(true);

  // 🔐 PROTECTED ROUTE (reload-safe)
  useEffect(() => {
    if (!loading && !user) router.push("/login");
  }, [user, loading, router]);

  // 🔄 Fetch all products
  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      setProducts(data);
      setLoadingProducts(false);
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    if (user) fetchProducts();
  }, [user]);

  // ❌ Delete product
  const deleteProduct = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/products/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) throw new Error("Delete failed");

      setProducts(products.filter((p) => p._id !== id));
      toast.success("Product deleted");
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete");
    }
  };

  if (loading)
    return <div className="text-center mt-20 text-lg">Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Toaster position="top-right" />

      <h1 className="text-4xl font-bold mb-8 text-center">Manage Products</h1>

      {loadingProducts ? (
        <div className="text-center text-lg">Loading products...</div>
      ) : products.length === 0 ? (
        <div className="text-center text-lg mt-10">No products found</div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-2xl">
          <table className="table w-full">
            <thead className="bg-gray-100">
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Category</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((p) => (
                <tr key={p._id}>
                  <td>
                    <img
                      src={p.image || "/placeholder.png"}
                      alt={p.title}
                      className="w-16 h-16 rounded-md object-cover"
                    />
                  </td>

                  <td className="font-semibold">{p.title}</td>

                  <td>${p.price}</td>

                  <td>{p.category || "N/A"}</td>

                  <td className="flex items-center gap-3 justify-center">
                    {/* View Button */}
                    <Link
                      href={`/shop/${p._id}`}
                      className="btn btn-sm btn-info text-white"
                    >
                      View
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => deleteProduct(p._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
