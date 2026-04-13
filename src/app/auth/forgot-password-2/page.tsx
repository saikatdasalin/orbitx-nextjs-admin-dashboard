"use client";

import { Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ForgotPassword2Page() {
  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center p-12">
        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold mb-6">Reset Your Password</h2>
          <p className="text-lg text-white/80">
            We&apos;ll help you get back into your account.
          </p>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-card dark:bg-gray-900">
        <div className="w-full max-w-md">
          <Link href="/auth/sign-in-2" className="inline-flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground dark:text-white">Forgot Password?</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-2">Enter your email to receive reset instructions</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Reset Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
