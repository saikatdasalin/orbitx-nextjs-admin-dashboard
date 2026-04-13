"use client";

import { Upload, Save, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateCategoryPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/categories" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Create Category</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Add a new product category</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Save className="h-5 w-5" />
            Save Category
          </button>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category Name</label>
            <input type="text" placeholder="Enter category name" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Slug</label>
            <input type="text" placeholder="category-slug" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Parent Category</label>
            <select className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
              <option>None (Top Level)</option>
              <option>Electronics</option>
              <option>Clothing</option>
              <option>Home & Garden</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <textarea rows={4} placeholder="Enter category description" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category Image</label>
            <div className="border-2 border-dashed border-border rounded-xl p-8 text-center">
              <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground dark:text-muted-foreground mb-2">Drag and drop an image here</p>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground mb-4">or</p>
              <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium">
                Browse Files
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
              <option>Active</option>
              <option>Inactive</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
