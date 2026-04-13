"use client";

import { Calendar, Clock, User, MapPin, Plus, Search, Filter, MoreVertical } from "lucide-react";
import { useState } from "react";

const appointments = [
  { id: 1, title: "Team Meeting", client: "John Smith", date: "2024-12-08", time: "09:00 AM", duration: "1 hour", location: "Conference Room A", status: "confirmed" },
  { id: 2, title: "Client Consultation", client: "Sarah Johnson", date: "2024-12-08", time: "11:00 AM", duration: "30 min", location: "Virtual", status: "confirmed" },
  { id: 3, title: "Project Review", client: "Mike Wilson", date: "2024-12-08", time: "02:00 PM", duration: "1 hour", location: "Office", status: "pending" },
  { id: 4, title: "Sales Call", client: "Emily Brown", date: "2024-12-09", time: "10:00 AM", duration: "45 min", location: "Virtual", status: "confirmed" },
  { id: 5, title: "Training Session", client: "Team", date: "2024-12-09", time: "03:00 PM", duration: "2 hours", location: "Training Room", status: "confirmed" },
  { id: 6, title: "Interview", client: "Alex Davis", date: "2024-12-10", time: "11:00 AM", duration: "1 hour", location: "HR Office", status: "pending" },
];

export default function AppointmentListPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredAppointments = appointments.filter(
    (apt) =>
      apt.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      apt.client.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Appointments</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Manage your scheduled appointments</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="h-5 w-5" />
            New Appointment
          </button>
        </div>

        <div className="grid lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">12</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Total This Week</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                <Clock className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">3</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Today</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-xl flex items-center justify-center">
                <User className="h-6 w-6 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">2</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Pending</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground dark:text-white">4</p>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Virtual</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card rounded-2xl shadow-lg">
          <div className="p-4 border-b border-border flex flex-col md:flex-row gap-4 justify-between">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search appointments..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-80 rounded-lg border border-border bg-card py-2 pl-10 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-foreground hover:bg-accent">
              <Filter className="h-4 w-4" />
              Filter
            </button>
          </div>

          <div className="divide-y divide-border dark:divide-border/50">
            {filteredAppointments.map((appointment) => (
              <div key={appointment.id} className="p-4 hover:bg-accent/50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium text-foreground dark:text-white">{appointment.title}</h3>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">with {appointment.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right hidden md:block">
                      <p className="text-sm font-medium text-foreground dark:text-white">{appointment.date}</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">{appointment.time} ({appointment.duration})</p>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground dark:text-muted-foreground hidden lg:flex">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{appointment.location}</span>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === "confirmed"
                          ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400"
                          : "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400"
                      }`}
                    >
                      {appointment.status}
                    </span>
                    <button className="p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-lg">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
