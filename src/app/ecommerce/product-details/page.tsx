"use client";

import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, ArrowLeft, Minus, Plus } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ProductDetailsPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("M");

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <Link href="/ecommerce/products" className="inline-flex items-center gap-2 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white mb-6">
          <ArrowLeft className="h-5 w-5" />
          Back to Products
        </Link>

        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="grid lg:grid-cols-2 gap-8 p-8">
            <div>
              <div className="aspect-square bg-secondary rounded-xl flex items-center justify-center mb-4">
                <span className="text-muted-foreground text-lg">Product Image</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-secondary rounded-lg flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-blue-500">
                    <span className="text-muted-foreground text-xs">Thumb {i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded">In Stock</span>
                <span className="text-muted-foreground dark:text-muted-foreground text-sm">SKU: PRD-001</span>
              </div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white mb-2">Premium Wireless Headphones</h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className={`h-5 w-5 ${i <= 4 ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
                  ))}
                </div>
                <span className="text-muted-foreground dark:text-muted-foreground text-sm">(128 reviews)</span>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-foreground dark:text-white">$299.00</span>
                <span className="text-lg text-muted-foreground line-through">$399.00</span>
                <span className="px-2 py-1 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 text-sm font-medium rounded">25% OFF</span>
              </div>

              <p className="text-muted-foreground dark:text-muted-foreground mb-6">
                Experience premium sound quality with our wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design.
              </p>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Color</label>
                <div className="flex gap-2">
                  {["black", "white", "blue"].map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-10 h-10 rounded-full border-2 ${selectedColor === color ? "border-blue-500" : "border-border"}`}
                      style={{ backgroundColor: color === "white" ? "#f5f5f5" : color }}
                    />
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">Size</label>
                <div className="flex gap-2">
                  {["S", "M", "L", "XL"].map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-12 h-10 rounded-lg border font-medium ${
                        selectedSize === size
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-600"
                          : "border-border text-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center border border-border rounded-lg">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:bg-accent">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:bg-accent">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <button className="flex-1 flex items-center justify-center gap-2 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-medium">
                  <ShoppingCart className="h-5 w-5" />
                  Add to Cart
                </button>
                <button className="p-3 border border-border rounded-lg hover:bg-accent">
                  <Heart className="h-5 w-5" />
                </button>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                  <Truck className="h-5 w-5" />
                  <span>Free Shipping</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                  <Shield className="h-5 w-5" />
                  <span>2 Year Warranty</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground">
                  <RotateCcw className="h-5 w-5" />
                  <span>30 Day Returns</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
