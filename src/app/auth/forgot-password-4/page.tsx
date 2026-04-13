"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword4Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <Link href="/auth/sign-in-4" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-card/20 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Forgot Password?</h1>
            <p className="text-white/70 mt-2">No worries, we&apos;ll help you reset it</p>
          </div>

          <form className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/50" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl bg-card/10 border border-white/20 py-3.5 pl-12 pr-4 text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-card py-3.5 text-purple-600 font-semibold hover:bg-card/90 transition-colors"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
