"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword1Page() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl p-8">
          <Link href="/auth/sign-in-1" className="inline-flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
              <Mail className="h-8 w-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Forgot Password?</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-2">
              No worries, we&apos;ll send you reset instructions.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Reset Password
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Remember your password?{" "}
            <Link href="/auth/sign-in-1" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
