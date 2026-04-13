"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OTP5Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp5-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link href="/auth/sign-in-5" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-white mb-6">
          <ArrowLeft className="h-4 w-4" />
          Back to sign in
        </Link>

        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 mb-4">
            <Shield className="h-8 w-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-white">Verify Your Email</h1>
          <p className="text-muted-foreground mt-2">Enter the 6-digit code we sent you</p>
        </div>

        <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <form className="space-y-6">
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp5-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-11 h-14 text-center text-xl font-bold rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-muted-foreground focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 py-3 text-white font-medium hover:opacity-90 transition-opacity"
            >
              Verify Code
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            Didn&apos;t receive code?{" "}
            <button className="text-cyan-400 hover:text-cyan-300 font-medium">Resend</button>
          </p>
        </div>
      </div>
    </div>
  );
}
