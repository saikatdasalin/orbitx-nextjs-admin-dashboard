"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  ShoppingBag, 
  Search, 
  Filter,
  Eye,
  MoreHorizontal,
  Clock,
  CheckCircle,
  XCircle,
  Truck
} from "lucide-react";
import { useState } from "react";

const orders = [
  { id: "#ORD-001", customer: "John Smith", email: "john@example.com", date: "Dec 8, 2024", total: "$1,299", status: "Delivered", items: 3 },
  { id: "#ORD-002", customer: "Sarah Johnson", email: "sarah@example.com", date: "Dec 7, 2024", total: "$459", status: "Processing", items: 2 },
  { id: "#ORD-003", customer: "Mike Wilson", email: "mike@example.com", date: "Dec 7, 2024", total: "$2,150", status: "Shipped", items: 5 },
  { id: "#ORD-004", customer: "Emily Davis", email: "emily@example.com", date: "Dec 6, 2024", total: "$89", status: "Pending", items: 1 },
  { id: "#ORD-005", customer: "Chris Brown", email: "chris@example.com", date: "Dec 6, 2024", total: "$675", status: "Delivered", items: 2 },
  { id: "#ORD-006", customer: "Lisa Anderson", email: "lisa@example.com", date: "Dec 5, 2024", total: "$1,899", status: "Cancelled", items: 4 },
  { id: "#ORD-007", customer: "James Taylor", email: "james@example.com", date: "Dec 5, 2024", total: "$349", status: "Shipped", items: 1 },
  { id: "#ORD-008", customer: "Amanda White", email: "amanda@example.com", date: "Dec 4, 2024", total: "$520", status: "Delivered", items: 3 },
];

const statusConfig = {
  Delivered: { icon: CheckCircle, color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" },
  Processing: { icon: Clock, color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" },
  Shipped: { icon: Truck, color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" },
  Pending: { icon: Clock, color: "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" },
  Cancelled: { icon: XCircle, color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400" },
};

export default function OrdersPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Orders</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage and track customer orders</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-blue-100 dark:bg-blue-900/30 p-3">
                <ShoppingBag className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">156</p>
                <p className="text-sm text-[var(--muted-foreground)]">Total Orders</p>
              </div>
            </div>
          </div>
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-orange-100 dark:bg-orange-900/30 p-3">
                <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">23</p>
                <p className="text-sm text-[var(--muted-foreground)]">Pending</p>
              </div>
            </div>
          </div>
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-purple-100 dark:bg-purple-900/30 p-3">
                <Truck className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">18</p>
                <p className="text-sm text-[var(--muted-foreground)]">Shipped</p>
              </div>
            </div>
          </div>
          <div className="premium-card p-5">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-green-100 dark:bg-green-900/30 p-3">
                <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-[var(--foreground)]">115</p>
                <p className="text-sm text-[var(--muted-foreground)]">Delivered</p>
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
                placeholder="Search orders..."
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
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Order ID</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Customer</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Date</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Items</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Total</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => {
                  const StatusIcon = statusConfig[order.status as keyof typeof statusConfig].icon;
                  return (
                    <tr key={order.id} className="border-b border-[var(--border)] last:border-0">
                      <td className="py-4 font-medium text-[var(--primary)]">{order.id}</td>
                      <td className="py-4">
                        <div>
                          <p className="font-medium text-[var(--foreground)]">{order.customer}</p>
                          <p className="text-sm text-[var(--muted-foreground)]">{order.email}</p>
                        </div>
                      </td>
                      <td className="py-4 text-[var(--muted-foreground)]">{order.date}</td>
                      <td className="py-4 text-[var(--muted-foreground)]">{order.items} items</td>
                      <td className="py-4 font-semibold text-[var(--foreground)]">{order.total}</td>
                      <td className="py-4">
                        <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium ${statusConfig[order.status as keyof typeof statusConfig].color}`}>
                          <StatusIcon className="h-3.5 w-3.5" />
                          {order.status}
                        </span>
                      </td>
                      <td className="py-4">
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <p className="text-sm text-[var(--muted-foreground)]">Showing 1-8 of 156 orders</p>
            <div className="flex items-center gap-2">
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors disabled:opacity-50" disabled>
                Previous
              </button>
              <button className="rounded-lg bg-[var(--primary)] px-3 py-1.5 text-sm text-white">1</button>
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors">2</button>
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors">3</button>
              <button className="rounded-lg border border-[var(--border)] px-3 py-1.5 text-sm hover:bg-[var(--secondary)] transition-colors">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
