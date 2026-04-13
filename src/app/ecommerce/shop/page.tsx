"use client";

import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

const products = [
  { id: 1, name: "Wireless Headphones", price: 299, originalPrice: 399, rating: 4.5, reviews: 128, image: "headphones" },
  { id: 2, name: "Smart Watch Pro", price: 449, originalPrice: 549, rating: 4.8, reviews: 256, image: "watch" },
  { id: 3, name: "Laptop Stand", price: 79, originalPrice: 99, rating: 4.2, reviews: 64, image: "stand" },
  { id: 4, name: "USB-C Hub", price: 59, originalPrice: 79, rating: 4.6, reviews: 189, image: "hub" },
  { id: 5, name: "Mechanical Keyboard", price: 149, originalPrice: 199, rating: 4.7, reviews: 312, image: "keyboard" },
  { id: 6, name: "Wireless Mouse", price: 69, originalPrice: 89, rating: 4.4, reviews: 95, image: "mouse" },
  { id: 7, name: "Monitor Light Bar", price: 89, originalPrice: 119, rating: 4.3, reviews: 78, image: "light" },
  { id: 8, name: "Webcam HD", price: 129, originalPrice: 159, rating: 4.5, reviews: 142, image: "webcam" },
];

const categories = ["All", "Electronics", "Accessories", "Audio", "Computers"];

export default function ShopPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Shop</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Browse our collection of products</p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <div className="lg:w-64 space-y-6">
            <div className="bg-card rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-foreground dark:text-white mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                        : "text-muted-foreground dark:text-muted-foreground hover:bg-accent"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-foreground dark:text-white mb-4">Price Range</h3>
              <div className="space-y-4">
                <input type="range" min="0" max="500" className="w-full" />
                <div className="flex items-center gap-2">
                  <input type="number" placeholder="Min" className="w-full rounded-lg border border-border bg-card py-1 px-2 text-sm" />
                  <span className="text-muted-foreground">-</span>
                  <input type="number" placeholder="Max" className="w-full rounded-lg border border-border bg-card py-1 px-2 text-sm" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="bg-card rounded-xl p-4 shadow-sm mb-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input type="text" placeholder="Search products..." className="w-full rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="flex items-center gap-2">
                  <select className="rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white">
                    <option>Sort by: Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                    <option>Best Rating</option>
                  </select>
                  <button onClick={() => setViewMode("grid")} className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600" : "text-muted-foreground hover:bg-accent"}`}>
                    <Grid className="h-5 w-5" />
                  </button>
                  <button onClick={() => setViewMode("list")} className={`p-2 rounded-lg ${viewMode === "list" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600" : "text-muted-foreground hover:bg-accent"}`}>
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            <div className={viewMode === "grid" ? "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" : "space-y-4"}>
              {products.map((product) => (
                <div key={product.id} className={`bg-card rounded-xl shadow-sm overflow-hidden group ${viewMode === "list" ? "flex" : ""}`}>
                  <div className={`bg-secondary flex items-center justify-center relative ${viewMode === "list" ? "w-48 h-48" : "aspect-square"}`}>
                    <span className="text-muted-foreground">{product.image}</span>
                    <button className="absolute top-2 right-2 p-2 bg-card rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-opacity">
                      <Heart className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </div>
                  <div className="p-4 flex-1">
                    <h3 className="font-medium text-foreground dark:text-white mb-1">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="text-sm text-muted-foreground dark:text-muted-foreground">{product.rating} ({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-foreground dark:text-white">${product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">${product.originalPrice}</span>
                    </div>
                    <button className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-medium">
                      <ShoppingCart className="h-4 w-4" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
