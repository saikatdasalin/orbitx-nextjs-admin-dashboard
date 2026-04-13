"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { ChevronLeft, ChevronRight, Plus, Clock, MapPin, Users } from "lucide-react";
import { useState } from "react";

const events = [
  { id: 1, title: "Team Meeting", time: "09:00 AM", duration: "1h", color: "bg-blue-500", day: 8 },
  { id: 2, title: "Product Review", time: "11:00 AM", duration: "2h", color: "bg-purple-500", day: 8 },
  { id: 3, title: "Client Call", time: "02:00 PM", duration: "30m", color: "bg-green-500", day: 10 },
  { id: 4, title: "Design Workshop", time: "10:00 AM", duration: "3h", color: "bg-orange-500", day: 12 },
  { id: 5, title: "Sprint Planning", time: "09:30 AM", duration: "1.5h", color: "bg-pink-500", day: 15 },
  { id: 6, title: "Quarterly Review", time: "03:00 PM", duration: "2h", color: "bg-cyan-500", day: 18 },
];

const upcomingEvents = [
  { title: "Team Meeting", date: "Today, 09:00 AM", location: "Conference Room A", attendees: 8, color: "bg-blue-500" },
  { title: "Product Review", date: "Today, 11:00 AM", location: "Virtual", attendees: 12, color: "bg-purple-500" },
  { title: "Client Call", date: "Dec 10, 02:00 PM", location: "Virtual", attendees: 4, color: "bg-green-500" },
  { title: "Design Workshop", date: "Dec 12, 10:00 AM", location: "Design Lab", attendees: 6, color: "bg-orange-500" },
];

const daysInMonth = 31;
const startDay = 0;

export default function EventCalendarPage() {
  const [currentMonth] = useState("December 2024");

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-[var(--foreground)]">Event Calendar</h1>
            <p className="text-[var(--muted-foreground)] mt-1">Manage your schedule and events</p>
          </div>
          <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
            <Plus className="h-4 w-4" />
            Add Event
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-3 premium-card p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-[var(--foreground)]">{currentMonth}</h2>
              <div className="flex items-center gap-2">
                <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                  <ChevronLeft className="h-5 w-5 text-[var(--muted-foreground)]" />
                </button>
                <button className="rounded-lg px-4 py-2 text-sm font-medium hover:bg-[var(--secondary)] transition-colors">
                  Today
                </button>
                <button className="rounded-lg p-2 hover:bg-[var(--secondary)] transition-colors">
                  <ChevronRight className="h-5 w-5 text-[var(--muted-foreground)]" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-px bg-[var(--border)] rounded-xl overflow-hidden">
              {days.map((day) => (
                <div key={day} className="bg-[var(--secondary)] p-3 text-center text-sm font-medium text-[var(--muted-foreground)]">
                  {day}
                </div>
              ))}
              {Array.from({ length: startDay }).map((_, i) => (
                <div key={`empty-${i}`} className="bg-[var(--card)] p-3 min-h-[100px]" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const dayEvents = events.filter((e) => e.day === day);
                const isToday = day === 8;
                return (
                  <div key={day} className={`bg-[var(--card)] p-2 min-h-[100px] ${isToday ? "ring-2 ring-[var(--primary)] ring-inset" : ""}`}>
                    <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-sm ${
                      isToday ? "bg-[var(--primary)] text-white font-semibold" : "text-[var(--foreground)]"
                    }`}>
                      {day}
                    </span>
                    <div className="mt-1 space-y-1">
                      {dayEvents.slice(0, 2).map((event) => (
                        <div key={event.id} className={`${event.color} rounded px-1.5 py-0.5 text-xs text-white truncate`}>
                          {event.title}
                        </div>
                      ))}
                      {dayEvents.length > 2 && (
                        <div className="text-xs text-[var(--muted-foreground)]">+{dayEvents.length - 2} more</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                {upcomingEvents.map((event, index) => (
                  <div key={index} className="flex gap-3">
                    <div className={`w-1 rounded-full ${event.color}`} />
                    <div className="flex-1">
                      <h4 className="font-medium text-[var(--foreground)]">{event.title}</h4>
                      <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1 mt-1">
                        <Clock className="h-3 w-3" />
                        {event.date}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {event.location}
                      </p>
                      <p className="text-sm text-[var(--muted-foreground)] flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {event.attendees} attendees
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
