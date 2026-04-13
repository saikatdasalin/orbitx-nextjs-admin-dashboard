"use client";

import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignUp1Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="w-full max-w-md">
        <div className="bg-card rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Create Account</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-2">Sign up to get started</p>
          </div>

          <form className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                  />
                </div>
              </div>
            </div>

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

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  className="w-full rounded-xl border border-border bg-card py-3 pl-11 pr-11 text-foreground dark:text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-muted-foreground"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <div className="flex items-center">
              <input type="checkbox" className="rounded border-border text-blue-600 focus:ring-blue-500" />
              <span className="ml-2 text-sm text-muted-foreground dark:text-muted-foreground">
                I agree to the{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">Terms of Service</Link>
                {" "}and{" "}
                <Link href="#" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link>
              </span>
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Already have an account?{" "}
            <Link href="/auth/sign-in-1" className="text-blue-600 hover:text-blue-700 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
