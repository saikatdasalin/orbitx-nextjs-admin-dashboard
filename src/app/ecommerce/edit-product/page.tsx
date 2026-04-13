"use client";

import { Upload, Save, ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";

export default function EditProductPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/products" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Edit Product</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Update product information</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20">
              <Trash2 className="h-5 w-5" />
              Delete
            </button>
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              <Save className="h-5 w-5" />
              Save Changes
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
                  <input type="text" defaultValue="Premium Wireless Headphones" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea rows={4} defaultValue="Experience premium sound quality with our wireless headphones. Features active noise cancellation, 30-hour battery life, and comfortable over-ear design." className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">SKU</label>
                    <input type="text" defaultValue="PRD-001" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Barcode</label>
                    <input type="text" defaultValue="123456789012" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Media</h2>
              <div className="grid grid-cols-4 gap-4 mb-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-square bg-secondary rounded-lg flex items-center justify-center relative group">
                    <span className="text-muted-foreground text-sm">Image {i}</span>
                    <button className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                ))}
                <div className="aspect-square border-2 border-dashed border-border rounded-lg flex flex-col items-center justify-center cursor-pointer hover:border-blue-500">
                  <Upload className="h-6 w-6 text-muted-foreground mb-1" />
                  <span className="text-xs text-muted-foreground">Add</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Pricing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input type="number" defaultValue="299.00" className="w-full rounded-lg border border-border bg-card py-2 pl-8 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Compare at Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input type="number" defaultValue="399.00" className="w-full rounded-lg border border-border bg-card py-2 pl-8 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Status</h2>
              <select defaultValue="Active" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option>Draft</option>
                <option>Active</option>
                <option>Archived</option>
              </select>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Category</h2>
              <select defaultValue="Electronics" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option>Electronics</option>
                <option>Clothing</option>
                <option>Home & Garden</option>
                <option>Sports</option>
              </select>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Inventory</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Quantity</label>
                  <input type="number" defaultValue="150" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600" defaultChecked />
                  <span className="text-sm text-foreground">Track quantity</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
