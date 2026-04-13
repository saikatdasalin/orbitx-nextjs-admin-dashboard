"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Search, 
  MapPin,
  Bed,
  Bath,
  Square,
  Heart,
  Filter
} from "lucide-react";
import { useState } from "react";

const properties = [
  { id: 1, title: "Modern Downtown Apartment", location: "New York, NY", price: "$2,500/mo", beds: 2, baths: 2, sqft: 1200, type: "Apartment", image: "MA" },
  { id: 2, title: "Luxury Beach House", location: "Miami, FL", price: "$8,500/mo", beds: 4, baths: 3, sqft: 3500, type: "House", image: "LB" },
  { id: 3, title: "Cozy Studio Loft", location: "San Francisco, CA", price: "$1,800/mo", beds: 1, baths: 1, sqft: 650, type: "Studio", image: "CS" },
  { id: 4, title: "Family Suburban Home", location: "Austin, TX", price: "$3,200/mo", beds: 4, baths: 2, sqft: 2800, type: "House", image: "FS" },
  { id: 5, title: "Penthouse Suite", location: "Chicago, IL", price: "$12,000/mo", beds: 3, baths: 3, sqft: 4200, type: "Penthouse", image: "PS" },
  { id: 6, title: "Urban Townhouse", location: "Seattle, WA", price: "$4,500/mo", beds: 3, baths: 2, sqft: 2100, type: "Townhouse", image: "UT" },
];

const propertyTypes = ["All", "Apartment", "House", "Studio", "Penthouse", "Townhouse"];

export default function RealEstateSearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeType, setActiveType] = useState("All");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Real Estate Search</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Find your perfect property</p>
        </div>

        <div className="premium-card p-4">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
              <input
                type="text"
                placeholder="Search by location, property name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {propertyTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-colors ${
                    activeType === type
                      ? "bg-[var(--primary)] text-white"
                      : "bg-[var(--secondary)] text-[var(--foreground)] hover:bg-[var(--secondary)]/80"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {properties.map((property) => (
            <div key={property.id} className="premium-card overflow-hidden group">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <span className="text-4xl font-bold text-white/80">{property.image}</span>
                <button className="absolute top-3 right-3 rounded-full bg-card/20 backdrop-blur p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="h-5 w-5 text-white" />
                </button>
                <span className="absolute bottom-3 left-3 rounded-full bg-card/20 backdrop-blur px-3 py-1 text-xs font-medium text-white">
                  {property.type}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-[var(--foreground)] mb-1">{property.title}</h3>
                <div className="flex items-center gap-1 text-sm text-[var(--muted-foreground)] mb-3">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </div>
                <div className="flex items-center gap-4 mb-4 text-sm text-[var(--muted-foreground)]">
                  <span className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    {property.beds} beds
                  </span>
                  <span className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    {property.baths} baths
                  </span>
                  <span className="flex items-center gap-1">
                    <Square className="h-4 w-4" />
                    {property.sqft} sqft
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold text-[var(--primary)]">{property.price}</p>
                  <button className="rounded-xl bg-[var(--primary)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 transition-opacity">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
