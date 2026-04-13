"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import BarChart from "@/components/charts/BarChart";
import ProgressCircle from "@/components/charts/ProgressCircle";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import {
  logisticsStats,
  dispatchData,
  fleetStatus,
} from "@/data/dashboard-data";
import {
  DollarSign,
  TrendingUp,
  ShoppingCart,
  Package,
  Truck,
  Clock,
  MoreVertical,
  MapPin,
} from "lucide-react";

const deliveryData = [
  { day: "Mon", delivered: 45, pending: 12 },
  { day: "Tue", delivered: 52, pending: 8 },
  { day: "Wed", delivered: 38, pending: 15 },
  { day: "Thu", delivered: 65, pending: 10 },
  { day: "Fri", delivered: 48, pending: 18 },
  { day: "Sat", delivered: 35, pending: 5 },
  { day: "Sun", delivered: 28, pending: 3 },
];

const pendingShipments = [
  { id: "SHP-001", recipient: "John Doe", destination: "New York, NY", date: "Dec 5, 2024", cost: "$125", status: "In Transit" },
  { id: "SHP-002", recipient: "Jane Smith", destination: "Los Angeles, CA", date: "Dec 4, 2024", cost: "$89", status: "Processing" },
  { id: "SHP-003", recipient: "Bob Wilson", destination: "Chicago, IL", date: "Dec 4, 2024", cost: "$156", status: "In Transit" },
  { id: "SHP-004", recipient: "Alice Brown", destination: "Houston, TX", date: "Dec 3, 2024", cost: "$78", status: "Delivered" },
  { id: "SHP-005", recipient: "Charlie Davis", destination: "Phoenix, AZ", date: "Dec 3, 2024", cost: "$112", status: "In Transit" },
];

const statusColors: Record<string, string> = {
  "In Transit": "bg-blue-100 text-blue-700",
  "Processing": "bg-yellow-100 text-yellow-700",
  "Delivered": "bg-green-100 text-green-700",
  "Delayed": "bg-red-100 text-red-700",
};

export default function LogisticsDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <StatCard
            title="Costs"
            value={<ClientOnlyText value={logisticsStats.costs.value} format="currency" />}
            change={logisticsStats.costs.change}
            icon={<DollarSign className="h-5 w-5 text-red-600" />}
            iconBgColor="bg-red-100"
          />
          <StatCard
            title="Revenue"
            value={<ClientOnlyText value={logisticsStats.revenue.value} format="currency" />}
            change={logisticsStats.revenue.change}
            icon={<TrendingUp className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Sales"
            value={<ClientOnlyText value={logisticsStats.sales.value} format="currency" />}
            change={logisticsStats.sales.change}
            icon={<ShoppingCart className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Shipments"
            value={<ClientOnlyText value={logisticsStats.shipments.value} format="number" />}
            change={logisticsStats.shipments.change}
            icon={<Package className="h-5 w-5 text-purple-600" />}
            iconBgColor="bg-purple-100"
          />
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-orange-100 p-2.5">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Avg. Delivery Time</p>
                <p className="text-2xl font-semibold text-foreground">3 Days</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Open Sales Order</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="flex flex-col items-center py-4">
              <ProgressCircle value={85} size={120} strokeWidth={10} color="#3b82f6" />
              <p className="mt-4 text-2xl font-bold text-foreground">880,770</p>
              <p className="text-sm text-muted-foreground">85.5% converted</p>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Dispatch Planning</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">56,000</p>
                <p className="text-sm text-muted-foreground">Truck Loads</p>
              </div>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-secondary p-2">
                  <p className="text-lg font-semibold text-foreground"><ClientOnlyText value={dispatchData.totalIndent} format="number" /></p>
                  <p className="text-xs text-muted-foreground">Total Indent</p>
                </div>
                <div className="rounded-lg bg-yellow-50 p-2">
                  <p className="text-lg font-semibold text-yellow-600">{dispatchData.indentPending}</p>
                  <p className="text-xs text-muted-foreground">Pending</p>
                </div>
                <div className="rounded-lg bg-red-50 p-2">
                  <p className="text-lg font-semibold text-red-600">{dispatchData.indentRejected}</p>
                  <p className="text-xs text-muted-foreground">Rejected</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Fleet Status</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="text-sm text-muted-foreground">Available</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{fleetStatus.available}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                  <span className="text-sm text-muted-foreground">In Maintenance</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{fleetStatus.inMaintenance}</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="text-sm text-muted-foreground">On the Move</span>
                </div>
                <span className="text-sm font-semibold text-foreground">{fleetStatus.onTheMove}</span>
              </div>
              <div className="border-t border-border pt-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">Total Fleet</span>
                  <span className="text-lg font-bold text-foreground">{fleetStatus.totalFleet}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Delivery Status</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <BarChart
              data={deliveryData}
              dataKeys={[
                { key: "delivered", color: "#10b981", name: "Delivered" },
                { key: "pending", color: "#f59e0b", name: "Pending" },
              ]}
              xAxisKey="day"
              height={250}
              showLegend
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Top Destinations</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              {[
                { city: "New York", country: "USA", shipments: 1234 },
                { city: "Los Angeles", country: "USA", shipments: 987 },
                { city: "Chicago", country: "USA", shipments: 876 },
                { city: "Houston", country: "USA", shipments: 654 },
                { city: "Phoenix", country: "USA", shipments: 543 },
              ].map((dest, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-secondary p-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{dest.city}</p>
                      <p className="text-xs text-muted-foreground">{dest.country}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-foreground"><ClientOnlyText value={dest.shipments} format="number" /></span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-card p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-foreground">Pending Shipments</h3>
            <a href="/logistics/shipments" className="text-sm text-blue-600 hover:underline">
              View all
            </a>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Tracking ID</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Recipient</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Destination</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Date</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Cost</th>
                  <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                </tr>
              </thead>
              <tbody>
                {pendingShipments.map((shipment, index) => (
                  <tr key={index} className="border-b border-border hover:bg-accent">
                    <td className="py-3 text-sm font-medium text-blue-600">{shipment.id}</td>
                    <td className="py-3 text-sm text-foreground">{shipment.recipient}</td>
                    <td className="py-3 text-sm text-muted-foreground">{shipment.destination}</td>
                    <td className="py-3 text-sm text-muted-foreground">{shipment.date}</td>
                    <td className="py-3 text-sm font-medium text-foreground">{shipment.cost}</td>
                    <td className="py-3">
                      <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[shipment.status]}`}>
                        {shipment.status}
                      </span>
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
