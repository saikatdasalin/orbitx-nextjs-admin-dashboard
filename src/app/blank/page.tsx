"use client";

import { FileText } from "lucide-react";

export default function BlankPage() {
  return (
    <div className="min-h-screen bg-card dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary rounded-xl mb-4">
          <FileText className="h-8 w-8 text-muted-foreground" />
        </div>
        <h1 className="text-xl font-semibold text-foreground dark:text-white mb-2">Blank Page</h1>
        <p className="text-muted-foreground dark:text-muted-foreground">This is a blank page template for your content.</p>
      </div>
    </div>
  );
}
