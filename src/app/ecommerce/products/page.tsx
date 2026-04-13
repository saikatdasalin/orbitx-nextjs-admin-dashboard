"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Package, 
  Plus, 
  Search, 
  Filter,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye,
  Star
} from "lucide-react";
import { useState } from "react";

const products = [
  { id: 1, name: "iPhone 15 Pro Max", category: "Electronics", price: "$1,199", stock: 45, status: "In Stock", rating: 4.8, image: "IP" },
  { id: 2, name: "MacBook Pro 16\"", category: "Electronics", price: "$2,499", stock: 23, status: "In Stock", rating: 4.9, image: "MB" },
  { id: 3, name: "AirPods Pro 2", category: "Electronics", price: "$249", stock: 156, status: "In Stock", rating: 4.7, image: "AP" },
  { id: 4, name: "Nike Air Max 90", category: "Footwear", price: "$130", stock: 0, status: "Out of Stock", rating: 4.5, image: "NA" },
  { id: 5, name: "Samsung Galaxy S24", category: "Electronics", price: "$899", stock: 67, status: "In Stock", rating: 4.6, image: "SG" },
  { id: 6, name: "Sony WH-1000XM5", category: "Electronics", price: "$349", stock: 34, status: "In Stock", rating: 4.8, image: "SW" },
  { id: 7, name: "iPad Pro 12.9\"", category: "Electronics", price: "$1,099", stock: 12, status: "Low Stock", rating: 4.7, image: "IP" },
  { id: 8, name: "Apple Watch Ultra 2", category: "Electronics", price: "$799", stock: 28, status: "In Stock", rating: 4.9, image: "AW" },
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Products</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage your product inventory</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Product
          </button>
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Product</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Category</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Price</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Stock</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Rating</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-[var(--border)] last:border-0">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-sm font-semibold text-white">
                          {product.image}
                        </div>
                        <span className="font-medium text-[var(--foreground)]">{product.name}</span>
                      </div>
                    </td>
                    <td className="py-4 text-[var(--muted-foreground)]">{product.category}</td>
                    <td className="py-4 font-semibold text-[var(--foreground)]">{product.price}</td>
                    <td className="py-4 text-[var(--muted-foreground)]">{product.stock}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        product.status === "In Stock" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        product.status === "Low Stock" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                        "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400"
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-[var(--foreground)]">{product.rating}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Edit className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-[var(--muted-foreground)]">Showing 1-8 of 8 products</p>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="rounded-lg bg-[var(--primary)] px-3 py-1.5 text-sm text-white">1</button>
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors disabled:opacity-50" disabled>
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
