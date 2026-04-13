"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OTP3Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp3-${index + 1}`);
      nextInput?.focus();
    }
  };

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
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-foreground dark:text-white">Verify code</h1>
            <p className="text-muted-foreground dark:text-muted-foreground mt-1">Enter the 6-digit code</p>
          </div>

          <form className="space-y-6">
            <div className="flex justify-between gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp3-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-12 h-14 text-center text-xl font-bold rounded-2xl border-2 border-border bg-secondary text-foreground dark:text-white focus:border-green-500 focus:bg-card dark:focus:bg-gray-800 focus:outline-none transition-colors"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-2xl bg-green-500 py-4 text-white font-semibold hover:bg-green-600 transition-colors"
            >
              Verify
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground dark:text-muted-foreground">
            Didn&apos;t receive code?{" "}
            <button className="text-green-600 hover:text-green-700 font-medium">Resend</button>
          </p>
        </div>
        
        <div className="hidden lg:block lg:w-1/2 bg-gradient-to-br from-green-400 to-emerald-600 p-12">
          <div className="h-full flex flex-col justify-center text-white">
            <h2 className="text-3xl font-bold mb-4">Almost there!</h2>
            <p className="text-white/80">
              Just one more step to verify your account.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
