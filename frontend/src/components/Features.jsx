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
    <section className="min-h-[60vh] flex flex-col justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 py-8">
      <main className="flex flex-col items-center max-w-5xl mx-auto w-full gap-4">
        <div className="text-center mb-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            Powerful Features
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need for seamless bill splitting
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-2 w-full gap-6">
          {features.map(({ icon, title, desc, bg }, i) => (
            <div
              key={i}
              className="bg-white/80 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
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
      </main>
    </section>
  );
};

export default Features;
