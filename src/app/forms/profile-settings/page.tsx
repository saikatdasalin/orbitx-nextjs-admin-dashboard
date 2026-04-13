"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Camera,
  Save,
  Bell,
  Lock,
  Globe
} from "lucide-react";

export default function ProfileSettingsPage() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-[var(--foreground)]">Profile Settings</h1>
          <p className="text-[var(--muted-foreground)] mt-1">Manage your account settings</p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Personal Information</h3>
              <div className="flex items-center gap-6 mb-6">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-2xl font-bold text-white">
                    AU
                  </div>
                  <button className="absolute -bottom-2 -right-2 rounded-full bg-[var(--primary)] p-2 text-white hover:opacity-90 transition-opacity">
                    <Camera className="h-4 w-4" />
                  </button>
                </div>
                <div>
                  <p className="font-semibold text-[var(--foreground)]">Admin User</p>
                  <p className="text-sm text-[var(--muted-foreground)]">admin@example.com</p>
                  <button className="mt-2 text-sm font-medium text-[var(--primary)] hover:opacity-80 transition-opacity">
                    Change Photo
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">First Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="text" defaultValue="Admin" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Last Name</label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="text" defaultValue="User" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Email</label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="email" defaultValue="admin@example.com" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Phone</label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Address</label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-[var(--muted-foreground)]" />
                    <textarea defaultValue="123 Main St, San Francisco, CA 94102" rows={3} className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] resize-none" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Save className="h-4 w-4" />
                  Save Changes
                </button>
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-6">Change Password</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Current Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="password" placeholder="Enter current password" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">New Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="password" placeholder="Enter new password" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Confirm Password</label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <input type="password" placeholder="Confirm new password" className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)]" />
                  </div>
                </div>
              </div>
              <div className="flex justify-end mt-6">
                <button className="rounded-xl bg-[var(--primary)] px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 transition-opacity">
                  Update Password
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Notifications</h3>
              <div className="space-y-4">
                {[
                  { label: "Email Notifications", description: "Receive email updates" },
                  { label: "Push Notifications", description: "Browser notifications" },
                  { label: "SMS Notifications", description: "Text message alerts" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-[var(--foreground)]">{item.label}</p>
                      <p className="text-sm text-[var(--muted-foreground)]">{item.description}</p>
                    </div>
                    <button className="relative h-6 w-11 rounded-full bg-[var(--primary)] transition-colors">
                      <span className="absolute right-1 top-1 h-4 w-4 rounded-full bg-card transition-transform" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="premium-card p-6">
              <h3 className="text-lg font-semibold text-[var(--foreground)] mb-4">Preferences</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Language</label>
                  <div className="relative">
                    <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[var(--muted-foreground)]" />
                    <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] appearance-none">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--foreground)] mb-2">Timezone</label>
                  <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--background)] py-2.5 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--primary)] appearance-none">
                    <option>Pacific Time (PT)</option>
                    <option>Mountain Time (MT)</option>
                    <option>Central Time (CT)</option>
                    <option>Eastern Time (ET)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
