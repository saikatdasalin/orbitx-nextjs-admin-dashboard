"use client";

import { ArrowRight, Sparkles, BarChart3, Users, Shield } from "lucide-react";
import Link from "next/link";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" />
            Welcome to Your Dashboard
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground dark:text-white mb-6">
            Everything you need to manage your business
          </h1>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-8">
            Get started with our powerful dashboard tools. Track analytics, manage users, and grow your business with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
            >
              Go to Dashboard
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="/forms/profile-settings"
              className="inline-flex items-center justify-center gap-2 bg-card text-foreground dark:text-white px-6 py-3 rounded-xl font-medium border border-border hover:bg-accent transition-colors"
            >
              Setup Profile
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Analytics</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Track your business metrics with powerful analytics and real-time insights.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Team Management</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Collaborate with your team and manage roles and permissions easily.
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-foreground dark:text-white mb-2">Security</h3>
            <p className="text-muted-foreground dark:text-muted-foreground">
              Enterprise-grade security to keep your data safe and protected.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
