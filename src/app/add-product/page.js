"use client";

import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "@/Context/AuthContext";

export default function AddProductPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const [form, setForm] = useState({
    title: "",
    shortDescription: "",
    description: "",
    price: "",
    date: new Date().toISOString().split("T")[0],
    priority: "Normal",
    image: "",
    category: "",
    rating: 0,
  });

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        ...form,
        userEmail: user?.email || "unknown@example.com",
      };

      const res = await fetch("http://localhost:5000/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed to add product");

      toast.success("Product added successfully!");
      setForm({
        title: "",
        shortDescription: "",
        description: "",
        price: "",
        date: new Date().toISOString().split("T")[0],
        priority: "Normal",
        image: "",
        category: "",
        rating: 0,
      });
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong");
    }
  };

  if (loading) return <div className="text-center mt-20">Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <Toaster position="top-right" />
      <h1 className="text-4xl font-bold mb-8 text-center">Add Product</h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block font-semibold mb-2">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Short Description</label>
          <input
            type="text"
            name="shortDescription"
            value={form.shortDescription}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Full Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            className="textarea textarea-bordered w-full"
            rows={5}
            required
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-semibold mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Priority</label>
            <select
              name="priority"
              value={form.priority}
              onChange={handleChange}
              className="select select-bordered w-full"
            >
              <option>Low</option>
              <option>Normal</option>
              <option>High</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block font-semibold mb-2">Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">Rating (Optional)</label>
          <input
            type="number"
            name="rating"
            value={form.rating}
            onChange={handleChange}
            className="input input-bordered w-full"
            step="0.1"
            min="0"
            max="5"
          />
        </div>

        <div>
          <label className="block font-semibold mb-2">
            Image URL (Optional)
          </label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
