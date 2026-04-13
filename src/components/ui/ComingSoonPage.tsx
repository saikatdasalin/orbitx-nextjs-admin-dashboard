"use client";

import DashboardLayout from "@/components/layout/DashboardLayout";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";

interface ComingSoonPageProps {
  title: string;
  description?: string;
}

export default function ComingSoonPage({ title, description }: ComingSoonPageProps) {
  return (
    <DashboardLayout>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <div className="rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 mb-6">
          <Construction className="h-16 w-16 text-blue-600 dark:text-blue-400" />
        </div>
        <h1 className="text-3xl font-bold text-foreground dark:text-white mb-3">{title}</h1>
        <p className="text-muted-foreground dark:text-muted-foreground max-w-md mb-8">
          {description || "This page is under construction. We're working hard to bring you something amazing. Check back soon!"}
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </DashboardLayout>
  );
}
