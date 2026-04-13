"use client";

import { Upload, X, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateProductPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/products" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Create Product</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Add a new product to your store</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Save className="h-5 w-5" />
            Save Product
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Basic Information</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Product Name</label>
                  <input type="text" placeholder="Enter product name" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Description</label>
                  <textarea rows={4} placeholder="Enter product description" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">SKU</label>
                    <input type="text" placeholder="PRD-001" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Barcode</label>
                    <input type="text" placeholder="123456789" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Media</h2>
              <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground dark:text-muted-foreground mb-2">Drag and drop images here</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">or</p>
                <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium">
                  Browse Files
                </button>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Pricing</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input type="number" placeholder="0.00" className="w-full rounded-lg border border-border bg-card py-2 pl-8 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Compare at Price</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input type="number" placeholder="0.00" className="w-full rounded-lg border border-border bg-card py-2 pl-8 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Cost per Item</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input type="number" placeholder="0.00" className="w-full rounded-lg border border-border bg-card py-2 pl-8 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Profit</label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                    <input type="number" placeholder="0.00" disabled className="w-full rounded-lg border border-border bg-secondary dark:bg-gray-600 py-2 pl-8 pr-4 text-foreground dark:text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Status</h2>
              <select className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option>Draft</option>
                <option>Active</option>
                <option>Archived</option>
              </select>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Category</h2>
              <select className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option>Select category</option>
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
                  <input type="number" placeholder="0" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                  <span className="text-sm text-foreground">Track quantity</span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="w-4 h-4 rounded text-blue-600" />
                  <span className="text-sm text-foreground">Continue selling when out of stock</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
