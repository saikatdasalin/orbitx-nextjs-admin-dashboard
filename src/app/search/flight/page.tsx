"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Plane, 
  Search, 
  Calendar,
  Users,
  Clock,
  ArrowRight
} from "lucide-react";
import { useState } from "react";

const flights = [
  { id: 1, airline: "Delta Airlines", from: "JFK", to: "LAX", departure: "08:00 AM", arrival: "11:30 AM", duration: "5h 30m", price: "$299", stops: "Non-stop" },
  { id: 2, airline: "United Airlines", from: "JFK", to: "LAX", departure: "10:15 AM", arrival: "02:00 PM", duration: "5h 45m", price: "$275", stops: "Non-stop" },
  { id: 3, airline: "American Airlines", from: "JFK", to: "LAX", departure: "01:30 PM", arrival: "05:15 PM", duration: "5h 45m", price: "$315", stops: "Non-stop" },
  { id: 4, airline: "Southwest", from: "JFK", to: "LAX", departure: "03:45 PM", arrival: "08:30 PM", duration: "6h 45m", price: "$225", stops: "1 stop" },
  { id: 5, airline: "JetBlue", from: "JFK", to: "LAX", departure: "06:00 PM", arrival: "09:45 PM", duration: "5h 45m", price: "$289", stops: "Non-stop" },
];

export default function FlightBookingPage() {
  const [tripType, setTripType] = useState("roundtrip");

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Flight Booking</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Search and book flights</p>
        </div>

        <div className="premium-card p-6">
          <div className="flex gap-4 mb-6">
            {["roundtrip", "oneway", "multicity"].map((type) => (
              <button
                key={type}
                onClick={() => setTripType(type)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition-colors ${
                  tripType === type
                    ? "bg-[var(--primary)] text-white"
                    : "bg-[var(--secondary)] text-[var(--foreground)]"
                }`}
              >
                {type === "roundtrip" ? "Round Trip" : type === "oneway" ? "One Way" : "Multi-City"}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5">
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">From</label>
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="text"
                  placeholder="Departure city"
                  defaultValue="New York (JFK)"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">To</label>
              <div className="relative">
                <Plane className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)] rotate-90" />
                <input
                  type="text"
                  placeholder="Arrival city"
                  defaultValue="Los Angeles (LAX)"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Departure</label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  type="date"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Passengers</label>
              <div className="relative">
                <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] appearance-none">
                  <option>1 Adult</option>
                  <option>2 Adults</option>
                  <option>3 Adults</option>
                  <option>4 Adults</option>
                </select>
              </div>
            </div>
            <div className="flex items-end">
              <button className="w-full rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Search className="h-4 w-4" />
                Search Flights
              </button>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[var(--foreground)]">Available Flights</h2>
          {flights.map((flight) => (
            <div key={flight.id} className="premium-card p-5">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex items-center gap-4 flex-1">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600">
                    <Plane className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--foreground)]">{flight.airline}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{flight.stops}</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 flex-1">
                  <div className="text-center">
                    <p className="text-lg font-bold text-[var(--foreground)]">{flight.departure}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{flight.from}</p>
                  </div>
                  <div className="flex-1 flex flex-col items-center">
                    <p className="text-xs text-[var(--muted-foreground)] mb-1">{flight.duration}</p>
                    <div className="w-full flex items-center">
                      <div className="h-0.5 flex-1 bg-[var(--border)]" />
                      <ArrowRight className="h-4 w-4 text-[var(--muted-foreground)] mx-2" />
                      <div className="h-0.5 flex-1 bg-[var(--border)]" />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-lg font-bold text-[var(--foreground)]">{flight.arrival}</p>
                    <p className="text-sm text-[var(--muted-foreground)]">{flight.to}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <p className="text-2xl font-bold text-[var(--primary)]">{flight.price}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">per person</p>
                  </div>
                  <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">
                    Select
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
