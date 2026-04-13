"use client";

import { Wrench, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-amber-100 dark:bg-amber-900/30 rounded-full mb-6 animate-pulse">
          <Wrench className="h-10 w-10 text-amber-600 dark:text-amber-400" />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-4">
          Under Maintenance
        </h1>
        <p className="text-lg text-muted-foreground dark:text-muted-foreground mb-8">
          We&apos;re currently performing scheduled maintenance to improve your experience. We&apos;ll be back shortly!
        </p>

        <div className="bg-card rounded-2xl p-6 shadow-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-muted-foreground dark:text-muted-foreground mb-2">
            <Clock className="h-5 w-5" />
            <span className="font-medium">Estimated downtime</span>
          </div>
          <p className="text-2xl font-bold text-foreground dark:text-white">2-4 hours</p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 font-medium transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Try again later
        </Link>
      </div>
    </div>
  );
}
