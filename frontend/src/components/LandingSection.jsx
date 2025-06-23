import React from "react";
import { FaCamera, FaReceipt } from "react-icons/fa";
import logo from "../assets/logo.jpg";

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
              <span className="text-[#181c5d]">under a minute.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              SmartSplit lets you snap a receipt, extract items, assign people,
              and settle via UPI in seconds.
            </p>
            <button className="mt-8 bg-[#181c5d] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#181c5d] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Try It Now
            </button>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src={logo}
                alt="Receipt scanning mockup"
                className="rounded-full shadow-2xl"
              />
              <div className="absolute -top-4 -left-4 bg-white p-3 rounded-full shadow-lg">
                <FaCamera className="h-8 w-8 text-[#181c5d]" />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-full shadow-lg">
                <FaReceipt className="h-8 w-8 text-[#181c5d]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingSection;
