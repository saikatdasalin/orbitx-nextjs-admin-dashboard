"use client";

import { Package, Truck, CheckCircle, ArrowLeft, Printer, Mail } from "lucide-react";
import Link from "next/link";

const orderItems = [
  { id: 1, name: "Premium Wireless Headphones", sku: "PRD-001", quantity: 1, price: 299.00 },
  { id: 2, name: "USB-C Charging Cable", sku: "PRD-045", quantity: 2, price: 19.99 },
  { id: 3, name: "Headphone Stand", sku: "PRD-078", quantity: 1, price: 49.99 },
];

const timeline = [
  { status: "Order Placed", date: "Dec 01, 2024 10:30 AM", completed: true },
  { status: "Payment Confirmed", date: "Dec 01, 2024 10:32 AM", completed: true },
  { status: "Processing", date: "Dec 02, 2024 09:00 AM", completed: true },
  { status: "Shipped", date: "Dec 03, 2024 02:15 PM", completed: true },
  { status: "Delivered", date: "Expected Dec 06, 2024", completed: false },
];

export default function OrderDetailsPage() {
  const subtotal = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 9.99;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Link href="/ecommerce/orders" className="p-2 hover:bg-accent dark:hover:bg-gray-800 rounded-lg">
              <ArrowLeft className="h-5 w-5 text-muted-foreground dark:text-muted-foreground" />
            </Link>
            <div>
              <h1 className="text-2xl font-bold text-foreground dark:text-white">Order #ORD-2024-001</h1>
              <p className="text-muted-foreground dark:text-muted-foreground">Placed on December 01, 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent dark:hover:bg-gray-800">
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent dark:hover:bg-gray-800">
              <Mail className="h-4 w-4" />
              Email
            </button>
          </div>
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
                    <div className="text-right">
                      <p className="font-medium text-foreground dark:text-white">${(item.price * item.quantity).toFixed(2)}</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border space-y-2">
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-foreground dark:text-white pt-2 border-t border-border">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Order Timeline</h2>
              <div className="space-y-4">
                {timeline.map((event, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${event.completed ? "bg-green-100 dark:bg-green-900/30" : "bg-secondary"}`}>
                      {event.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <Truck className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div>
                      <p className={`font-medium ${event.completed ? "text-foreground dark:text-white" : "text-muted-foreground dark:text-muted-foreground"}`}>{event.status}</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Customer</h2>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 dark:text-blue-400 font-semibold">JS</span>
                </div>
                <div>
                  <p className="font-medium text-foreground dark:text-white">John Smith</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">john@example.com</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">+1 (555) 123-4567</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Shipping Address</h2>
              <p className="text-muted-foreground dark:text-muted-foreground">
                John Smith<br />
                123 Main Street<br />
                Apt 4B<br />
                New York, NY 10001<br />
                United States
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-foreground dark:text-white mb-4">Payment</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">VISA</span>
                </div>
                <span className="text-muted-foreground dark:text-muted-foreground">**** **** **** 4242</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
