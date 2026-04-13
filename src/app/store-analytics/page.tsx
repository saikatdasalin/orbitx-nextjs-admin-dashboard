"use client";

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnly from "@/components/ui/ClientOnly";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import { TrendingUp, TrendingDown, ShoppingCart, Users, DollarSign, Package, ArrowUpRight, MoreHorizontal } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 4000, orders: 2400 },
  { month: "Feb", revenue: 3000, orders: 1398 },
  { month: "Mar", revenue: 2000, orders: 9800 },
  { month: "Apr", revenue: 2780, orders: 3908 },
  { month: "May", revenue: 1890, orders: 4800 },
  { month: "Jun", revenue: 2390, orders: 3800 },
  { month: "Jul", revenue: 3490, orders: 4300 },
  { month: "Aug", revenue: 4000, orders: 2400 },
  { month: "Sep", revenue: 3000, orders: 1398 },
  { month: "Oct", revenue: 2000, orders: 9800 },
  { month: "Nov", revenue: 2780, orders: 3908 },
  { month: "Dec", revenue: 3890, orders: 4800 },
];

const salesByCategory = [
  { name: "Electronics", value: 4000, color: "#3b82f6" },
  { name: "Clothing", value: 3000, color: "#8b5cf6" },
  { name: "Home & Garden", value: 2000, color: "#06b6d4" },
  { name: "Sports", value: 2780, color: "#22c55e" },
  { name: "Books", value: 1890, color: "#f59e0b" },
];

const topProducts = [
  { name: "Apple iPhone 15 Pro", sales: 2453, revenue: "$245,300", trend: "+12.5%", trending: true },
  { name: "Samsung Galaxy S24", sales: 1832, revenue: "$183,200", trend: "+8.3%", trending: true },
  { name: "Sony WH-1000XM5", sales: 1654, revenue: "$82,700", trend: "-2.1%", trending: false },
  { name: "MacBook Pro 14\"", sales: 1243, revenue: "$248,600", trend: "+15.7%", trending: true },
  { name: "iPad Air", sales: 987, revenue: "$59,220", trend: "+5.2%", trending: true },
];

const recentOrders = [
  { id: "#ORD-7352", customer: "John Smith", product: "iPhone 15 Pro", amount: "$999", status: "Delivered", date: "Dec 5, 2024" },
  { id: "#ORD-7351", customer: "Sarah Johnson", product: "MacBook Pro", amount: "$1,999", status: "Processing", date: "Dec 5, 2024" },
  { id: "#ORD-7350", customer: "Mike Wilson", product: "AirPods Pro", amount: "$249", status: "Shipped", date: "Dec 4, 2024" },
  { id: "#ORD-7349", customer: "Emily Davis", product: "iPad Air", amount: "$599", status: "Delivered", date: "Dec 4, 2024" },
  { id: "#ORD-7348", customer: "Chris Brown", product: "Apple Watch", amount: "$399", status: "Pending", date: "Dec 3, 2024" },
];

const weeklyHeatmap = [
  { day: "Mon", hours: [2, 4, 6, 8, 12, 15, 18, 14, 10, 8, 6, 4] },
  { day: "Tue", hours: [3, 5, 7, 10, 14, 18, 20, 16, 12, 9, 7, 5] },
  { day: "Wed", hours: [4, 6, 8, 12, 16, 20, 22, 18, 14, 10, 8, 6] },
  { day: "Thu", hours: [3, 5, 7, 11, 15, 19, 21, 17, 13, 9, 7, 5] },
  { day: "Fri", hours: [5, 7, 9, 13, 17, 21, 24, 20, 16, 12, 9, 7] },
  { day: "Sat", hours: [8, 10, 12, 16, 20, 24, 26, 22, 18, 14, 11, 9] },
  { day: "Sun", hours: [6, 8, 10, 14, 18, 22, 24, 20, 16, 12, 9, 7] },
];

