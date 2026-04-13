"use client";

import { Bell, Mail, MessageSquare, Shield, Save } from "lucide-react";

export default function NotificationSettingsPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Notification Preferences</h1>
            <p className="text-muted-foreground dark:text-muted-foreground">Manage how you receive notifications</p>
          </div>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Save className="h-5 w-5" />
            Save Changes
          </button>
        </div>

        <div className="space-y-6">
          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground dark:text-white">Email Notifications</h2>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Manage email notification preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Marketing emails</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Receive emails about new products and features</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Weekly digest</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Get a weekly summary of your activity</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Account updates</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Important updates about your account</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center">
                <Bell className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground dark:text-white">Push Notifications</h2>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Manage push notification preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">New messages</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Get notified when you receive new messages</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Task reminders</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Receive reminders for upcoming tasks</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Mentions</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Get notified when someone mentions you</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
            </div>
          </div>

          <div className="bg-card rounded-xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <h2 className="font-semibold text-foreground dark:text-white">Security Alerts</h2>
                <p className="text-sm text-muted-foreground dark:text-muted-foreground">Manage security notification preferences</p>
              </div>
            </div>
            <div className="space-y-4">
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Login alerts</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Get notified of new login attempts</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
              <label className="flex items-center justify-between p-4 border border-border rounded-lg cursor-pointer hover:bg-accent/50">
                <div>
                  <p className="font-medium text-foreground dark:text-white">Password changes</p>
                  <p className="text-sm text-muted-foreground dark:text-muted-foreground">Get notified when your password is changed</p>
                </div>
                <input type="checkbox" className="w-5 h-5 rounded text-blue-600" defaultChecked />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
