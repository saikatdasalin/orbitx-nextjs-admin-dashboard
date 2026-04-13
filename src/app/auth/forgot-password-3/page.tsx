"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword3Page() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-card rounded-3xl shadow-2xl overflow-hidden flex">
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <Link href="/auth/sign-in-3" className="inline-flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <div className="mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
              <Mail className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Reset password</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-1">We&apos;ll send you instructions</p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border-2 border-border bg-secondary py-4 pl-12 pr-4 text-foreground dark:text-white focus:border-green-500 focus:bg-card dark:focus:bg-gray-800 focus:outline-none transition-colors"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-green-500 py-4 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              Send Reset Link
            </button>
          </form>
        </div>
        
        <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-400 to-emerald-600 p-12">
          <div className="h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-4">Don&apos;t worry</h2>
            <p className="text-white/80">
              We&apos;ll help you recover your account in no time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
