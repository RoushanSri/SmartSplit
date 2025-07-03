import React from "react";
import { FaCamera, FaFileAlt, FaUsers, FaCreditCard } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="min-h-[60vh] flex flex-col justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 py-8">
      <main className="flex flex-col items-center max-w-7xl mx-auto w-full gap-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            How It Works
          </h2>
          <p className="text-lg text-gray-600">Split bills in 4 simple steps</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          <Step
            icon={<FaCamera className="h-8 w-8 text-blue-600" />}
            title="Snap a receipt"
            desc="Take a photo of your restaurant or grocery receipt"
            color="bg-blue-100"
          />
          <Step
            icon={<FaFileAlt className="h-8 w-8 text-green-600" />}
            title="OCR parses items"
            desc="Our AI automatically extracts all items and prices"
            color="bg-green-100"
          />
          <Step
            icon={<FaUsers className="h-8 w-8 text-purple-600" />}
            title="Assign items to friends"
            desc="Easily assign items to different people in your group"
            color="bg-purple-100"
          />
          <Step
            icon={<FaCreditCard className="h-8 w-8 text-orange-600" />}
            title="Split easily"
            desc="Calculate who owes what and settle up"
            color="bg-orange-100"
          />
        </div>
      </main>
    </section>
  );
};

function Step({ icon, title, desc, color }) {
  return (
    <div className="text-center">
      <div
        className={`${color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}
      >
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
    </div>
  );
}

export default HowItWorks;
