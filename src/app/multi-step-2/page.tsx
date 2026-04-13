"use client";

import { Check, ArrowRight, ArrowLeft } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, title: "Account" },
  { id: 2, title: "Profile" },
  { id: 3, title: "Preferences" },
  { id: 4, title: "Review" },
];

export default function MultiStep2Page() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
            <h1 className="text-2xl font-bold text-white">Create Your Account</h1>
            <p className="text-white/80">Step {currentStep} of {steps.length}</p>
            
            <div className="flex items-center mt-6">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold ${
                        currentStep > step.id
                          ? "bg-card text-purple-600"
                          : currentStep === step.id
                          ? "bg-card/20 text-white border-2 border-white"
                          : "bg-card/10 text-white/50"
                      }`}
                    >
                      {currentStep > step.id ? <Check className="h-5 w-5" /> : step.id}
                    </div>
                    <span className="mt-2 text-xs text-white/80">{step.title}</span>
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-16 h-0.5 mx-2 ${currentStep > step.id ? "bg-card" : "bg-card/20"}`} />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground dark:text-white">Account Information</h2>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Username</label>
                  <input type="text" className="w-full rounded-xl border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                  <input type="email" className="w-full rounded-xl border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Password</label>
                  <input type="password" className="w-full rounded-xl border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground dark:text-white">Profile Details</h2>
                <div className="flex items-center gap-6">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Photo</span>
                  </div>
                  <button className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg font-medium">
                    Upload Photo
                  </button>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                    <input type="text" className="w-full rounded-xl border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                    <input type="text" className="w-full rounded-xl border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Bio</label>
                  <textarea rows={3} className="w-full rounded-xl border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-purple-500 focus:outline-none resize-none" />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-foreground dark:text-white">Preferences</h2>
                <div className="space-y-4">
                  <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-accent/50">
                    <input type="checkbox" className="w-5 h-5 rounded text-purple-600" defaultChecked />
                    <div>
                      <p className="font-medium text-foreground dark:text-white">Email notifications</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Receive updates via email</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-accent/50">
                    <input type="checkbox" className="w-5 h-5 rounded text-purple-600" defaultChecked />
                    <div>
                      <p className="font-medium text-foreground dark:text-white">Push notifications</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Receive push notifications</p>
                    </div>
                  </label>
                  <label className="flex items-center gap-3 p-4 border border-border rounded-xl cursor-pointer hover:bg-accent/50">
                    <input type="checkbox" className="w-5 h-5 rounded text-purple-600" />
                    <div>
                      <p className="font-medium text-foreground dark:text-white">Marketing emails</p>
                      <p className="text-sm text-muted-foreground dark:text-muted-foreground">Receive promotional content</p>
                    </div>
                  </label>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground dark:text-white mb-2">All Set!</h2>
                <p className="text-muted-foreground dark:text-muted-foreground mb-6">Your account has been created successfully.</p>
                <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-medium hover:opacity-90 transition-opacity">
                  Go to Dashboard
                </button>
              </div>
            )}

            {currentStep < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-border">
                <button
                  onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  disabled={currentStep === 1}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl text-foreground font-medium hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Back
                </button>
                <button
                  onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium hover:opacity-90 transition-opacity"
                >
                  Continue
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
