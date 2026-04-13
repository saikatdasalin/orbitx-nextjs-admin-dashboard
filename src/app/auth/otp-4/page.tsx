"use client";

import { Shield, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function OTP4Page() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp4-${index + 1}`);
      nextInput?.focus();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-card/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
          <Link href="/auth/sign-in-4" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-6">
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>

          <div className="text-center mb-8">
            <div className="mx-auto w-16 h-16 bg-card/20 rounded-full flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-white">Verify Code</h1>
            <p className="text-white/70 mt-2">Enter the 6-digit verification code</p>
          </div>

          <form className="space-y-6">
            <div className="flex justify-center gap-2">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  id={`otp4-${index}`}
                  type="text"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  className="w-11 h-14 text-center text-xl font-bold rounded-xl bg-card/10 border border-white/20 text-white placeholder-white/50 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
                />
              ))}
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-card py-3.5 text-purple-600 font-semibold hover:bg-card/90 transition-colors"
            >
              Verify
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-white/70">
            Didn&apos;t receive code?{" "}
            <button className="text-white font-medium hover:underline">Resend</button>
          </p>
        </div>
      </div>
    </div>
  );
}