function StatCard({ title, value, change, icon: Icon, iconBg, trending }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  iconBg: string;
  trending: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <div className="flex items-center justify-between">
        <div className={`rounded-lg p-3 ${iconBg}`}>
          <Icon className="h-6 w-6 text-white" />
        </div>
        <div className={`flex items-center gap-1 text-sm ${trending ? "text-green-600" : "text-red-600"}`}>
          {trending ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
          {change}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-2xl font-bold text-foreground dark:text-white">{value}</h3>
        <p className="text-sm text-muted-foreground dark:text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}

function HeatmapCell({ value }: { value: number }) {
  const intensity = Math.min(value / 26, 1);
  const bgColor = `rgba(59, 130, 246, ${intensity})`;
  return (
    <div
      className="h-6 w-6 rounded-sm"
      style={{ backgroundColor: bgColor }}
      title={`${value} orders`}
    />
  );
}

export default function StoreAnalyticsDashboard() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  /* eslint-disable react-hooks/set-state-in-effect -- Intentional: sync React state from DOM after mount for hydration safety */
  useEffect(() => {
    setMounted(true);
    const isDarkMode = document.documentElement.classList.contains('dark');
    setIsDark(isDarkMode);

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Store Analytics</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Welcome back! Here&apos;s what&apos;s happening with your store.</p>
          </div>
          <div className="flex items-center gap-3">
            <select className="rounded-lg border border-border bg-card px-4 py-2 text-sm text-foreground">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
              <option>This year</option>
            </select>
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Download Report
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Revenue"
            value="$45,231.89"
            change="+20.1%"
            icon={DollarSign}
            iconBg="bg-blue-500"
            trending={true}
          />
          <StatCard
            title="Total Orders"
            value="2,350"
            change="+15.3%"
            icon={ShoppingCart}
            iconBg="bg-purple-500"
            trending={true}
          />
          <StatCard
            title="Total Customers"
            value="1,247"
            change="+12.5%"
            icon={Users}
            iconBg="bg-cyan-500"
            trending={true}
          />
          <StatCard
            title="Products Sold"
            value="3,456"
            change="-2.4%"
            icon={Package}
            iconBg="bg-orange-500"
            trending={false}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground dark:text-white">Revenue Overview</h3>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Monthly revenue and orders comparison</p>
              </div>
              <button className="rounded-lg p-2 hover:bg-accent">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            {mounted && (
            <ClientOnly fallback={<div style={{ width: "100%", height: 300 }} />}>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={revenueData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorOrders" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={isDark ? "#374151" : "#e5e7eb"} />
                <XAxis dataKey="month" stroke={isDark ? "#9ca3af" : "#9ca3af"} fontSize={12} />
                <YAxis stroke={isDark ? "#9ca3af" : "#9ca3af"} fontSize={12} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1f2937" : "#fff",
                    border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "8px",
                    color: isDark ? "#f3f4f6" : "#000",
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="orders"
                  stroke="#8b5cf6"
                  fillOpacity={1}
                  fill="url(#colorOrders)"
                />
              </AreaChart>
            </ResponsiveContainer>
            </ClientOnly>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Sales by Category</h3>
              <button className="rounded-lg p-2 hover:bg-accent">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            {mounted && (
            <ClientOnly fallback={<div style={{ width: "100%", height: 200 }} />}>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={salesByCategory} layout="vertical">
                <XAxis type="number" stroke={isDark ? "#9ca3af" : "#9ca3af"} fontSize={12} />
                <YAxis dataKey="name" type="category" stroke={isDark ? "#9ca3af" : "#9ca3af"} fontSize={12} width={80} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: isDark ? "#1f2937" : "#fff",
                    border: `1px solid ${isDark ? "#374151" : "#e5e7eb"}`,
                    borderRadius: "8px",
                    color: isDark ? "#f3f4f6" : "#000",
                  }}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                  {salesByCategory.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            </ClientOnly>
            )}
            <div className="mt-4 space-y-2">
              {salesByCategory.map((category) => (
                <div key={category.name} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-3 w-3 rounded-full" style={{ backgroundColor: category.color }} />
                    <span className="text-muted-foreground dark:text-muted-foreground">{category.name}</span>
                  </div>
                  <span className="font-medium text-foreground dark:text-white">$<ClientOnlyText value={category.value} format="number" /></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Weekly Sales Heatmap</h3>
              <button className="rounded-lg p-2 hover:bg-accent">
                <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-10" />
                {["6am", "8am", "10am", "12pm", "2pm", "4pm", "6pm", "8pm", "10pm", "12am", "2am", "4am"].map((hour) => (
                  <div key={hour} className="w-6 text-center text-xs text-muted-foreground">
                    {hour}
                  </div>
                ))}
              </div>
              {weeklyHeatmap.map((row) => (
                <div key={row.day} className="flex items-center gap-2">
                  <div className="w-10 text-sm text-muted-foreground dark:text-muted-foreground">{row.day}</div>
                  {row.hours.map((value, index) => (
                    <HeatmapCell key={index} value={value} />
                  ))}
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <span>Less</span>
              <div className="flex gap-1">
                {[0.1, 0.3, 0.5, 0.7, 0.9].map((opacity) => (
                  <div
                    key={opacity}
                    className="h-4 w-4 rounded-sm"
                    style={{ backgroundColor: `rgba(59, 130, 246, ${opacity})` }}
                  />
                ))}
              </div>
              <span>More</span>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground dark:text-white">Top Products</h3>
              <a href="/products" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-sm font-medium text-muted-foreground dark:text-muted-foreground">
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-foreground dark:text-white">{product.name}</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground dark:text-white">{product.revenue}</p>
                    <p className={`text-sm ${product.trending ? "text-green-600" : "text-red-600"}`}>
                      {product.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground dark:text-white">Recent Orders</h3>
            <a href="/orders" className="flex items-center gap-1 text-sm text-blue-600 hover:underline">
              View all <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Order ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Customer</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Product</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Amount</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Status</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground dark:text-muted-foreground">Date</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="border-b border-border hover:bg-accent/50">
                    <td className="py-3 text-sm font-medium text-blue-600">{order.id}</td>
                    <td className="py-3 text-sm text-foreground dark:text-white">{order.customer}</td>
                    <td className="py-3 text-sm text-muted-foreground dark:text-muted-foreground">{order.product}</td>
                    <td className="py-3 text-sm font-medium text-foreground dark:text-white">{order.amount}</td>
                    <td className="py-3">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                            : order.status === "Processing"
                            ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                            : order.status === "Shipped"
                            ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300"
                            : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground dark:text-muted-foreground">{order.date}</td>
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
