"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Folder, 
  Plus, 
  Search, 
  Edit,
  Trash2,
  MoreHorizontal,
  Package
} from "lucide-react";
import { useState } from "react";

const categories = [
  { id: 1, name: "Electronics", slug: "electronics", products: 156, icon: "E", color: "bg-blue-500" },
  { id: 2, name: "Clothing", slug: "clothing", products: 234, icon: "C", color: "bg-pink-500" },
  { id: 3, name: "Home & Garden", slug: "home-garden", products: 89, icon: "H", color: "bg-green-500" },
  { id: 4, name: "Sports", slug: "sports", products: 67, icon: "S", color: "bg-orange-500" },
  { id: 5, name: "Books", slug: "books", products: 312, icon: "B", color: "bg-purple-500" },
  { id: 6, name: "Toys", slug: "toys", products: 45, icon: "T", color: "bg-yellow-500" },
  { id: 7, name: "Beauty", slug: "beauty", products: 128, icon: "B", color: "bg-red-500" },
  { id: 8, name: "Automotive", slug: "automotive", products: 56, icon: "A", color: "bg-cyan-500" },
];

export default function CategoriesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Categories</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage product categories</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Category
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div key={category.id} className="premium-card p-5 group">
              <div className="flex items-start justify-between mb-4">
                <div className={`rounded-xl p-3 ${category.color}`}>
                  <Folder className="h-6 w-6 text-white" />
                </div>
                <button className="opacity-0 group-hover:opacity-100 rounded-lg p-1.5 hover:bg-[var(--secondary)] transition-all">
                  <MoreHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
                </button>
              </div>
              <h3 className="font-semibold text-[var(--foreground)] mb-1">{category.name}</h3>
              <p className="text-sm text-[var(--muted-foreground)] mb-3">/{category.slug}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-sm text-[var(--muted-foreground)]">
                  <Package className="h-4 w-4" />
                  <span>{category.products} products</span>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="rounded-lg p-1.5 hover:bg-[var(--secondary)] transition-colors">
                    <Edit className="h-4 w-4 text-[var(--muted-foreground)]" />
                  </button>
                  <button className="rounded-lg p-1.5 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                    <Trash2 className="h-4 w-4 text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
