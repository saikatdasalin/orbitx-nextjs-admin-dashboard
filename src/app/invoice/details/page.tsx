"use client";

import { Download, Printer, Mail, ArrowLeft, CheckCircle } from "lucide-react";
import Link from "next/link";

const invoiceItems = [
  { id: 1, description: "Website Design", quantity: 1, rate: 2500, amount: 2500 },
  { id: 2, description: "Frontend Development", quantity: 40, rate: 75, amount: 3000 },
  { id: 3, description: "Backend Development", quantity: 30, rate: 85, amount: 2550 },
  { id: 4, description: "UI/UX Consultation", quantity: 5, rate: 150, amount: 750 },
];

export default function InvoiceDetailsPage() {
  const subtotal = invoiceItems.reduce((sum, item) => sum + item.amount, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link href="/invoice" className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white">
            <ArrowLeft className="h-5 w-5" />
            Back to Invoices
          </Link>
          <div className="flex items-center gap-2">
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent dark:hover:bg-gray-800">
              <Printer className="h-4 w-4" />
              Print
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent dark:hover:bg-gray-800">
              <Mail className="h-4 w-4" />
              Send
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
              <Download className="h-4 w-4" />
              Download
            </button>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h1 className="text-3xl font-bold text-foreground dark:text-white">INVOICE</h1>
              <p className="text-muted-foreground dark:text-muted-foreground mt-1">#INV-2024-001</p>
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
              <CheckCircle className="h-4 w-4" />
              Paid
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground dark:text-muted-foreground mb-2">From</h3>
              <p className="font-semibold text-foreground dark:text-white">Acme Corporation</p>
              <p className="text-muted-foreground dark:text-muted-foreground">123 Business Street</p>
              <p className="text-muted-foreground dark:text-muted-foreground">New York, NY 10001</p>
              <p className="text-muted-foreground dark:text-muted-foreground">billing@acme.com</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground dark:text-muted-foreground mb-2">Bill To</h3>
              <p className="font-semibold text-foreground dark:text-white">John Smith</p>
              <p className="text-muted-foreground dark:text-muted-foreground">456 Client Avenue</p>
              <p className="text-muted-foreground dark:text-muted-foreground">Los Angeles, CA 90001</p>
              <p className="text-muted-foreground dark:text-muted-foreground">john@client.com</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8 p-4 bg-secondary/50 rounded-xl">
            <div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">Invoice Date</p>
              <p className="font-medium text-foreground dark:text-white">Dec 01, 2024</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">Due Date</p>
              <p className="font-medium text-foreground dark:text-white">Dec 15, 2024</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">Payment Method</p>
              <p className="font-medium text-foreground dark:text-white">Bank Transfer</p>
            </div>
          </div>

          <table className="w-full mb-8">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Description</th>
                <th className="text-right py-3 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Qty</th>
                <th className="text-right py-3 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Rate</th>
                <th className="text-right py-3 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Amount</th>
              </tr>
            </thead>
            <tbody>
              {invoiceItems.map((item) => (
                <tr key={item.id} className="border-b border-border/50">
                  <td className="py-4 text-foreground dark:text-white">{item.description}</td>
                  <td className="py-4 text-right text-muted-foreground dark:text-muted-foreground">{item.quantity}</td>
                  <td className="py-4 text-right text-muted-foreground dark:text-muted-foreground">${item.rate.toFixed(2)}</td>
                  <td className="py-4 text-right font-medium text-foreground dark:text-white">${item.amount.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>

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
