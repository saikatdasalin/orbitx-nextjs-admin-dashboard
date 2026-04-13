"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  ShoppingCart, 
  Search, 
  Plus, 
  Minus,
  Trash2,
  CreditCard,
  Banknote,
  QrCode
} from "lucide-react";
import { useState } from "react";

const products = [
  { id: 1, name: "Espresso", price: 3.50, category: "Coffee", image: "ES" },
  { id: 2, name: "Cappuccino", price: 4.50, category: "Coffee", image: "CA" },
  { id: 3, name: "Latte", price: 4.00, category: "Coffee", image: "LA" },
  { id: 4, name: "Croissant", price: 3.00, category: "Pastry", image: "CR" },
  { id: 5, name: "Muffin", price: 2.50, category: "Pastry", image: "MU" },
  { id: 6, name: "Bagel", price: 2.00, category: "Pastry", image: "BA" },
  { id: 7, name: "Orange Juice", price: 3.50, category: "Drinks", image: "OJ" },
  { id: 8, name: "Smoothie", price: 5.00, category: "Drinks", image: "SM" },
];

const categories = ["All", "Coffee", "Pastry", "Drinks"];

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

export default function PointOfSalePage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const addToCart = (product: typeof products[0]) => {
    setCart(items => {
      const existing = items.find(item => item.id === product.id);
      if (existing) {
        return items.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...items, { id: product.id, name: product.name, price: product.price, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, delta: number) => {
    setCart(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: Math.max(0, item.quantity + delta) } : item
      ).filter(item => item.quantity > 0)
    );
  };

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  const filteredProducts = products.filter(p => 
    (activeCategory === "All" || p.category === activeCategory) &&
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Point of Sale</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Process customer orders</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? "bg-[var(--primary)] text-white"
                        : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--secondary)]/80"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {filteredProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => addToCart(product)}
                  className="premium-card p-4 text-left hover:border-[var(--primary)] transition-colors"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-lg font-bold text-white mb-3">
                    {product.image}
                  </div>
                  <p className="font-medium text-[var(--foreground)]">{product.name}</p>
                  <p className="text-lg font-bold text-[var(--primary)]">${product.price.toFixed(2)}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="premium-card p-6 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="h-5 w-5 text-[var(--foreground)]" />
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Current Order</h3>
            </div>

            {cart.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 mx-auto text-[var(--muted-foreground)] mb-2" />
                <p className="text-[var(--muted-foreground)]">Cart is empty</p>
              </div>
            ) : (
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 rounded-xl bg-[var(--secondary)]">
                    <div className="flex-1">
                      <p className="font-medium text-[var(--foreground)]">{item.name}</p>
                      <p className="text-sm text-[var(--muted-foreground)]">${item.price.toFixed(2)} each</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        className="rounded-lg p-1.5 hover:bg-[var(--background)] transition-colors"
                      >
                        <Minus className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                      <span className="w-6 text-center font-medium text-[var(--foreground)]">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        className="rounded-lg p-1.5 hover:bg-[var(--background)] transition-colors"
                      >
                        <Plus className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-[var(--border)] pt-4 space-y-2 mb-6">
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted-foreground)]">Subtotal</span>
                <span className="font-medium text-[var(--foreground)]">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--muted-foreground)]">Tax (8%)</span>
                <span className="font-medium text-[var(--foreground)]">${tax.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between pt-2 border-t border-[var(--border)]">
                <span className="font-semibold text-[var(--foreground)]">Total</span>
                <span className="text-xl font-bold text-[var(--foreground)]">${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="space-y-3">
              <button className="w-full rounded-xl bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <CreditCard className="h-4 w-4" />
                Pay with Card
              </button>
              <div className="grid grid-cols-2 gap-3">
                <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2">
                  <Banknote className="h-4 w-4" />
                  Cash
                </button>
                <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center justify-center gap-2">
                  <QrCode className="h-4 w-4" />
                  QR Pay
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
