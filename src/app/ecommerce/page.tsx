"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import AreaChart from "@/components/charts/AreaChart";
import DonutChart from "@/components/charts/DonutChart";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import {
  ecommerceStats,
  salesData,
  promotionalSalesData,
  recentOrders,
} from "@/data/dashboard-data";
import {
  ShoppingCart,
  DollarSign,
  TrendingUp,
  Package,
  MoreVertical,
} from "lucide-react";

const statusColors: Record<string, string> = {
  cancelled: "bg-red-100 text-red-700",
  refunded: "bg-yellow-100 text-yellow-700",
  completed: "bg-green-100 text-green-700",
  pending: "bg-blue-100 text-blue-700",
};

export default function ECommerceDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard
            title="New Orders"
            value={<ClientOnlyText value={ecommerceStats.newOrders.value} format="number" />}
            change={ecommerceStats.newOrders.change}
            icon={<ShoppingCart className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Sales"
            value={<ClientOnlyText value={ecommerceStats.sales.value} format="currency" />}
            change={ecommerceStats.sales.change}
            icon={<DollarSign className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Revenue"
            value={<ClientOnlyText value={ecommerceStats.revenue.value} format="currency" />}
            change={ecommerceStats.revenue.change}
            icon={<TrendingUp className="h-5 w-5 text-purple-600" />}
            iconBgColor="bg-purple-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Total Profit
                </h3>
                <p className="text-sm text-muted-foreground">Revenue vs Expense</p>
              </div>
              <div className="flex gap-2">
                {["5D", "2W", "1M", "6M", "1Y"].map((period) => (
                  <button
                    key={period}
                    className="rounded-lg px-3 py-1 text-sm text-muted-foreground hover:bg-accent"
                  >
                    {period}
                  </button>
                ))}
              </div>
            </div>
            <AreaChart
              data={salesData}
              dataKeys={[
                { key: "revenue", color: "#3b82f6", name: "Revenue" },
                { key: "expense", color: "#ef4444", name: "Expense" },
              ]}
              xAxisKey="month"
              height={300}
              showLegend
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">
                Promotional Sales
              </h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <DonutChart
              data={promotionalSalesData}
              height={250}
              innerRadius={60}
              outerRadius={80}
              showLegend
            />
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Recent Orders</h3>
            <a href="/ecommerce/orders" className="text-sm text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Order ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Customer</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Items</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Price</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  <th className="pb-3 text-right text-sm font-medium text-muted-foreground"></th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent">
                    <td className="py-3 text-sm font-medium text-foreground">{order.id}</td>
                    <td className="py-3">
                      <div>
                        <p className="text-sm font-medium text-foreground">{order.customer}</p>
                        <p className="text-sm text-muted-foreground">{order.email}</p>
                      </div>
                    </td>
                    <td className="py-3 text-sm text-muted-foreground">{order.items}</td>
                    <td className="py-3 text-sm font-medium text-foreground">${order.price}</td>
                    <td className="py-3">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium capitalize ${statusColors[order.status]}`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 text-right">
                      <button className="rounded p-1 hover:bg-accent">
                        <MoreVertical className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Top Products</h3>
              <a href="/ecommerce/products" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {[
                { name: "Apple Watch Series 7", sales: 1234, revenue: "$12,340" },
                { name: "MacBook Pro 14\"", sales: 987, revenue: "$98,700" },
                { name: "iPhone 14 Pro Max", sales: 876, revenue: "$87,600" },
                { name: "AirPods Pro", sales: 654, revenue: "$6,540" },
              ].map((product, index) => (
                <div key={index} className="flex items-center justify-between rounded-lg border border-border p-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Package className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{product.name}</p>
                      <p className="text-xs text-muted-foreground">{product.sales} sales</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground">{product.revenue}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Stock Report</h3>
              <a href="/ecommerce/products" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-4">
              {[
                { name: "Electronics", inStock: 234, lowStock: 12 },
                { name: "Clothing", inStock: 567, lowStock: 23 },
                { name: "Accessories", inStock: 890, lowStock: 5 },
                { name: "Home & Garden", inStock: 123, lowStock: 8 },
              ].map((category, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">{category.name}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-green-600">{category.inStock} in stock</span>
                    <span className="text-sm text-red-600">{category.lowStock} low stock</span>
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
