"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

const data = [
  {
    id: 1,
    category: "Electronics",
    totalProducts: 156,
    totalSales: "$45,230",
    items: [
      { name: "Smartphone", sku: "EL-001", price: "$699", stock: 45 },
      { name: "Laptop", sku: "EL-002", price: "$1,299", stock: 23 },
      { name: "Tablet", sku: "EL-003", price: "$499", stock: 67 },
    ],
  },
  {
    id: 2,
    category: "Clothing",
    totalProducts: 234,
    totalSales: "$28,450",
    items: [
      { name: "T-Shirt", sku: "CL-001", price: "$29", stock: 120 },
      { name: "Jeans", sku: "CL-002", price: "$79", stock: 85 },
      { name: "Jacket", sku: "CL-003", price: "$149", stock: 42 },
    ],
  },
  {
    id: 3,
    category: "Home & Garden",
    totalProducts: 89,
    totalSales: "$15,780",
    items: [
      { name: "Plant Pot", sku: "HG-001", price: "$19", stock: 200 },
      { name: "Garden Tools", sku: "HG-002", price: "$45", stock: 78 },
      { name: "Outdoor Chair", sku: "HG-003", price: "$89", stock: 34 },
    ],
  },
];

export default function CollapsibleTablePage() {
  const [expandedRows, setExpandedRows] = useState<number[]>([]);

  const toggleRow = (id: number) => {
    if (expandedRows.includes(id)) {
      setExpandedRows(expandedRows.filter(r => r !== id));
    } else {
      setExpandedRows([...expandedRows, id]);
    }
  };

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Collapsible Table</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Table with expandable rows</p>
        </div>

        <div className="premium-card p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)] w-10"></th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Category</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Total Products</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Total Sales</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row) => (
                  <>
                    <tr key={row.id} className="border-b border-[var(--border)] hover:bg-[var(--secondary)]/50 transition-colors cursor-pointer" onClick={() => toggleRow(row.id)}>
                      <td className="py-4">
                        <button className="rounded-lg p-1 hover:bg-[var(--secondary)] transition-colors">
                          {expandedRows.includes(row.id) ? (
                            <ChevronDown className="h-4 w-4 text-[var(--foreground)]" />
                          ) : (
                            <ChevronRight className="h-4 w-4 text-[var(--foreground)]" />
                          )}
                        </button>
                      </td>
                      <td className="py-4 font-medium text-[var(--foreground)]">{row.category}</td>
                      <td className="py-4 text-sm text-[var(--muted-foreground)]">{row.totalProducts}</td>
                      <td className="py-4 text-sm font-medium text-[var(--foreground)]">{row.totalSales}</td>
                    </tr>
                    {expandedRows.includes(row.id) && (
                      <tr key={`${row.id}-expanded`}>
                        <td colSpan={4} className="bg-[var(--secondary)]/30 p-4">
                          <table className="w-full">
                            <thead>
                              <tr className="border-b border-[var(--border)]">
                                <th className="pb-3 text-left text-xs font-medium text-[var(--muted-foreground)]">Product Name</th>
                                <th className="pb-3 text-left text-xs font-medium text-[var(--muted-foreground)]">SKU</th>
                                <th className="pb-3 text-left text-xs font-medium text-[var(--muted-foreground)]">Price</th>
                                <th className="pb-3 text-left text-xs font-medium text-[var(--muted-foreground)]">Stock</th>
                              </tr>
                            </thead>
                            <tbody>
                              {row.items.map((item, idx) => (
                                <tr key={idx} className="border-b border-[var(--border)] last:border-0">
                                  <td className="py-3 text-sm text-[var(--foreground)]">{item.name}</td>
                                  <td className="py-3 text-sm text-[var(--muted-foreground)]">{item.sku}</td>
                                  <td className="py-3 text-sm font-medium text-[var(--foreground)]">{item.price}</td>
                                  <td className="py-3 text-sm text-[var(--muted-foreground)]">{item.stock}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    )}
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
