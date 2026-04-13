"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Package, 
  Truck, 
  MapPin, 
  Clock,
  CheckCircle,
  Search,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const shipments = [
  { 
    id: "TRK-001234", 
    origin: "Los Angeles, CA", 
    destination: "New York, NY", 
    status: "In Transit",
    eta: "Dec 10, 2024",
    progress: 65,
    carrier: "FedEx"
  },
  { 
    id: "TRK-001235", 
    origin: "Chicago, IL", 
    destination: "Miami, FL", 
    status: "Out for Delivery",
    eta: "Dec 8, 2024",
    progress: 90,
    carrier: "UPS"
  },
  { 
    id: "TRK-001236", 
    origin: "Seattle, WA", 
    destination: "Denver, CO", 
    status: "Processing",
    eta: "Dec 12, 2024",
    progress: 25,
    carrier: "DHL"
  },
  { 
    id: "TRK-001237", 
    origin: "Boston, MA", 
    destination: "Atlanta, GA", 
    status: "Delivered",
    eta: "Dec 7, 2024",
    progress: 100,
    carrier: "USPS"
  },
];

const trackingSteps = [
  { status: "Order Placed", date: "Dec 5, 2024 - 10:30 AM", completed: true },
  { status: "Processing", date: "Dec 5, 2024 - 2:15 PM", completed: true },
  { status: "Shipped", date: "Dec 6, 2024 - 9:00 AM", completed: true },
  { status: "In Transit", date: "Dec 7, 2024 - 11:45 AM", completed: true },
  { status: "Out for Delivery", date: "Dec 8, 2024 - 8:30 AM", completed: false },
  { status: "Delivered", date: "Expected Dec 8, 2024", completed: false },
];

export default function TrackingPage() {
  const [trackingNumber, setTrackingNumber] = useState("");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Shipment Tracking</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Track your shipments in real-time</p>
        </div>

        <div className="premium-card p-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Enter tracking number..."
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <button className="rounded-xl bg-[var(--primary)] px-6 py-3 text-sm font-medium text-white hover:opacity-90 transition-opacity">
              Track Shipment
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-lg font-semibold text-[var(--foreground)]">Active Shipments</h3>
            {shipments.map((shipment) => (
              <div key={shipment.id} className="premium-card p-5">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="font-semibold text-[var(--primary)]">{shipment.id}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{shipment.carrier}</p>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-xs font-medium ${
                    shipment.status === "Delivered" ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400" :
                    shipment.status === "Out for Delivery" ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400" :
                    shipment.status === "In Transit" ? "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400" :
                    "bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
                  }`}>
                    {shipment.status}
                  </span>
                </div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[var(--muted-foreground)]" />
                    <span className="text-sm text-[var(--foreground)]">{shipment.origin}</span>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--muted-foreground)]" />
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-[var(--muted-foreground)]" />
                    <span className="text-sm text-[var(--foreground)]">{shipment.destination}</span>
                  </div>
                </div>
                <div className="mb-2">
                  <div className="flex items-center justify-between text-sm mb-1">
                    <span className="text-[var(--muted-foreground)]">Progress</span>
                    <span className="font-medium text-[var(--foreground)]">{shipment.progress}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--secondary)]">
                    <div 
                      className={`h-2 rounded-full ${
                        shipment.progress === 100 ? "bg-green-500" : "bg-[var(--primary)]"
                      }`}
                      style={{ width: `${shipment.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                  <Clock className="h-4 w-4" />
                  <span>ETA: {shipment.eta}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Tracking Details</h3>
            <p className="text-sm text-[var(--muted-foreground)] mb-6">TRK-001235</p>
            <div className="space-y-4">
              {trackingSteps.map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`h-8 w-8 rounded-full flex items-center justify-center ${
                      step.completed ? "bg-green-100 dark:bg-green-900/30" : "bg-[var(--secondary)]"
                    }`}>
                      {step.completed ? (
                        <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                      ) : (
                        <div className="h-3 w-3 rounded-full bg-[var(--muted-foreground)]" />
                      )}
                    </div>
                    {index < trackingSteps.length - 1 && (
                      <div className={`w-0.5 h-12 ${step.completed ? "bg-green-500" : "bg-[var(--border)]"}`} />
                    )}
                  </div>
                  <div className="pb-8">
                    <p className={`font-medium ${step.completed ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}>
                      {step.status}
                    </p>
                    <p className="text-sm text-[var(--muted-foreground)]">{step.date}</p>
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
