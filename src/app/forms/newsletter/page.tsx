"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import { 
  Mail, 
  Users, 
  Send,
  FileText,
  Calendar,
  TrendingUp,
  Plus,
  Search,
  Eye,
  Edit,
  Trash2
} from "lucide-react";
import { useState } from "react";

const stats = [
  { title: "Total Subscribers", value: "12,458", change: "+256", icon: Users, color: "from-blue-500 to-blue-600" },
  { title: "Emails Sent", value: "45,892", change: "+1,234", icon: Send, color: "from-green-500 to-green-600" },
  { title: "Open Rate", value: "42.5%", change: "+2.3%", icon: Eye, color: "from-purple-500 to-purple-600" },
  { title: "Click Rate", value: "18.2%", change: "+1.1%", icon: TrendingUp, color: "from-orange-500 to-orange-600" },
];

const campaigns = [
  { id: 1, name: "December Newsletter", status: "Sent", recipients: 12458, openRate: "45.2%", clickRate: "18.5%", date: "Dec 1, 2024" },
  { id: 2, name: "Black Friday Sale", status: "Sent", recipients: 11892, openRate: "52.8%", clickRate: "24.3%", date: "Nov 29, 2024" },
  { id: 3, name: "Product Launch", status: "Draft", recipients: 0, openRate: "-", clickRate: "-", date: "Dec 15, 2024" },
  { id: 4, name: "Holiday Greetings", status: "Scheduled", recipients: 12458, openRate: "-", clickRate: "-", date: "Dec 25, 2024" },
];

export default function NewsletterPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Newsletter</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage email campaigns</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Campaign
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.title} className="premium-card p-5">
              <div className="flex items-center gap-4">
                <div className={`rounded-xl p-3 bg-gradient-to-br ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{stat.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search campaigns..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Campaign</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Recipients</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Open Rate</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Click Rate</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Date</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {campaigns.map((campaign) => (
                  <tr key={campaign.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="py-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl p-2.5 bg-gradient-to-br from-blue-500 to-purple-600">
                          <Mail className="h-5 w-5 text-white" />
                        </div>
                        <span className="font-medium text-[var(--foreground)]">{campaign.name}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        campaign.status === "Sent" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        campaign.status === "Scheduled" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                        "bg-secondary dark:bg-gray-900/30 text-muted-foreground dark:text-muted-foreground"
                      }`}>
                        {campaign.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-[var(--foreground)]"><ClientOnlyText value={campaign.recipients} format="number" /></td>
                    <td className="py-4 text-sm text-[var(--foreground)]">{campaign.openRate}</td>
                    <td className="py-4 text-sm text-[var(--foreground)]">{campaign.clickRate}</td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{campaign.date}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
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
      </div>
    </DashboardLayout>
  );
}
