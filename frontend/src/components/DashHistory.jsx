import React, { useEffect, useState } from "react";
import SplitCard from "./SplitCard";
import { useSelector } from "react-redux";

function DashHistory() {

  const { profile } = useSelector((state) => state.profile);
  const [profileData, setProfileData] = useState(profile);

  useEffect(() => {
    setProfileData(profile);
  }, [profile]);

  const data=profileData?.previousSplits||[];

  const splitData = data?.map((split) => ({
    id: split._id,
    Event: split.event,
    status: split.status,
    statusColor:
      split.status === "completed"
        ? "bg-green-100 text-green-800"
        : split.status === "pending"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-red-100 text-red-800",
    date: new Date(split.createdAt).toLocaleDateString(),
    people: split.participants?.map((person) => person._id),
    totalPayment: split.amount,
    items: split.items?.slice(0, 2).map((item) => ({
      name: item.itemName,
      price: item.itemPrice,
      quantity: item.quantity,
    })),
    moreItems: split.items.length > 2 ? split.items.length - 2 : 0,
  }));
  
  return (
    <div className="min-h-[50vh] w-full p-2 mt-4 rounded-2xl">
      <h1 className="font-semibold text-2xl text-gray-900 bg-white p-2 rounded-xl">
        Recent Splits
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
        {splitData.map((split, idx) => (
            <SplitCard key={idx} split={split}/>
        ))}
      </div>
    </div>
  );
}

export default DashHistory;
