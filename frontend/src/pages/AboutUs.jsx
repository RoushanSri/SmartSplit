import React from "react";

function AboutUs() {
  return (
    <section className="min-h-[92vh] flex flex-col mt-[8vh] justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 pt-6">
      <main className="flex-grow flex flex-col items-center max-w-4xl mx-auto w-full gap-4 py-8">
        <h2 className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl leading-tight mb-2">
          About SmartSplit
        </h2>
        <div className="bg-white/80 rounded-2xl shadow-lg p-6 w-full text-gray-900 text-lg leading-relaxed">
          <p className="mb-4">
            While Splitwise is excellent for ongoing expense tracking between
            roommates and regular groups,
            <strong className="text-[#181c5d]">
              {" "}
              SmartSplit is specifically designed for one-off group events{" "}
            </strong>
            and quick restaurant or grocery bill splitting.
          </p>
          <p className="mb-4">
            Our focus is on{" "}
            <strong className="text-[#181c5d]">speed and simplicity</strong>.
            Instead of manually entering each item, SmartSplit uses advanced OCR
            technology to instantly extract all items from your receipt. You can
            assign items to people with just a few taps and settle up
            immediately.
          </p>
          <p>
            Perfect for dinner with friends, group grocery shopping, or any
            situation where you need to
            <strong className="text-[#181c5d]">
              {" "}
              split a bill quickly and fairly
            </strong>{" "}
            without the overhead of ongoing expense management.
          </p>
        </div>
      </main>
    </section>
  );
}

export default AboutUs;
