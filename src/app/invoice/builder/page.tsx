"use client";

import { Plus, Trash2, Save, Eye } from "lucide-react";
import { useState } from "react";

interface InvoiceItem {
  id: number;
  description: string;
  quantity: number;
  rate: number;
}

export default function InvoiceBuilderPage() {
  const [nextId, setNextId] = useState(2);
  const [items, setItems] = useState<InvoiceItem[]>([
    { id: 1, description: "", quantity: 1, rate: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { id: nextId, description: "", quantity: 1, rate: 0 }]);
    setNextId(nextId + 1);
  };

  const removeItem = (id: number) => {
    if (items.length > 1) {
      setItems(items.filter((item) => item.id !== id));
    }
  };

  const updateItem = (id: number, field: keyof InvoiceItem, value: string | number) => {
    setItems(items.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const subtotal = items.reduce((sum, item) => sum + item.quantity * item.rate, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Invoice Builder</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Create a new invoice</p>
          </div>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent dark:hover:bg-gray-800">
              <Eye className="h-4 w-4" />
              Preview
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Save className="h-4 w-4" />
              Save Invoice
            </button>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">From</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Your Company Name" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                <input type="text" placeholder="Address" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                <input type="email" placeholder="Email" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">Bill To</h3>
              <div className="space-y-4">
                <input type="text" placeholder="Client Name" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                <input type="text" placeholder="Client Address" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                <input type="email" placeholder="Client Email" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Invoice Number</label>
              <input type="text" placeholder="#INV-001" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Invoice Date</label>
              <input type="date" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Due Date</label>
              <input type="date" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-4">Items</h3>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4">
                  <input
                    type="text"
                    placeholder="Description"
                    value={item.description}
                    onChange={(e) => updateItem(item.id, "description", e.target.value)}
                    className="flex-1 rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Qty"
                    value={item.quantity}
                    onChange={(e) => updateItem(item.id, "quantity", parseInt(e.target.value) || 0)}
                    className="w-20 rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                  <input
                    type="number"
                    placeholder="Rate"
                    value={item.rate}
                    onChange={(e) => updateItem(item.id, "rate", parseFloat(e.target.value) || 0)}
                    className="w-28 rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none"
                  />
                  <div className="w-28 text-right font-medium text-foreground dark:text-white">
                    ${(item.quantity * item.rate).toFixed(2)}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
            <button
              onClick={addItem}
              className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              <Plus className="h-5 w-5" />
              Add Item
            </button>
          </div>

          <div className="flex justify-end">
            <div className="w-64 space-y-2">
              <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-muted-foreground dark:text-muted-foreground">
                <span>Tax (10%)</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-foreground dark:text-white pt-2 border-t border-border">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
