import React from "react";
import Navbar from "../components/Navbar";

const PrivacyPolicy = () => {
  return (
    <>
    <Navbar />
    
    <section className="min-h-[92vh] flex flex-col justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 pt-6">
      <main className="flex flex-col items-center max-w-4xl mx-auto w-full gap-4 py-8">
        <h1 className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">
          Privacy Policy
        </h1>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-full text-gray-700 text-base sm:text-lg">
          <p className="mb-4 font-semibold text-indigo-700">Your privacy is important to us at SmartSplit.</p>
          <p className="mb-2">This Privacy Policy explains how we collect, use, and protect your information when you use SmartSplit.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>We only collect information necessary for bill splitting and account management.</li>
            <li>Your data is never sold or shared with third parties except as required by law.</li>
            <li>All sensitive data is encrypted and securely stored.</li>
            <li>You can request deletion of your data at any time by contacting us at <a href="mailto:support@smartsplit.com" className="text-indigo-600 hover:underline">support@smartsplit.com</a>.</li>
          </ul>
          <p className="mb-2">By using SmartSplit, you consent to this policy. We may update this policy from time to time. Please review it regularly.</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: July 3, 2025</p>
        </div>
      </main>
    </section>
    </>
  );
};

export default PrivacyPolicy;
