"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Users, 
  DollarSign, 
  TrendingUp, 
  Link2,
  MoreHorizontal,
  ArrowUpRight,
  Copy,
  ExternalLink,
  Clock,
  Gift
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import ClientOnly from "@/components/ui/ClientOnly";

const stats = [
  { title: "Total Referrals", value: "2,847", change: "+18.5%", trending: true, icon: Users, iconBg: "bg-gradient-to-br from-blue-500 to-blue-600" },
  { title: "Total Earnings", value: "$12,450", change: "+24.3%", trending: true, icon: DollarSign, iconBg: "bg-gradient-to-br from-green-500 to-green-600" },
  { title: "Conversion Rate", value: "12.8%", change: "+3.2%", trending: true, icon: TrendingUp, iconBg: "bg-gradient-to-br from-purple-500 to-purple-600" },
  { title: "Active Links", value: "15", change: "+2", trending: true, icon: Link2, iconBg: "bg-gradient-to-br from-orange-500 to-orange-600" },
];

const earningsData = [
  { month: "Jan", earnings: 1200, referrals: 45 },
  { month: "Feb", earnings: 1800, referrals: 62 },
  { month: "Mar", earnings: 2400, referrals: 78 },
  { month: "Apr", earnings: 2100, referrals: 65 },
  { month: "May", earnings: 3200, referrals: 95 },
  { month: "Jun", earnings: 3800, referrals: 125 },
];

const topReferrers = [
  { name: "Landing Page", clicks: 1250, conversions: 156, earnings: "$3,120", rate: "12.5%" },
  { name: "Blog Post", clicks: 890, conversions: 98, earnings: "$1,960", rate: "11.0%" },
  { name: "Email Campaign", clicks: 650, conversions: 89, earnings: "$1,780", rate: "13.7%" },
  { name: "Social Media", clicks: 420, conversions: 45, earnings: "$900", rate: "10.7%" },
  { name: "YouTube Video", clicks: 380, conversions: 52, earnings: "$1,040", rate: "13.7%" },
];

const recentPayouts = [
  { date: "Dec 1, 2024", amount: "$1,250", status: "Completed", method: "PayPal" },
  { date: "Nov 1, 2024", amount: "$980", status: "Completed", method: "Bank Transfer" },
  { date: "Oct 1, 2024", amount: "$1,450", status: "Completed", method: "PayPal" },
  { date: "Sep 1, 2024", amount: "$870", status: "Completed", method: "Bank Transfer" },
];

const affiliateLinks = [
  { name: "Main Product", url: "https://example.com/ref/abc123", clicks: 450, conversions: 56 },
  { name: "Premium Plan", url: "https://example.com/ref/def456", clicks: 320, conversions: 38 },
  { name: "Starter Kit", url: "https://example.com/ref/ghi789", clicks: 280, conversions: 32 },
];

function StatCard({ title, value, change, trending, icon: Icon, iconBg }: {
  title: string;
  value: string;
  change: string;
  trending: boolean;
  icon: React.ElementType;
  iconBg: string;
}) {
  return (
    <div className="premium-card stat-card p-6">
      <div className="flex items-center justify-between">
        <div className={`rounded-2xl p-3.5 ${iconBg} shadow-lg`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
          trending 
            ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" 
            : "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
        }`}>
          <TrendingUp className={`h-4 w-4 ${!trending && "rotate-180"}`} />
          {change}
        </div>
      </div>
      <div className="mt-5">
        <h3 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">{value}</h3>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 font-medium">{title}</p>
      </div>
    </div>
  );
}

export default function AffiliateDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Affiliate Dashboard</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Track your referrals, earnings, and performance</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Gift className="h-4 w-4" />
            Request Payout
          </button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Earnings Overview</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Monthly earnings and referrals</p>
              </div>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 300 }} />}>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={earningsData}>
                  <defs>
                    <linearGradient id="colorEarnings" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#22c55e" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip contentStyle={{ backgroundColor: "var(--background)", border: "1px solid #e5e7eb", borderRadius: "8px" }} />
                  <Area type="monotone" dataKey="earnings" stroke="#22c55e" fillOpacity={1} fill="url(#colorEarnings)" name="Earnings ($)" />
                </AreaChart>
              </ResponsiveContainer>
            </ClientOnly>
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Your Links</h3>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <div className="space-y-4">
              {affiliateLinks.map((link, index) => (
                <div key={index} className="p-4 rounded-xl bg-[var(--secondary)]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-[var(--foreground)]">{link.name}</span>
                    <div className="flex items-center gap-2">
                      <button className="p-1.5 rounded-lg hover:bg-[var(--background)] transition-colors">
                        <Copy className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-[var(--background)] transition-colors">
                        <ExternalLink className="h-4 w-4 text-[var(--muted-foreground)]" />
                      </button>
                    </div>
                  </div>
                  <p className="text-xs text-[var(--muted-foreground)] truncate mb-3">{link.url}</p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-[var(--muted-foreground)]">{link.clicks} clicks</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">{link.conversions} conversions</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Top Performing Sources</h3>
              <a href="/affiliate/sources" className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Source</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Clicks</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Conv.</th>
                    <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Earnings</th>
                  </tr>
                </thead>
                <tbody>
                  {topReferrers.map((referrer, index) => (
                    <tr key={index} className="border-b border-[var(--border)] last:border-0">
                      <td className="py-3">
                        <span className="font-medium text-[var(--foreground)]">{referrer.name}</span>
                      </td>
                      <td className="py-3 text-[var(--muted-foreground)]">{referrer.clicks}</td>
                      <td className="py-3 text-[var(--muted-foreground)]">{referrer.conversions}</td>
                      <td className="py-3 font-semibold text-green-600 dark:text-green-400">{referrer.earnings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Recent Payouts</h3>
              <a href="/affiliate/payouts" className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {recentPayouts.map((payout, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/30">
                      <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]">{payout.amount}</p>
                      <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {payout.date}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="rounded-full px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      {payout.status}
                    </span>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">{payout.method}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
