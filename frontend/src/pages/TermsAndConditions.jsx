import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="min-h-[92vh] flex flex-col mt-[8vh] justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 pt-6">
      <main className="flex-grow flex flex-col items-center max-w-4xl mx-auto w-full gap-4 py-8">
        <h1 className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">
          Terms & Conditions
        </h1>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-full text-gray-700 text-base sm:text-lg">
          <p className="mb-4 font-semibold text-indigo-700">Welcome to SmartSplit!</p>
          <p className="mb-2">By using SmartSplit, you agree to the following terms and conditions. Please read them carefully before using our service.</p>
          <ul className="list-disc pl-6 mb-4">
            <li>SmartSplit is intended for personal and group bill splitting only.</li>
            <li>All data you provide is handled securely and used solely for the purpose of bill splitting.</li>
            <li>Do not use SmartSplit for any unlawful or fraudulent activities.</li>
            <li>We reserve the right to update these terms at any time. Continued use of the service constitutes acceptance of the new terms.</li>
          </ul>
          <p className="mb-2">If you have any questions about these terms, please contact us at <a href="mailto:support@smartsplit.com" className="text-indigo-600 hover:underline">support@smartsplit.com</a>.</p>
          <p className="text-sm text-gray-500 mt-4">Last updated: July 3, 2025</p>
        </div>
      </main>
    </section>
  );
};

export default TermsAndConditions;
