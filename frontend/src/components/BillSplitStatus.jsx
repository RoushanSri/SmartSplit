import React from "react";

function BillSplitStatus({billSplitStatus}) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center">
        <div className="flex flex-col items-center bg-black rounded-full">
          <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center font-bold">
            1
          </div>
        </div>
        <div
          className={`w-[20vw] h-1 ${
            billSplitStatus >= 2 ? "bg-black" : "bg-gray-300"
          } mx-2`}
        ></div>
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full ${billSplitStatus >= 2 ? "bg-black text-white" : "bg-gray-300 text-gray-600"} flex items-center justify-center font-bold`}>
            2
          </div>
        </div>
        <div
          className={`w-[20vw] h-1 ${
            billSplitStatus >= 3 ? "bg-black" : "bg-gray-300"
          } mx-2`}
        ></div>
        <div className="flex flex-col items-center">
          <div className={`w-8 h-8 rounded-full ${billSplitStatus >= 3 ? "bg-black text-white" : "bg-gray-300 text-gray-600"} flex items-center justify-center font-bold`}>
            3
          </div>
        </div>
      </div>
    </div>
  );
}

export default BillSplitStatus;
