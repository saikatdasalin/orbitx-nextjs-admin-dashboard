"use client";

import { Rocket, Bell, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ComingSoonPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 flex items-center justify-center p-4">
      <div className="text-center max-w-lg">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-card/20 backdrop-blur-lg rounded-full mb-8">
          <Rocket className="h-10 w-10 text-white" />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Coming Soon
        </h1>
        <p className="text-lg text-white/80 mb-8">
          We&apos;re working hard to bring you something amazing. Stay tuned for updates!
        </p>

        <div className="bg-card/10 backdrop-blur-lg rounded-2xl p-6 mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Bell className="h-5 w-5 text-white" />
            <span className="text-white font-medium">Get notified when we launch</span>
          </div>
          <div className="flex gap-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 rounded-xl bg-card/20 border border-white/30 py-3 px-4 text-white placeholder-white/50 focus:border-white/50 focus:outline-none"
            />
            <button className="bg-card text-purple-600 px-6 py-3 rounded-xl font-medium hover:bg-card/90 transition-colors">
              Notify Me
            </button>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}
