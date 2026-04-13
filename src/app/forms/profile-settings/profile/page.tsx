"use client";

import { Camera, Save } from "lucide-react";

export default function ProfileSettingsPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Personal Information</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Update your personal details</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Save className="h-5 w-5" />
            Save Changes
          </button>
        </div>

        <div className="bg-card rounded-xl p-6 shadow-sm space-y-6">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-muted-foreground">JD</span>
              </div>
              <button className="absolute bottom-0 right-0 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div>
              <h3 className="font-semibold text-foreground dark:text-white">Profile Photo</h3>
              <p className="text-sm text-muted-foreground dark:text-muted-foreground">JPG, GIF or PNG. Max size 2MB</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
              <input type="text" defaultValue="John" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
              <input type="text" defaultValue="Doe" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Email Address</label>
            <input type="email" defaultValue="john.doe@example.com" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
            <input type="tel" defaultValue="+1 (555) 123-4567" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
            <textarea rows={4} defaultValue="Product designer with 5+ years of experience in creating user-centered digital products." className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none resize-none" />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Country</label>
              <select defaultValue="us" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option value="us">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="ca">Canada</option>
                <option value="au">Australia</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Timezone</label>
              <select defaultValue="est" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                <option value="est">Eastern Time (ET)</option>
                <option value="pst">Pacific Time (PT)</option>
                <option value="gmt">GMT</option>
                <option value="cet">Central European Time</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-foreground mb-2">Address</label>
            <input type="text" defaultValue="123 Main Street, Apt 4B" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">City</label>
              <input type="text" defaultValue="New York" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">State</label>
              <input type="text" defaultValue="NY" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">ZIP Code</label>
              <input type="text" defaultValue="10001" className="w-full rounded-lg border border-border bg-card py-2 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
