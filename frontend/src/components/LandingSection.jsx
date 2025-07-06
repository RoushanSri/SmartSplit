import React from "react";
const LandingSection = () => {
  return (
    <section
      id="home"
      className="min-h-[92vh] flex flex-col mt-[8vh] justify-center bg-gradient-to-b px-3 sm:px-10 overflow-hidden from-blue-50 via-[#fffbee] to-indigo-100 pt-6 h-full "
    >
      <main className="flex-grow flex flex-col items-center max-w-7xl mx-auto w-full gap-4">
        <h1 className="text-center text-gray-900 font-bold text-3xl sm:text-4xl md:text-5xl max-w-2xl leading-tight">
          Split bills in seconds with{" "}
          <span className="text-indigo-600">SmartSplit</span>
        </h1>
        <p className="text-center text-gray-600 max-w-md text-sm sm:text-base leading-relaxed">
          Upload or snap a photo of your receipt, let SmartSplit extract items,
          assign who pays for what, and settle instantly. Perfect for friends,
          roommates, and group outings.
        </p>
        <button
          className="flex items-center space-x-2 border border-indigo-600 text-indigo-600 text-xs rounded-full px-4 pr-1.5 py-1.5 hover:bg-indigo-50 transition"
          type="button"
        >
          <span>Snap, Split, Settle.</span>
          <span className="flex items-center justify-center size-6 p-1 rounded-full bg-indigo-600">
            <svg
              width="14"
              height="11"
              viewBox="0 0 16 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 6.5h14M9.5 1 15 6.5 9.5 12"
                stroke="#fff"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        <img
          className="rounded-[50px] h-80 w-full object-cover max-w-5xl mt-8"
          src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1074&auto=format&fit=crop"
          alt="People splitting a bill at a restaurant"
        />
      </main>
    </section>
  );
};

export default LandingSection;
