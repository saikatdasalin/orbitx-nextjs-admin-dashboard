"use client";

import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUp3Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-card rounded-3xl shadow-2xl overflow-hidden flex">
        <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-400 to-emerald-600 p-12">
          <div className="h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-4">Join us today</h2>
            <p className="text-white/80">
              Create your account and unlock all features.
            </p>
          </div>
        </div>
        
        <div className="w-full lg:w-1/2 p-8 lg:p-12">
          <div className="mb-8">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mb-6">
              <span className="text-white text-xl font-bold">A</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Create account</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-1">Get started for free</p>
          </div>

          <form className="space-y-4">
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Full name"
                className="w-full rounded-2xl border-2 border-border bg-secondary py-4 pl-12 pr-4 text-foreground dark:text-white focus:border-green-500 focus:bg-card dark:focus:bg-gray-800 focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                placeholder="Email address"
                className="w-full rounded-2xl border-2 border-border bg-secondary py-4 pl-12 pr-4 text-foreground dark:text-white focus:border-green-500 focus:bg-card dark:focus:bg-gray-800 focus:outline-none transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full rounded-2xl border-2 border-border bg-secondary py-4 pl-12 pr-12 text-foreground dark:text-white focus:border-green-500 focus:bg-card dark:focus:bg-gray-800 focus:outline-none transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-green-500 py-4 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/sign-in-3" className="text-green-600 hover:text-green-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
