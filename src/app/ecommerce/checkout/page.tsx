"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import { 
  CreditCard, 
  Lock,
  Check
} from "lucide-react";
import { useState } from "react";

const orderItems = [
  { name: "iPhone 15 Pro Max", quantity: 1, price: 1199 },
  { name: "AirPods Pro 2", quantity: 2, price: 249 },
  { name: "MacBook Pro 16\"", quantity: 1, price: 2499 },
];

export default function CheckoutPage() {
  const [step, setStep] = useState(1);

  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 25;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Checkout</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Complete your purchase</p>
        </div>

        <div className="flex items-center justify-center gap-4 mb-8">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center">
              <div className={`h-10 w-10 rounded-full flex items-center justify-center font-semibold ${
                step >= s ? "bg-[var(--primary)] text-white" : "bg-[var(--secondary)] text-[var(--muted-foreground)]"
              }`}>
                {step > s ? <Check className="h-5 w-5" /> : s}
              </div>
              {s < 3 && (
                <div className={`w-20 h-1 mx-2 rounded ${step > s ? "bg-[var(--primary)]" : "bg-[var(--secondary)]"}`} />
              )}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Shipping Information</h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">First Name</label>
                  <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="John" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Last Name</label>
                  <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="Doe" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Address</label>
                  <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="123 Main St" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">City</label>
                  <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="San Francisco" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">ZIP Code</label>
                  <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="94102" />
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Payment Method</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-4 rounded-xl border-2 border-[var(--primary)] bg-[var(--primary)]/5">
                  <CreditCard className="h-6 w-6 text-[var(--primary)]" />
                  <span className="font-medium text-[var(--foreground)]">Credit Card</span>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="sm:col-span-2">
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Card Number</label>
                    <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="4242 4242 4242 4242" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Expiry Date</label>
                    <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="MM/YY" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--foreground)] mb-2">CVC</label>
                    <input type="text" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" placeholder="123" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="premium-card p-6 h-fit">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Order Summary</h3>
            <div className="space-y-3 mb-6">
              {orderItems.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-[var(--muted-foreground)]">{item.name} x{item.quantity}</span>
                  <span className="font-medium text-[var(--foreground)]"><ClientOnlyText value={item.price * item.quantity} format="currency" /></span>
                </div>
              ))}
              <div className="border-t border-[var(--border)] pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-[var(--muted-foreground)]">Subtotal</span>
                  <span className="font-medium text-[var(--foreground)]"><ClientOnlyText value={subtotal} format="currency" /></span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[var(--muted-foreground)]">Shipping</span>
                  <span className="font-medium text-[var(--foreground)]">${shipping}</span>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-[var(--muted-foreground)]">Tax</span>
                  <span className="font-medium text-[var(--foreground)]">${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t border-[var(--border)] pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-[var(--foreground)]">Total</span>
                  <span className="text-xl font-bold text-[var(--foreground)]">${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <button className="w-full rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
              <Lock className="h-4 w-4" />
              Place Order
            </button>
            <p className="text-xs text-center text-[var(--muted-foreground)] mt-4 flex items-center justify-center gap-1">
              <Lock className="h-3 w-3" />
              Secure checkout powered by Stripe
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
