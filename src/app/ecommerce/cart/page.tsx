"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const initialCartItems = [
  { id: 1, name: "iPhone 15 Pro Max", price: 1199, quantity: 1, image: "IP" },
  { id: 2, name: "AirPods Pro 2", price: 249, quantity: 2, image: "AP" },
  { id: 3, name: "MacBook Pro 16\"", price: 2499, quantity: 1, image: "MB" },
];

export default function CartPage() {
  const [cartItems, setCartItems] = useState(initialCartItems);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Shopping Cart</h1>
          <p className="text-[var(--muted-foreground)] mt-1">{cartItems.length} items in your cart</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={item.id} className="premium-card p-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl font-bold text-white">
                    {item.image}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-[var(--foreground)]">{item.name}</h3>
                    <p className="text-lg font-bold text-[var(--primary)] mt-1"><ClientOnlyText value={item.price} format="currency" /></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-2 rounded-xl border border-[var(--border)] p-1">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors"
                      >
                        <Minus className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                      <span className="w-8 text-center font-medium text-[var(--foreground)]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors"
                      >
                        <Plus className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                    </div>
                    <button 
                      onClick={() => removeItem(item.id)}
                      className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                    >
                      <Trash2 className="h-5 w-5 text-red-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <div className="premium-card p-12 text-center">
                <ShoppingCart className="h-16 w-16 mx-auto text-[var(--muted-foreground)] mb-4" />
                <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">Your cart is empty</h3>
                <p className="text-[var(--muted-foreground)]">Add some items to get started</p>
              </div>
            )}
          </div>

          <div className="premium-card p-6 h-fit">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted-foreground)]">Subtotal</span>
                <span className="font-medium text-[var(--foreground)]"><ClientOnlyText value={subtotal} format="currency" /></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted-foreground)]">Shipping</span>
                <span className="font-medium text-[var(--foreground)]">${shipping}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted-foreground)]">Tax</span>
                <span className="font-medium text-[var(--foreground)]">${tax.toFixed(2)}</span>
              </div>
              <div className="border-t border-[var(--border)] pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[var(--foreground)]">Total</span>
                  <span className="text-xl font-bold text-[var(--foreground)]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              Proceed to Checkout
              <ArrowRight className="h-4 w-4" />
            </button>
            <p className="text-xs text-center text-[var(--muted-foreground)] mt-4">
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
