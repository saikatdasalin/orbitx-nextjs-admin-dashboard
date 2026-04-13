"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Code, 
  Search, 
  Plus,
  Copy,
  Edit,
  Trash2,
  Tag
} from "lucide-react";
import { useState } from "react";

const snippets = [
  { id: 1, title: "Welcome Email", category: "Email", content: "Dear {customer_name}, Welcome to our platform! We're excited to have you on board...", tags: ["welcome", "onboarding"] },
  { id: 2, title: "Password Reset", category: "Email", content: "Hi {customer_name}, We received a request to reset your password. Click the link below...", tags: ["security", "password"] },
  { id: 3, title: "Order Confirmation", category: "Email", content: "Thank you for your order #{order_id}! Your items will be shipped within 2-3 business days...", tags: ["order", "confirmation"] },
  { id: 4, title: "Refund Processed", category: "Support", content: "Your refund of ${amount} has been processed and will appear in your account within 5-7 days...", tags: ["refund", "billing"] },
  { id: 5, title: "Technical Issue Response", category: "Support", content: "Thank you for reporting this issue. Our technical team is investigating and will update you...", tags: ["technical", "bug"] },
  { id: 6, title: "Subscription Renewal", category: "Billing", content: "Your subscription will renew on {date}. You will be charged ${amount} to your payment method...", tags: ["subscription", "billing"] },
];

const categories = ["All", "Email", "Support", "Billing"];

export default function SnippetsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSnippets = snippets.filter(s => 
    (activeCategory === "All" || s.category === activeCategory) &&
    (s.title.toLowerCase().includes(searchQuery.toLowerCase()) || s.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Snippets</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage reusable text snippets</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Snippet
          </button>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
            <input
              type="text"
              placeholder="Search snippets..."
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

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredSnippets.map((snippet) => (
            <div key={snippet.id} className="premium-card p-5 group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl p-2.5 bg-gradient-to-br from-blue-500 to-purple-600">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[var(--foreground)]">{snippet.title}</h3>
                    <span className="text-sm text-[var(--muted-foreground)]">{snippet.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
              </div>
              <p className="text-sm text-[var(--muted-foreground)] mb-3 line-clamp-2">{snippet.content}</p>
              <div className="flex items-center gap-2">
                {snippet.tags.map((tag) => (
                  <span key={tag} className="flex items-center gap-1 rounded-full bg-[var(--secondary)] px-2.5 py-1 text-xs text-[var(--foreground)]">
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
