"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import AreaChart from "@/components/charts/AreaChart";
import BarChart from "@/components/charts/BarChart";
import DonutChart from "@/components/charts/DonutChart";
import {
  executiveStats,
  forecastData,
} from "@/data/dashboard-data";
import {
  DollarSign,
  TrendingUp,
  CreditCard,
  ShoppingCart,
  MoreVertical,
  Users,
  Globe,
  ArrowUpRight,
} from "lucide-react";

const revenueExpenseData = [
  { month: "Jan", revenue: 45000, expense: 30000 },
  { month: "Feb", revenue: 52000, expense: 35000 },
  { month: "Mar", revenue: 48000, expense: 32000 },
  { month: "Apr", revenue: 61000, expense: 40000 },
  { month: "May", revenue: 55000, expense: 38000 },
  { month: "Jun", revenue: 67000, expense: 45000 },
];

const salesByCategoryData = [
  { name: "Electronics", value: 35, color: "#3b82f6" },
  { name: "Clothing", value: 25, color: "#10b981" },
  { name: "Home & Garden", value: 20, color: "#f59e0b" },
  { name: "Sports", value: 12, color: "#8b5cf6" },
  { name: "Others", value: 8, color: "#ef4444" },
];

const socialFollowers = [
  { platform: "Facebook", followers: "125K", change: 12.5, color: "bg-blue-500" },
  { platform: "Twitter", followers: "89K", change: 8.3, color: "bg-sky-400" },
  { platform: "Instagram", followers: "234K", change: 15.2, color: "bg-pink-500" },
  { platform: "LinkedIn", followers: "67K", change: 5.8, color: "bg-blue-700" },
];

const recentCustomers = [
  { name: "John Smith", email: "john@example.com", amount: "$1,250", date: "Dec 5, 2024" },
  { name: "Emily Brown", email: "emily@example.com", amount: "$890", date: "Dec 4, 2024" },
  { name: "Michael Davis", email: "michael@example.com", amount: "$2,340", date: "Dec 4, 2024" },
  { name: "Jessica Wilson", email: "jessica@example.com", amount: "$560", date: "Dec 3, 2024" },
  { name: "David Lee", email: "david@example.com", amount: "$1,890", date: "Dec 3, 2024" },
];

const biggestDeals = [
  { company: "Tech Corp", value: "$125,000", status: "Closed", probability: 100 },
  { company: "Global Inc", value: "$89,000", status: "Negotiation", probability: 75 },
  { company: "StartUp XYZ", value: "$67,000", status: "Proposal", probability: 50 },
  { company: "Enterprise Co", value: "$234,000", status: "Closed", probability: 100 },
];

