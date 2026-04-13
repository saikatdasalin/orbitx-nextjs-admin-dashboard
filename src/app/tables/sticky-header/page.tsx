"use client";

import { useState, useEffect } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";

function StickyHeaderTableContent() {
  const [data, setData] = useState(() => 
    Array.from({ length: 50 }, (_, i) => ({
      id: i + 1,
      product: `Product ${i + 1}`,
      category: ["Electronics", "Clothing", "Home", "Sports", "Books"][i % 5],
      price: "$0.00",
      stock: 0,
      sales: 0,
      rating: "0.0",
    }))
  );

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: generate random data after hydration to avoid SSR mismatch */
  useEffect(() => {
    // Generate random data after hydration
    setData(
      Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        product: `Product ${i + 1}`,
        category: ["Electronics", "Clothing", "Home", "Sports", "Books"][i % 5],
        price: `$${(Math.random() * 500 + 10).toFixed(2)}`,
        stock: Math.floor(Math.random() * 1000),
        sales: Math.floor(Math.random() * 5000),
        rating: (Math.random() * 2 + 3).toFixed(1),
      }))
    );
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Sticky Header Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with fixed header on scroll</p>
        </div>

        <div className="premium-card overflow-hidden">
          <div className="max-h-[600px] overflow-auto">
            <table className="w-full">
              <thead className="sticky top-0 bg-[var(--background)] z-10">
                <tr className="border-b border-[var(--border)]">
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">ID</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">Product</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">Category</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">Price</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">Stock</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">Sales</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)] bg-[var(--secondary)]">Rating</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <tr key={row.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.id}</td>
                    <td className="px-6 py-4 font-medium text-[var(--foreground)]">{row.product}</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                        {row.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-medium text-[var(--foreground)]">{row.price}</td>
                    <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.stock}</td>
                    <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{row.sales}</td>
                    <td className="px-6 py-4">
                      <span className="flex items-center gap-1 text-sm">
                        <span className="text-yellow-500">★</span>
                        <span className="text-[var(--foreground)]">{row.rating}</span>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}


export default function StickyHeaderTablePage() {
  return (
    <StickyHeaderTableContent />
  );
}
