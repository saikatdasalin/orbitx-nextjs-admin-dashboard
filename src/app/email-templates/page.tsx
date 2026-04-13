"use client";

import { Mail, Plus, Search, Edit, Copy, Trash2, Eye } from "lucide-react";
import { useState } from "react";

const templates = [
  { id: 1, name: "Welcome Email", category: "Onboarding", subject: "Welcome to Our Platform!", lastModified: "2024-12-01", status: "active" },
  { id: 2, name: "Password Reset", category: "Security", subject: "Reset Your Password", lastModified: "2024-11-28", status: "active" },
  { id: 3, name: "Order Confirmation", category: "Transactional", subject: "Your Order Has Been Confirmed", lastModified: "2024-11-25", status: "active" },
  { id: 4, name: "Newsletter", category: "Marketing", subject: "This Week's Updates", lastModified: "2024-11-20", status: "draft" },
  { id: 5, name: "Invoice", category: "Billing", subject: "Invoice #{{invoice_number}}", lastModified: "2024-11-15", status: "active" },
  { id: 6, name: "Feedback Request", category: "Engagement", subject: "We'd Love Your Feedback", lastModified: "2024-11-10", status: "draft" },
];

export default function EmailTemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTemplates = templates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      template.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Email Templates</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Manage your email templates</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            Create Template
          </button>
        </div>

        <div className="bg-card rounded-2xl shadow-lg">
          <div className="p-4 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Template</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Subject</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Modified</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-muted-foreground dark:text-muted-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTemplates.map((template) => (
                  <tr key={template.id} className="border-b border-border/50 hover:bg-accent/50">
                    <td className="py-4 px-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                          <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <span className="font-medium text-foreground dark:text-white">{template.name}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground dark:text-muted-foreground">{template.category}</td>
                    <td className="py-4 px-6 text-muted-foreground dark:text-muted-foreground max-w-xs truncate">{template.subject}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          template.status === "active"
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                            : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                        }`}
                      >
                        {template.status}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-muted-foreground dark:text-muted-foreground">{template.lastModified}</td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg">
                          <Eye className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg">
                          <Copy className="h-4 w-4" />
                        </button>
                        <button className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg">
                          <Trash2 className="h-4 w-4" />
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
    </div>
  );
}
