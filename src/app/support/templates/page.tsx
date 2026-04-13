"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  FileText, 
  Search, 
  Plus,
  Eye,
  Edit,
  Trash2,
  Copy
} from "lucide-react";
import { useState } from "react";

const templates = [
  { id: 1, name: "Welcome Email", category: "Onboarding", description: "Send to new users after registration", lastModified: "Dec 5, 2024", uses: 156 },
  { id: 2, name: "Password Reset", category: "Security", description: "Password reset confirmation email", lastModified: "Dec 3, 2024", uses: 89 },
  { id: 3, name: "Order Confirmation", category: "E-commerce", description: "Sent after successful order placement", lastModified: "Dec 1, 2024", uses: 234 },
  { id: 4, name: "Shipping Update", category: "E-commerce", description: "Notify customers about shipping status", lastModified: "Nov 28, 2024", uses: 178 },
  { id: 5, name: "Support Ticket Response", category: "Support", description: "Initial response to support tickets", lastModified: "Nov 25, 2024", uses: 312 },
  { id: 6, name: "Invoice", category: "Billing", description: "Monthly invoice template", lastModified: "Nov 20, 2024", uses: 67 },
];

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Email Templates</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage your email templates</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Template
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>
        </div>

        <div className="premium-card overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[var(--border)] bg-[var(--secondary)]/50">
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Template Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Category</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Last Modified</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Uses</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
              </tr>
            </thead>
            <tbody>
              {templates.map((template) => (
                <tr key={template.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/30 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="rounded-xl p-2.5 bg-gradient-to-br from-blue-500 to-purple-600">
                        <FileText className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[var(--foreground)]">{template.name}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">{template.description}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="rounded-full bg-[var(--secondary)] px-3 py-1 text-xs font-medium text-[var(--foreground)]">
                      {template.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[var(--muted-foreground)]">{template.lastModified}</td>
                  <td className="px-6 py-4 text-sm font-medium text-[var(--foreground)]">{template.uses}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                        <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                      <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                        <Copy className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                      <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                        <Edit className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                      <button className="rounded-lg p-2 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}
