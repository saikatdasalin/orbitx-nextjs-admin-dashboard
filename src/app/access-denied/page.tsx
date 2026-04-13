"use client";

import { ShieldX, ArrowLeft, Home } from "lucide-react";
import Link from "next/link";

export default function AccessDeniedPage() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full mb-6">
          <ShieldX className="h-10 w-10 text-red-600 dark:text-red-400" />
        </div>
        
        <h1 className="text-3xl font-bold text-foreground dark:text-white mb-4">
          Access Denied
        </h1>
        <p className="text-muted-foreground dark:text-muted-foreground mb-8">
          You don&apos;t have permission to access this page. Please contact your administrator if you believe this is an error.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
          >
            <Home className="h-5 w-5" />
            Go to Dashboard
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 bg-card text-foreground dark:text-white px-6 py-3 rounded-xl font-medium border border-border hover:bg-accent transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
