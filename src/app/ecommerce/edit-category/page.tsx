"use client";

import { Upload, Save, ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";

export default function EditCategoryPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/categories" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Edit Category</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Update category information</p>
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

        <div className="bg-card rounded-xl p-6 shadow-sm space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category Name</label>
            <input type="text" defaultValue="Electronics" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Slug</label>
            <input type="text" defaultValue="electronics" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Parent Category</label>
            <select defaultValue="none" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
              <option value="none">None (Top Level)</option>
              <option>Clothing</option>
              <option>Home & Garden</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Description</label>
            <textarea rows={4} defaultValue="Browse our wide selection of electronic devices and accessories." className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Category Image</label>
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-secondary rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground text-sm">Image</span>
              </div>
              <div>
                <button className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-medium">
                  Change Image
                </button>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground mt-2">Recommended: 400x400px</p>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Status</label>
            <select defaultValue="active" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

          <div className="pt-4 border-t border-border">
            <h3 className="text-sm font-medium text-foreground mb-2">Category Statistics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-foreground dark:text-white">156</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Products</p>
              </div>
              <div className="bg-secondary/50 rounded-lg p-4">
                <p className="text-2xl font-bold text-foreground dark:text-white">3</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Subcategories</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
