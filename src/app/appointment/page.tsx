"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import StatCard from "@/components/cards/StatCard";
import BarChart from "@/components/charts/BarChart";
import ProgressCircle from "@/components/charts/ProgressCircle";
import ClientOnlyText from "@/components/ui/ClientOnlyText";
import {
  appointmentStats,
  appointmentData,
  scheduleStats,
  todaysAppointments,
} from "@/data/dashboard-data";
import {
  Calendar,
  Users,
  Clock,
  XCircle,
  MoreVertical,
  User,
} from "lucide-react";

const upcomingAppointments = [
  { patient: "John Smith", doctor: "Dr. Sarah Wilson", service: "General Checkup", time: "09:00 AM", duration: "30 min", status: "Confirmed" },
  { patient: "Emily Brown", doctor: "Dr. Mike Johnson", service: "Dental Cleaning", time: "10:30 AM", duration: "45 min", status: "Pending" },
  { patient: "Michael Davis", doctor: "Dr. Sarah Wilson", service: "Eye Exam", time: "11:30 AM", duration: "30 min", status: "Confirmed" },
  { patient: "Jessica Wilson", doctor: "Dr. Emily Brown", service: "Physical Therapy", time: "02:00 PM", duration: "60 min", status: "Confirmed" },
  { patient: "David Lee", doctor: "Dr. Mike Johnson", service: "Consultation", time: "03:30 PM", duration: "30 min", status: "Pending" },
];

const statusColors: Record<string, string> = {
  Confirmed: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Cancelled: "bg-red-100 text-red-700",
};

export default function AppointmentDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Appointment"
            value={<ClientOnlyText value={appointmentStats.totalAppointment.value} format="number" />}
            change={appointmentStats.totalAppointment.change}
            icon={<Calendar className="h-5 w-5 text-blue-600" />}
            iconBgColor="bg-blue-100"
          />
          <StatCard
            title="Scheduled Patients"
            value={<ClientOnlyText value={appointmentStats.scheduledPatients.value} format="number" />}
            change={appointmentStats.scheduledPatients.change}
            icon={<Users className="h-5 w-5 text-green-600" />}
            iconBgColor="bg-green-100"
          />
          <StatCard
            title="Waiting List"
            value={<ClientOnlyText value={appointmentStats.waitingList.value} format="number" />}
            change={appointmentStats.waitingList.change}
            icon={<Clock className="h-5 w-5 text-yellow-600" />}
            iconBgColor="bg-yellow-100"
          />
          <StatCard
            title="Cancelled"
            value={<ClientOnlyText value={appointmentStats.cancelled.value} format="number" />}
            change={appointmentStats.cancelled.change}
            icon={<XCircle className="h-5 w-5 text-red-600" />}
            iconBgColor="bg-red-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Today&apos;s Booking &amp; Visitors</h3>
                <p className="text-sm text-muted-foreground">Daily appointment overview</p>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                  <span className="text-muted-foreground">Bookings</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-green-500"></span>
                  <span className="text-muted-foreground">Visitors</span>
                </div>
              </div>
            </div>
            <BarChart
              data={appointmentData}
              dataKeys={[
                { key: "todaysBooking", color: "#3b82f6", name: "Bookings" },
                { key: "visitors", color: "#10b981", name: "Visitors" },
              ]}
              xAxisKey="day"
              height={280}
            />
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Schedule Stats</h3>
              <button className="rounded p-1 hover:bg-accent">
                <MoreVertical className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ProgressCircle
                    value={Math.round((scheduleStats.appointment.current / scheduleStats.appointment.total) * 100)}
                    size={50}
                    strokeWidth={5}
                    color="#3b82f6"
                    showValue={false}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Appointment</p>
                    <p className="text-xs text-muted-foreground">{scheduleStats.appointment.current}/{scheduleStats.appointment.total}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-blue-600">
                  {Math.round((scheduleStats.appointment.current / scheduleStats.appointment.total) * 100)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ProgressCircle
                    value={Math.round((scheduleStats.meeting.current / scheduleStats.meeting.total) * 100)}
                    size={50}
                    strokeWidth={5}
                    color="#10b981"
                    showValue={false}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Meeting</p>
                    <p className="text-xs text-muted-foreground">{scheduleStats.meeting.current}/{scheduleStats.meeting.total}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-green-600">
                  {Math.round((scheduleStats.meeting.current / scheduleStats.meeting.total) * 100)}%
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <ProgressCircle
                    value={Math.round((scheduleStats.surgery.current / scheduleStats.surgery.total) * 100)}
                    size={50}
                    strokeWidth={5}
                    color="#f59e0b"
                    showValue={false}
                  />
                  <div>
                    <p className="text-sm font-medium text-foreground">Surgery</p>
                    <p className="text-xs text-muted-foreground">{scheduleStats.surgery.current}/{scheduleStats.surgery.total}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-yellow-600">
                  {Math.round((scheduleStats.surgery.current / scheduleStats.surgery.total) * 100)}%
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Today&apos;s Appointments</h3>
              <a href="/appointment/list" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="space-y-3">
              {todaysAppointments.map((apt, index) => (
                <div key={index} className="flex items-center gap-3 rounded-lg border border-border p-3">
                  <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                    <User className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{apt.patient}</p>
                    <p className="text-xs text-muted-foreground">{apt.doctor}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{apt.date}</p>
                    <p className="text-xs font-medium text-foreground">{apt.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-2 rounded-xl border border-border bg-card p-6">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground">Upcoming Appointments</h3>
              <a href="/appointment/upcoming" className="text-sm text-blue-600 hover:underline">
                View all
              </a>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Patient</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Doctor</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Service</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Time</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Duration</th>
                    <th className="pb-3 text-left text-sm font-medium text-muted-foreground">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingAppointments.map((apt, index) => (
                    <tr key={index} className="border-b border-border hover:bg-accent">
                      <td className="py-3 text-sm font-medium text-foreground">{apt.patient}</td>
                      <td className="py-3 text-sm text-muted-foreground">{apt.doctor}</td>
                      <td className="py-3 text-sm text-muted-foreground">{apt.service}</td>
                      <td className="py-3 text-sm text-muted-foreground">{apt.time}</td>
                      <td className="py-3 text-sm text-muted-foreground">{apt.duration}</td>
                      <td className="py-3">
                        <span className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${statusColors[apt.status]}`}>
                          {apt.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