export default function ExecutiveDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6" suppressHydrationWarning>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" suppressHydrationWarning>
          <StatCard
            title="Total ARR"
            value={executiveStats.totalARR.value}
            change={executiveStats.totalARR.change}
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Total Sales"
            value={executiveStats.totalSales.value}
            change={executiveStats.totalSales.change}
            icon={<TrendingUp className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Total Costs"
            value={executiveStats.totalCosts.value}
            change={executiveStats.totalCosts.change}
            icon={<CreditCard className="h-5 w-5 text-red-600" />}
            iconBgColor="bg-red-100"
          />
          <StatCard
            title="Total Order"
            value={executiveStats.totalOrder.value}
            change={executiveStats.totalOrder.change}
            icon={<ShoppingCart className="h-5 w-5 text-purple-600" />}
            iconBgColor="bg-purple-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2" suppressHydrationWarning>
          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Revenue vs Expense</h3>
                <p className="text-sm text-muted-foreground">Monthly comparison</p>
              </div>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <AreaChart
              data={revenueExpenseData}
              dataKeys={[
                { key: "revenue", color: "#3b82f6", name: "Revenue" },
                { key: "expense", color: "#ef4444", name: "Expense" },
              ]}
              xAxisKey="month"
              height={280}
              showLegend
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Forecast</h3>
                <p className="text-sm text-muted-foreground">Actual vs Target</p>
              </div>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <BarChart
              data={forecastData}
              dataKeys={[
                { key: "actual", color: "#3b82f6", name: "Actual" },
                { key: "target", color: "#e5e7eb", name: "Target" },
              ]}
              xAxisKey="day"
              height={280}
              showLegend
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3" suppressHydrationWarning>
          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Sales by Category</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <DonutChart
              data={salesByCategoryData}
              height={220}
              innerRadius={50}
              outerRadius={70}
              showLegend
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Social Followers</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4" suppressHydrationWarning>
              {socialFollowers.map((social, index) => (
                <div key={index} className="flex items-center justify-between" suppressHydrationWarning>
                  <div className="flex items-center gap-3" suppressHydrationWarning>
                    <div className={`h-10 w-10 rounded-lg ${social.color} flex items-center justify-center`} suppressHydrationWarning>
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div suppressHydrationWarning>
                      <p className="text-sm font-medium text-foreground">{social.platform}</p>
                      <p className="text-xs text-muted-foreground">{social.followers} followers</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-green-600">
                    <ArrowUpRight className="h-4 w-4" />
                    {social.change}%
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Website Analytics</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4" suppressHydrationWarning>
              <div className="flex items-center justify-between" suppressHydrationWarning>
                <span className="text-sm text-muted-foreground">Page Views</span>
                <span className="text-sm font-semibold text-foreground">125,430</span>
              </div>
              <div className="flex items-center justify-between" suppressHydrationWarning>
                <span className="text-sm text-muted-foreground">Unique Visitors</span>
                <span className="text-sm font-semibold text-foreground">45,230</span>
              </div>
              <div className="flex items-center justify-between" suppressHydrationWarning>
                <span className="text-sm text-muted-foreground">Bounce Rate</span>
                <span className="text-sm font-semibold text-foreground">32.5%</span>
              </div>
              <div className="flex items-center justify-between" suppressHydrationWarning>
                <span className="text-sm text-muted-foreground">Avg. Session</span>
                <span className="text-sm font-semibold text-foreground">4m 32s</span>
              </div>
              <div className="flex items-center justify-between" suppressHydrationWarning>
                <span className="text-sm text-muted-foreground">Conversion Rate</span>
                <span className="text-sm font-semibold text-foreground">3.2%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2" suppressHydrationWarning>
          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Conversion Rate</h3>
              <a href="/deals" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-4" suppressHydrationWarning>
              {biggestDeals.map((deal, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3" suppressHydrationWarning>
                  <div suppressHydrationWarning>
                    <p className="text-sm font-medium text-foreground">{deal.company}</p>
                    <p className="text-xs text-muted-foreground">{deal.status}</p>
                  </div>
                  <div className="text-right" suppressHydrationWarning>
                    <p className="text-sm font-semibold text-foreground">{deal.value}</p>
                    <p className="text-xs text-muted-foreground">{deal.probability}% probability</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6" suppressHydrationWarning>
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Recent Customers</h3>
              <a href="/customers" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="overflow-x-auto" suppressHydrationWarning>
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Amount</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentCustomers.map((customer, index) => (
                    <tr key={index} className="border-b border-border" suppressHydrationWarning>
                      <td className="py-3" suppressHydrationWarning>
                        <div className="flex items-center gap-3" suppressHydrationWarning>
                          <div className="h-8 w-8 rounded-full bg-muted flex items-center justify-center" suppressHydrationWarning>
                            <Users className="h-4 w-4 text-muted-foreground" />
                          </div>
                          <div suppressHydrationWarning>
                            <p className="text-sm font-medium text-foreground">{customer.name}</p>
                            <p className="text-xs text-muted-foreground">{customer.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-3 text-sm font-medium text-foreground">{customer.amount}</td>
                      <td className="py-3 text-sm text-muted-foreground">{customer.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
