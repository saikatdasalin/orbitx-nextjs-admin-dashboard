"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Mail, ArrowLeft, CheckCircle } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-gray-900 p-8">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900 mb-6">
            <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
          </div>
          <h2 className="text-2xl font-bold text-foreground dark:text-white">Check your email</h2>
          <p className="mt-2 text-muted-foreground dark:text-muted-foreground">
            We&apos;ve sent a password reset link to <strong>{email}</strong>
          </p>
          <p className="mt-4 text-sm text-muted-foreground dark:text-muted-foreground">
            Didn&apos;t receive the email? Check your spam folder or{" "}
            <button onClick={() => setSubmitted(false)} className="text-blue-600 hover:underline">
              try again
            </button>
          </p>
          <Link
            href="/auth/signin"
            className="mt-8 inline-flex items-center gap-2 text-sm text-blue-600 hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Sign In
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary dark:bg-gray-900 p-8">
      <div className="w-full max-w-md">
        <Link
          href="/auth/signin"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground dark:text-muted-foreground hover:text-foreground dark:hover:text-white mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Sign In
        </Link>

        <div className="mb-6">
          <Image src="/logo.png" alt="OrbitX Logo" width={48} height={48} />
        </div>

        <h2 className="text-2xl font-bold text-foreground dark:text-white">Forgot Password?</h2>
        <p className="mt-2 text-muted-foreground dark:text-muted-foreground">
          No worries! Enter your email address and we&apos;ll send you a link to reset your password.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full rounded-lg border border-border bg-card pl-10 pr-4 py-3 text-foreground dark:text-white placeholder-muted-foreground focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}
