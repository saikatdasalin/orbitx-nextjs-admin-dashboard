"use client";

import { Check, User, Building, CreditCard, FileCheck } from "lucide-react";
import { useState } from "react";

const steps = [
  { id: 1, title: "Personal Info", icon: User },
  { id: 2, title: "Company Details", icon: Building },
  { id: 3, title: "Payment", icon: CreditCard },
  { id: 4, title: "Confirmation", icon: FileCheck },
];

export default function MultiStepPage() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-foreground dark:text-white">Multi-Step Form</h1>
          <p className="text-muted-foreground dark:text-muted-foreground">Complete all steps to finish registration</p>
        </div>

        <div className="flex items-center justify-between mb-8">
          {steps.map((step, index) => (
            <div key={step.id} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    currentStep > step.id
                      ? "bg-green-500 text-white"
                      : currentStep === step.id
                      ? "bg-blue-600 text-white"
                      : "bg-muted text-muted-foreground dark:text-muted-foreground"
                  }`}
                >
                  {currentStep > step.id ? (
                    <Check className="h-6 w-6" />
                  ) : (
                    <step.icon className="h-6 w-6" />
                  )}
                </div>
                <span className="mt-2 text-sm font-medium text-muted-foreground dark:text-muted-foreground">{step.title}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-24 h-1 mx-2 ${
                    currentStep > step.id ? "bg-green-500" : "bg-muted"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-2xl shadow-lg p-8">
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-white">Personal Information</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                  <input type="text" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                <input type="email" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                <input type="tel" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
            </div>
          )}

          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-white">Company Details</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Name</label>
                <input type="text" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Industry</label>
                <select className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                  <option>Technology</option>
                  <option>Healthcare</option>
                  <option>Finance</option>
                  <option>Education</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Company Size</label>
                <select className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none">
                  <option>1-10 employees</option>
                  <option>11-50 employees</option>
                  <option>51-200 employees</option>
                  <option>201-500 employees</option>
                  <option>500+ employees</option>
                </select>
              </div>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-foreground dark:text-white">Payment Information</h2>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                <input type="text" placeholder="1234 5678 9012 3456" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                  <input type="text" placeholder="MM/YY" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                  <input type="text" placeholder="123" className="w-full rounded-lg border border-border bg-card py-3 px-4 text-foreground dark:text-white focus:border-blue-500 focus:outline-none" />
                </div>
              </div>
            </div>
          )}

          {currentStep === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
              </div>
              <h2 className="text-2xl font-bold text-foreground dark:text-white mb-2">Registration Complete!</h2>
              <p className="text-muted-foreground dark:text-muted-foreground">Thank you for completing the registration process.</p>
            </div>
          )}

          <div className="flex justify-between mt-8 pt-6 border-t border-border">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Previous
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              disabled={currentStep === 4}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {currentStep === 3 ? "Complete" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
