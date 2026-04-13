"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Package, 
  MapPin, 
  Clock,
  CheckCircle,
  Truck,
  User,
  Phone,
  Mail,
  ArrowLeft
} from "lucide-react";
import Link from "next/link";

const shipmentDetails = {
  id: "SHP-001234",
  status: "In Transit",
  origin: { address: "123 Warehouse St", city: "Los Angeles", state: "CA", zip: "90001" },
  destination: { address: "456 Customer Ave", city: "New York", state: "NY", zip: "10001" },
  carrier: "FedEx",
  weight: "2.5 kg",
  dimensions: "30 x 20 x 15 cm",
  items: 3,
  estimatedDelivery: "Dec 10, 2024",
  shippedDate: "Dec 5, 2024",
};

const trackingHistory = [
  { status: "Order Placed", location: "Los Angeles, CA", date: "Dec 5, 2024", time: "10:30 AM", completed: true },
  { status: "Picked Up", location: "Los Angeles, CA", date: "Dec 5, 2024", time: "2:15 PM", completed: true },
  { status: "In Transit", location: "Phoenix, AZ", date: "Dec 6, 2024", time: "8:00 AM", completed: true },
  { status: "In Transit", location: "Denver, CO", date: "Dec 7, 2024", time: "11:45 AM", completed: true },
  { status: "Out for Delivery", location: "New York, NY", date: "Dec 10, 2024", time: "Pending", completed: false },
  { status: "Delivered", location: "New York, NY", date: "Dec 10, 2024", time: "Pending", completed: false },
];

const packageItems = [
  { name: "iPhone 15 Pro Max", quantity: 1, sku: "IPH-15PM-256" },
  { name: "AirPods Pro 2", quantity: 1, sku: "APP-2-WHT" },
  { name: "MagSafe Charger", quantity: 1, sku: "MSG-CHG-01" },
];

export default function ShipmentDetailsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/logistics/shipment-list" className="rounded-xl p-2 hover:bg-[var(--secondary)] transition-colors">
            <ArrowLeft className="h-5 w-5 text-[var(--muted-foreground)]" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Shipment Details</h1>
            <p className="text-[var(--muted-foreground)] mt-1">{shipmentDetails.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="premium-card p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">Shipment Status</h3>
                <span className="rounded-full px-4 py-1.5 text-sm font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                  {shipmentDetails.status}
                </span>
              </div>
              <div className="space-y-4">
                {trackingHistory.map((step, index) => (
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
                      {index < trackingHistory.length - 1 && (
                        <div className={`w-0.5 h-12 ${step.completed ? "bg-green-500" : "bg-[var(--border)]"}`} />
                      )}
                    </div>
                    <div className="pb-8 flex-1">
                      <div className="flex items-center justify-between">
                        <p className={`font-medium ${step.completed ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}`}>
                          {step.status}
                        </p>
                        <span className="text-sm text-[var(--muted-foreground)]">{step.time}</span>
                      </div>
                      <p className="text-sm text-[var(--muted-foreground)]">{step.location} - {step.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Package Contents</h3>
              <div className="space-y-3">
                {packageItems.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 rounded-xl bg-[var(--secondary)]">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <Package className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-[var(--foreground)]">{item.name}</p>
                        <p className="text-sm text-[var(--muted-foreground)]">SKU: {item.sku}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium text-[var(--foreground)]">Qty: {item.quantity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Shipment Info</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Truck className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Carrier</p>
                    <p className="font-medium text-[var(--foreground)]">{shipmentDetails.carrier}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Package className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Weight</p>
                    <p className="font-medium text-[var(--foreground)]">{shipmentDetails.weight}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">Est. Delivery</p>
                    <p className="font-medium text-[var(--foreground)]">{shipmentDetails.estimatedDelivery}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Delivery Address</h3>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[var(--muted-foreground)] mt-0.5" />
                <div>
                  <p className="font-medium text-[var(--foreground)]">{shipmentDetails.destination.address}</p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {shipmentDetails.destination.city}, {shipmentDetails.destination.state} {shipmentDetails.destination.zip}
                  </p>
                </div>
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Recipient</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">John Doe</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[var(--muted-foreground)]" />
                  <span className="text-[var(--foreground)]">john@example.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
