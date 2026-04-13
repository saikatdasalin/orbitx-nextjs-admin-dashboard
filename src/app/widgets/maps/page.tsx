"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { MapPin, Navigation, Layers, ZoomIn, ZoomOut, Maximize } from "lucide-react";

const locations = [
  { name: "New York Office", address: "123 Broadway, New York, NY 10001", lat: 40.7128, lng: -74.0060 },
  { name: "Los Angeles Office", address: "456 Sunset Blvd, Los Angeles, CA 90028", lat: 34.0522, lng: -118.2437 },
  { name: "Chicago Office", address: "789 Michigan Ave, Chicago, IL 60611", lat: 41.8781, lng: -87.6298 },
];

export default function MapWidgetsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Map Widgets</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Interactive map components</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 premium-card overflow-hidden">
            <div className="relative h-[400px] bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="rounded-full bg-[var(--primary)] p-4 mx-auto mb-4 w-fit">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-[var(--foreground)] font-medium">Interactive Map</p>
                  <p className="text-sm text-[var(--muted-foreground)]">Map integration placeholder</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button className="rounded-lg bg-card p-2 shadow-lg hover:bg-accent transition-colors">
                  <ZoomIn className="h-5 w-5 text-[var(--foreground)]" />
                </button>
                <button className="rounded-lg bg-card p-2 shadow-lg hover:bg-accent transition-colors">
                  <ZoomOut className="h-5 w-5 text-[var(--foreground)]" />
                </button>
                <button className="rounded-lg bg-card p-2 shadow-lg hover:bg-accent transition-colors">
                  <Maximize className="h-5 w-5 text-[var(--foreground)]" />
                </button>
              </div>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <button className="rounded-lg bg-card px-3 py-2 shadow-lg hover:bg-accent transition-colors flex items-center gap-2">
                  <Layers className="h-4 w-4 text-[var(--foreground)]" />
                  <span className="text-sm text-[var(--foreground)]">Layers</span>
                </button>
                <button className="rounded-lg bg-card px-3 py-2 shadow-lg hover:bg-accent transition-colors flex items-center gap-2">
                  <Navigation className="h-4 w-4 text-[var(--foreground)]" />
                  <span className="text-sm text-[var(--foreground)]">Navigate</span>
                </button>
              </div>
            </div>
          </div>

          <div className="premium-card p-6">
            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Locations</h3>
            <div className="space-y-4">
              {locations.map((location, index) => (
                <div key={index} className="flex items-start gap-3 p-3 rounded-xl hover:bg-[var(--secondary)] transition-colors cursor-pointer">
                  <div className="rounded-xl p-2.5 bg-gradient-to-br from-blue-500 to-purple-600">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-[var(--foreground)]">{location.name}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{location.address}</p>
                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                      {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="premium-card overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 flex items-center justify-center">
              <MapPin className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-[var(--foreground)]">Street View</h4>
              <p className="text-sm text-[var(--muted-foreground)]">Explore locations in 360</p>
            </div>
          </div>
          <div className="premium-card overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/30 dark:to-purple-800/30 flex items-center justify-center">
              <Navigation className="h-12 w-12 text-purple-600 dark:text-purple-400" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-[var(--foreground)]">Directions</h4>
              <p className="text-sm text-[var(--muted-foreground)]">Get route information</p>
            </div>
          </div>
          <div className="premium-card overflow-hidden">
            <div className="h-48 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/30 dark:to-orange-800/30 flex items-center justify-center">
              <Layers className="h-12 w-12 text-orange-600 dark:text-orange-400" />
            </div>
            <div className="p-4">
              <h4 className="font-semibold text-[var(--foreground)]">Heatmap</h4>
              <p className="text-sm text-[var(--muted-foreground)]">Visualize data density</p>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
