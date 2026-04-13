"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { FileText, Search, Filter, Plus, Eye, Download, Send, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const invoices = [
  { id: "INV-001", client: "Tech Corp", email: "billing@techcorp.com", amount: "$2,500.00", date: "Dec 1, 2024", due: "Dec 15, 2024", status: "Paid" },
  { id: "INV-002", client: "Global Inc", email: "accounts@global.com", amount: "$4,750.00", date: "Dec 3, 2024", due: "Dec 17, 2024", status: "Pending" },
  { id: "INV-003", client: "StartUp XYZ", email: "finance@startup.xyz", amount: "$1,200.00", date: "Dec 5, 2024", due: "Dec 19, 2024", status: "Pending" },
  { id: "INV-004", client: "Enterprise Co", email: "ap@enterprise.co", amount: "$8,900.00", date: "Nov 28, 2024", due: "Dec 12, 2024", status: "Overdue" },
  { id: "INV-005", client: "Digital Ltd", email: "billing@digital.ltd", amount: "$3,350.00", date: "Nov 25, 2024", due: "Dec 9, 2024", status: "Paid" },
  { id: "INV-006", client: "Creative Agency", email: "accounts@creative.agency", amount: "$5,600.00", date: "Dec 6, 2024", due: "Dec 20, 2024", status: "Draft" },
];

export default function InvoiceListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Invoices</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage and track your invoices</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Create Invoice
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">
                <FileText className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">$26,300</p>
                <p className="text-sm text-[var(--muted-foreground)]">Total Invoiced</p>
              </div>
            </div>
          </div>
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-green-100 dark:bg-green-900/30 p-3">
                <FileText className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">$5,850</p>
                <p className="text-sm text-[var(--muted-foreground)]">Paid</p>
              </div>
            </div>
          </div>
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-100 dark:bg-orange-900/30 p-3">
                <FileText className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">$5,950</p>
                <p className="text-sm text-[var(--muted-foreground)]">Pending</p>
              </div>
            </div>
          </div>
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-red-100 dark:bg-red-900/30 p-3">
                <FileText className="h-6 w-6 text-red-600 dark:text-red-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">$8,900</p>
                <p className="text-sm text-[var(--muted-foreground)]">Overdue</p>
              </div>
            </div>
          </div>
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search invoices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <button className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-medium text-[var(--foreground)] hover:bg-[var(--secondary)] transition-colors flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Invoice</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Client</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Amount</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Date</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Due Date</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b border-[var(--border)] last:border-0">
                    <td className="py-4 font-medium text-[var(--primary)]">{invoice.id}</td>
                    <td className="py-4">
                      <div>
                        <p className="font-medium text-[var(--foreground)]">{invoice.client}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{invoice.email}</p>
                      </div>
                    </td>
                    <td className="py-4 font-semibold text-[var(--foreground)]">{invoice.amount}</td>
                    <td className="py-4 text-[var(--muted-foreground)]">{invoice.date}</td>
                    <td className="py-4 text-[var(--muted-foreground)]">{invoice.due}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        invoice.status === "Paid" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        invoice.status === "Pending" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                        invoice.status === "Overdue" ? "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" :
                        "bg-secondary dark:bg-gray-900/30 text-muted-foreground dark:text-muted-foreground"
                      }`}>
                        {invoice.status}
                      </span>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center gap-2">
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Download className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Send className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                      </div>
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
