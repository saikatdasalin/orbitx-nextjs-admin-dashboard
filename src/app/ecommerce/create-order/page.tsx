"use client";

import { Plus, Trash2, Save, ArrowLeft, Search } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function CreateOrderPage() {
  const [nextId, setNextId] = useState(2);
  const [items, setItems] = useState([{ id: 1, product: "", quantity: 1, price: 0 }]);

  const addItem = () => {
    setItems([...items, { id: nextId, product: "", quantity: 1, price: 0 }]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/orders" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Create Order</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Create a new order manually</p>
            </div>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Save className="h-5 w-5" />
            Create Order
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Customer</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input type="text" placeholder="Search customer by name or email..." className="w-full rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Products</h2>
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <input type="text" placeholder="Search product..." className="w-full rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                    </div>
                    <input type="number" placeholder="Qty" defaultValue={1} className="w-20 rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                    <div className="w-24 text-right font-medium text-foreground dark:text-white">$0.00</div>
                    <button onClick={() => removeItem(item.id)} className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
              <button onClick={addItem} className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                <Plus className="h-5 w-5" />
                Add Product
              </button>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Shipping Address</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">City</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Subtotal</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Tax</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground dark:text-white pt-2 border-t border-border">
                  <span>Total</span>
                  <span>$0.00</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Payment</h2>
              <select className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option>Cash on Delivery</option>
                <option>Credit Card</option>
                <option>Bank Transfer</option>
              </select>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Notes</h2>
              <textarea rows={3} placeholder="Add order notes..." className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
