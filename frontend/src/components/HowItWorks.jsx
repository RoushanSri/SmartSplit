import React from "react";
import { FaCamera, FaFileAlt, FaUsers, FaCreditCard } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600">Split bills in 4 simple steps</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
      </div>
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
