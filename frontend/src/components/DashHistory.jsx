import React from "react";
import SplitCard from "./SplitCard";

function DashHistory() {
  const splitData = [
    {
      id: 1,
      Event: "Dinner Up14",
      status: "Completed",
      statusColor: "bg-green-100 text-green-800",
      date: "21 June 2025",
      people: [1, 2, 3],
      totalPayment: 120.5,
      items: [
        {
          name: "Pizza Margherita",
          price: 15,
          quantity: 2,
        },
        {
          name: "Caesar Salad",
          price: 10,
          quantity: 1,
        },
      ],
      moreItems: 3,
    },
    {
      id: 2,
      Event: "Roms Pizza",
      status: "Pending",
      statusColor: "bg-yellow-100 text-yellow-800",
      date: "21 June 2025",
      people: [1, 2, 3],
      totalPayment: 85.0,
      items: [
        {
          name: "Burger",
          image: "",
          price: 12,
          quantity: 2,
        },
        {
          name: "Fries",
          price: 5,
          quantity: 3,
        },
      ],
      moreItems: 1,
    },
    {
      id: 3,
      Event: "Grocery",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
      date: "21 June 2025",
      people: [1, 2, 3],
      totalPayment: 60.75,
      items: [
        {
          name: "Pasta Carbonara",
          price: 14,
          quantity: 1,
        },
        {
          name: "Garlic Bread",
          price: 6,
          quantity: 2,
        },
      ],
      moreItems: 2,
    },
    {
      id: 4,
      Event: "Trip",
      status: "Cancelled",
      statusColor: "bg-red-100 text-red-800",
      date: "21 June 2025",
      people: [1, 2, 3],
      totalPayment: 60.75,
      items: [
        {
          name: "Pasta Carbonara",
          price: 14,
          quantity: 1,
        },
        {
          name: "Garlic Bread",
          price: 6,
          quantity: 2,
        },
      ],
      moreItems: 2,
    },
  ];
  return (
    <div className="min-h-[50vh] w-full p-2 mt-4 rounded-2xl">
      <h1 className="font-semibold text-2xl text-gray-900 bg-white p-2 rounded-xl">
        Recent Splits
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 my-6">
        {splitData.map((split) => (
            <SplitCard split={split}/>
        ))}
      </div>
    </div>
  );
}

export default DashHistory;
