"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import ClientOnly from "@/components/ui/ClientOnly";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell } from "recharts";
import { TrendingUp, TrendingDown, ShoppingCart, Users, DollarSign, Package, ArrowUpRight, MoreHorizontal, Sparkles } from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 4000, orders: 2400 },
  { month: "Feb", revenue: 3000, orders: 1398 },
  { month: "Mar", revenue: 5000, orders: 9800 },
  { month: "Apr", revenue: 4780, orders: 3908 },
  { month: "May", revenue: 5890, orders: 4800 },
  { month: "Jun", revenue: 6390, orders: 3800 },
  { month: "Jul", revenue: 7490, orders: 4300 },
  { month: "Aug", revenue: 8000, orders: 5400 },
  { month: "Sep", revenue: 7000, orders: 4398 },
  { month: "Oct", revenue: 8500, orders: 9800 },
  { month: "Nov", revenue: 9780, orders: 6908 },
  { month: "Dec", revenue: 11890, orders: 7800 },
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

function StatCard({ title, value, change, icon: Icon, iconBg, trending }: {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  iconBg: string;
  trending: boolean;
}) {
  return (
    <div className="premium-card stat-card p-6 group" suppressHydrationWarning>
      <div className="flex items-center justify-between" suppressHydrationWarning>
        <div className={`rounded-2xl p-3.5 ${iconBg} shadow-lg`} suppressHydrationWarning>
          <Icon className="h-6 w-6 text-white" suppressHydrationWarning />
        </div>
        <div className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-1 rounded-full ${
          trending 
            ? "text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-900/20" 
            : "text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20"
        }`} suppressHydrationWarning>
          {trending ? <TrendingUp className="h-4 w-4" suppressHydrationWarning /> : <TrendingDown className="h-4 w-4" suppressHydrationWarning />}
          {change}
        </div>
      </div>
      <div className="mt-5" suppressHydrationWarning>
        <h3 className="text-3xl font-bold text-[var(--foreground)] tracking-tight">{value}</h3>
        <p className="text-sm text-[var(--muted-foreground)] mt-1.5 font-medium">{title}</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-8" suppressHydrationWarning>
        <div className="rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-8 text-white relative overflow-hidden" suppressHydrationWarning>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" suppressHydrationWarning />
          <div className="relative z-10" suppressHydrationWarning>
            <div className="flex items-center gap-2 mb-2" suppressHydrationWarning>
              <Sparkles className="h-5 w-5" suppressHydrationWarning />
              <span className="text-sm font-medium text-blue-100" suppressHydrationWarning>Welcome back!</span>
            </div>
            <h1 className="text-3xl font-bold mb-2" suppressHydrationWarning>Good morning, Admin</h1>
            <p className="text-blue-100 max-w-xl" suppressHydrationWarning>Here&apos;s what&apos;s happening with your store today. You have 12 new orders and 5 pending reviews.</p>
            <div className="flex items-center gap-4 mt-6" suppressHydrationWarning>
              <button className="rounded-xl bg-card/20 backdrop-blur-sm px-5 py-2.5 text-sm font-medium hover:bg-card/30 transition-colors">
                View Reports
              </button>
              <button className="rounded-xl bg-card px-5 py-2.5 text-sm font-medium text-indigo-600 hover:bg-blue-50 transition-colors">
                Download Summary
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4" suppressHydrationWarning>
          <StatCard
            title="Total Revenue"
            value="$45,231"
            change="+20.1%"
            icon={DollarSign}
            iconBg="bg-gradient-to-br from-blue-500 to-blue-600"
            trending={true}
          />
          <StatCard
            title="Total Orders"
            value="2,350"
            change="+15.3%"
            icon={ShoppingCart}
            iconBg="bg-gradient-to-br from-purple-500 to-purple-600"
            trending={true}
          />
          <StatCard
            title="Total Customers"
            value="1,247"
            change="+12.5%"
            icon={Users}
            iconBg="bg-gradient-to-br from-cyan-500 to-cyan-600"
            trending={true}
          />
          <StatCard
            title="Products Sold"
            value="3,456"
            change="-2.4%"
            icon={Package}
            iconBg="bg-gradient-to-br from-orange-500 to-orange-600"
            trending={false}
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3" suppressHydrationWarning>
          <div className="lg:col-span-2 premium-card p-6" suppressHydrationWarning>
            <div className="mb-6 flex items-center justify-between" suppressHydrationWarning>
              <div suppressHydrationWarning>
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Revenue Overview</h3>
                <p className="text-sm text-[var(--muted-foreground)] mt-1">Monthly revenue and orders comparison</p>
              </div>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
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
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" stroke="#9ca3af" fontSize={12} />
                  <YAxis stroke="#9ca3af" fontSize={12} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
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
          </div>

          <div className="premium-card p-6">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Sales by Category</h3>
              <button className="rounded-xl p-2.5 hover:bg-[var(--secondary)] transition-colors">
                <MoreHorizontal className="h-5 w-5 text-[var(--muted-foreground)]" />
              </button>
            </div>
            <ClientOnly fallback={<div style={{ width: "100%", height: 200 }} />}>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={salesByCategory} layout="vertical">
                  <XAxis type="number" stroke="#9ca3af" fontSize={12} />
                  <YAxis dataKey="name" type="category" stroke="#9ca3af" fontSize={12} width={80} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "var(--background)",
                      border: "1px solid #e5e7eb",
                      borderRadius: "8px",
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
            <div className="mt-6 space-y-3" suppressHydrationWarning>
              {salesByCategory.map((category) => (
                <div key={category.name} className="flex items-center justify-between text-sm group" suppressHydrationWarning>
                  <div className="flex items-center gap-3" suppressHydrationWarning>
                    <div className="h-3 w-3 rounded-full shadow-sm" style={{ backgroundColor: category.color }} suppressHydrationWarning />
                    <span className="text-[var(--muted-foreground)] group-hover:text-[var(--foreground)] transition-colors">{category.name}</span>
                  </div>
                  <span className="font-semibold text-[var(--foreground)]">$<ClientOnlyText value={category.value} format="number" /></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2" suppressHydrationWarning>
          <div className="premium-card p-6" suppressHydrationWarning>
            <div className="mb-6 flex items-center justify-between" suppressHydrationWarning>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Top Products</h3>
              <a href="/ecommerce/products" className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4" suppressHydrationWarning>
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors group" suppressHydrationWarning>
                  <div className="flex items-center gap-4" suppressHydrationWarning>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-700 text-sm font-bold text-[var(--muted-foreground)] group-hover:from-blue-100 group-hover:to-blue-50 dark:group-hover:from-blue-900/30 dark:group-hover:to-blue-800/20 group-hover:text-[var(--primary)] transition-all" suppressHydrationWarning>
                      {index + 1}
                    </div>
                    <div>
                      <p className="font-medium text-[var(--foreground)]" suppressHydrationWarning>{product.name}</p>
                      <p className="text-sm text-[var(--muted-foreground)]" suppressHydrationWarning>{product.sales} sales</p>
                    </div>
                  </div>
                  <div className="text-right" suppressHydrationWarning>
                    <p className="font-semibold text-[var(--foreground)]" suppressHydrationWarning>{product.revenue}</p>
                    <p className={`text-sm font-medium ${product.trending ? "text-emerald-600 dark:text-emerald-400" : "text-red-500 dark:text-red-400"}`} suppressHydrationWarning>
                      {product.trend}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="premium-card p-6" suppressHydrationWarning>
            <div className="mb-6 flex items-center justify-between" suppressHydrationWarning>
              <h3 className="text-lg font-semibold text-[var(--foreground)]">Recent Orders</h3>
              <a href="/ecommerce/orders" className="flex items-center gap-1.5 text-sm font-medium text-[var(--primary)] hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
                View all <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
            <div className="space-y-4" suppressHydrationWarning>
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors" suppressHydrationWarning>
                  <div className="flex items-center gap-4" suppressHydrationWarning>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 dark:from-blue-900/30 dark:to-blue-800/20" suppressHydrationWarning>
                      <ShoppingCart className="h-5 w-5 text-[var(--primary)]" suppressHydrationWarning />
                    </div>
                    <div suppressHydrationWarning>
                      <p className="font-medium text-[var(--foreground)]" suppressHydrationWarning>{order.customer}</p>
                      <p className="text-sm text-[var(--muted-foreground)]" suppressHydrationWarning>{order.product}</p>
                    </div>
                  </div>
                  <div className="text-right" suppressHydrationWarning>
                    <p className="font-semibold text-[var(--foreground)]" suppressHydrationWarning>{order.amount}</p>
                    <p className="text-sm text-[var(--muted-foreground)]" suppressHydrationWarning>{order.date}</p>
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
