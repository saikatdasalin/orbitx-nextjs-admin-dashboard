"use client";

import { Save, ArrowLeft, Package } from "lucide-react";
import Link from "next/link";

const orderItems = [
  { id: 1, name: "Premium Wireless Headphones", sku: "PRD-001", quantity: 1, price: 299.00 },
  { id: 2, name: "USB-C Charging Cable", sku: "PRD-045", quantity: 2, price: 19.99 },
];

export default function EditOrderPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/orders" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Edit Order #ORD-2024-001</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Update order information</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Save className="h-5 w-5" />
            Save Changes
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Order Items</h2>
              <div className="space-y-4">
                {orderItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                    <div className="w-16 h-16 bg-muted dark:bg-gray-600 rounded-lg flex items-center justify-center">
                      <Package className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground dark:text-white">{item.name}</h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">SKU: {item.sku}</p>
                    </div>
                    <input type="number" defaultValue={item.quantity} className="w-20 rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                    <div className="w-24 text-right font-medium text-foreground dark:text-white">${(item.price * item.quantity).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Shipping Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" defaultValue="John" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" defaultValue="Smith" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                  <input type="text" defaultValue="123 Main Street, Apt 4B" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <input type="text" defaultValue="New York" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
                  <input type="text" defaultValue="10001" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Order Status</h2>
              <select defaultValue="processing" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option value="pending">Pending</option>
                <option value="processing">Processing</option>
                <option value="shipped">Shipped</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Subtotal</span>
                  <span>$338.98</span>
                </div>
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Shipping</span>
                  <span>$9.99</span>
                </div>
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Tax</span>
                  <span>$33.90</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground dark:text-white pt-2 border-t border-border">
                  <span>Total</span>
                  <span>$382.87</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Notes</h2>
              <textarea rows={3} defaultValue="Customer requested gift wrapping." className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
