import React from "react";
import { FaCamera, FaReceipt } from "react-icons/fa";

const LandingSection = () => {
  return (
    <section
      id="home"
      className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              From receipt to split in{" "}
              <span className="text-blue-600">under a minute.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              SmartSplit lets you snap a receipt, extract items, assign people,
              and settle via UPI in seconds.
            </p>
            <button className="mt-8 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try It Now
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Receipt scanning mockup"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                <FaCamera className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <FaReceipt className="h-8 w-8 text-green-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
