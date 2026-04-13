"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OTP2Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp2-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 to-blue-600 items-center justify-center p-12">
        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold mb-6">Verify Your Identity</h2>
          <p className="text-lg text-white/80">
            Enter the code we sent to your email to continue.
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
            <h1 className="text-3xl font-bold text-foreground dark:text-white">Enter Verification Code</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-2">We sent a 6-digit code to your email</p>
          </div>

          <form className="space-y-6">
            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp2-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-14 text-center text-xl font-bold rounded-lg border border-border bg-card text-foreground dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Verify Code
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Didn&apos;t receive the code?{" "}
            <button className="text-purple-600 hover:text-purple-700 font-medium">Resend</button>
          </p>
        </div>
      </div>
    </div>
  );
}
