"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Package, 
  Search, 
  Filter,
  Eye,
  MoreHorizontal,
  Truck,
  MapPin,
  Plus
} from "lucide-react";
import { useState } from "react";

const shipments = [
  { id: "SHP-001234", origin: "Los Angeles, CA", destination: "New York, NY", carrier: "FedEx", status: "In Transit", date: "Dec 5, 2024", weight: "2.5 kg", items: 3 },
  { id: "SHP-001235", origin: "Chicago, IL", destination: "Miami, FL", carrier: "UPS", status: "Delivered", date: "Dec 4, 2024", weight: "1.2 kg", items: 1 },
  { id: "SHP-001236", origin: "Seattle, WA", destination: "Denver, CO", carrier: "DHL", status: "Processing", date: "Dec 6, 2024", weight: "5.8 kg", items: 5 },
  { id: "SHP-001237", origin: "Boston, MA", destination: "Atlanta, GA", carrier: "USPS", status: "Out for Delivery", date: "Dec 5, 2024", weight: "0.8 kg", items: 2 },
  { id: "SHP-001238", origin: "Phoenix, AZ", destination: "Portland, OR", carrier: "FedEx", status: "In Transit", date: "Dec 6, 2024", weight: "3.4 kg", items: 4 },
  { id: "SHP-001239", origin: "Dallas, TX", destination: "San Francisco, CA", carrier: "UPS", status: "Pending", date: "Dec 7, 2024", weight: "2.1 kg", items: 2 },
];

const stats = [
  { label: "Total Shipments", value: "1,234", icon: Package, color: "bg-blue-500" },
  { label: "In Transit", value: "456", icon: Truck, color: "bg-purple-500" },
  { label: "Delivered", value: "678", icon: MapPin, color: "bg-green-500" },
];

export default function ShipmentListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Shipment List</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage all your shipments</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            New Shipment
          </button>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="premium-card p-5">
              <div className="flex items-center gap-4">
                <div className={`rounded-xl p-3 ${stat.color}`}>
                  <stat.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-[var(--foreground)]">{stat.value}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">{stat.label}</p>
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
                placeholder="Search shipments..."
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
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Shipment ID</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Origin</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Destination</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Carrier</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Status</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Date</th>
                  <th className="pb-4 text-left text-sm font-medium text-[var(--muted-foreground)]">Actions</th>
                </tr>
              </thead>
              <tbody>
                {shipments.map((shipment) => (
                  <tr key={shipment.id} className="border-b border-[var(--border)] last:border-0 hover:bg-[var(--secondary)]/50 transition-colors">
                    <td className="py-4">
                      <span className="font-medium text-[var(--primary)]">{shipment.id}</span>
                    </td>
                    <td className="py-4 text-sm text-[var(--foreground)]">{shipment.origin}</td>
                    <td className="py-4 text-sm text-[var(--foreground)]">{shipment.destination}</td>
                    <td className="py-4 text-sm text-[var(--foreground)]">{shipment.carrier}</td>
                    <td className="py-4">
                      <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                        shipment.status === "Delivered" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                        shipment.status === "In Transit" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                        shipment.status === "Out for Delivery" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                        shipment.status === "Processing" ? "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400" :
                        "bg-secondary dark:bg-gray-900/30 text-muted-foreground dark:text-muted-foreground"
                      }`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="py-4 text-sm text-[var(--muted-foreground)]">{shipment.date}</td>
                    <td className="py-4">
                      <div className="flex items-center gap-1">
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <Eye className="h-4 w-4 text-[var(--muted-foreground)]" />
                        </button>
                        <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                          <MoreHorizontal className="h-4 w-4 text-[var(--muted-foreground)]" />
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
