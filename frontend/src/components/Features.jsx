import React from "react";
import {
  FaQrcode,
  FaCalculator,
  FaUsers,
  FaCreditCard,
  FaBolt,
  FaReceipt,
} from "react-icons/fa";

const Features = () => {
  const features = [
    {
      icon: <FaQrcode className="h-6 w-6 text-blue-600" />,
      title: "OCR from Receipts",
      bg: "bg-blue-100",
      desc: "Advanced OCR technology extracts items and prices with high accuracy",
    },
    {
      icon: <FaCalculator className="h-6 w-6 text-green-600" />,
      title: "Item-wise Split",
      bg: "bg-green-100",
      desc: "Split individual items rather than just dividing the total amount",
    },
    {
      icon: <FaBolt className="h-6 w-6 text-red-600" />,
      title: "Fast Scan & Split",
      bg: "bg-red-100",
      desc: "Complete the entire process in under a minute with our optimized workflow",
    },
    {
      icon: <FaReceipt className="h-6 w-6 text-indigo-600" />,
      title: "Auto Tips/Taxes Handling",
      bg: "bg-indigo-100",
      desc: "Automatically detects and proportionally distributes tips and taxes",
    },
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="max-w-7xl flex items-center flex-col mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need for seamless bill splitting
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 w-[75%] gap-8">
          {features.map(({ icon, title, desc, bg }, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div
                className={`${bg} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}
              >
                {icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
