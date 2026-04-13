"use client";

import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function SignIn2Page() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center p-12">
        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold mb-6">Welcome to Our Platform</h2>
          <p className="text-lg text-white/80">
            Access your dashboard and manage your business with our powerful tools.
          </p>
        </div>
      </div>
      
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 bg-card dark:bg-gray-900">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground dark:text-white">Sign In</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-2">Welcome back! Please enter your details.</p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full rounded-lg border border-border bg-card py-3 pl-11 pr-11 text-foreground dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
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

            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input type="checkbox" className="rounded border-border text-purple-600 focus:ring-purple-500" />
                <span className="ml-2 text-sm text-muted-foreground dark:text-muted-foreground">Remember me</span>
              </label>
              <Link href="/auth/forgot-password-2" className="text-sm text-purple-600 hover:text-purple-700">
                Forgot password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Sign In
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Don&apos;t have an account?{" "}
            <Link href="/auth/sign-up-2" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
