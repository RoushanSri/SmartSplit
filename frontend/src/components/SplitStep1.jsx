import React, { useState } from "react";
import UploadOptionBill from "./UploadOptionBill";
import ManualOptionBill from "./ManualOptionBill";
import ParticipantsInput from "./ParticipantsInput";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid';

function SplitStep1({ setBillSplitStatus, formData, setFormData }) {
  const { profile } = useSelector((state) => state.profile);

  const [items, setItems] = useState(formData?.items || []);
  const [mode, setMode] = useState(items?.length > 0 ? "manual" : "upload");
  const [loading, setLoading] = useState(false);
  const [participants, setParticipants] = useState(
    formData?.participants || [{id:uuidv4() ,name:profile?.name + "(You)"}]
  );

  const handleNext = () => {
    const incomplete = items.find(
      (item) =>
        item.itemName === "" ||
        item.itemPrice === "" ||
        item.quantity === "" ||
        item.amount === ""
    );
    if (incomplete) {
      alert("Please fill all fields for each item.");
      return;
    }
    const check = participants.filter(
      (participant) => participant.name.trim() === ""
    );

    if (check.length > 0) {
      alert("Please fill all participant names.");
      return;
    }

    const amount = items.reduce((acc, item) => acc + parseFloat(item.amount || 0), 0);
    if (amount <= 0) {
      alert("Total amount must be greater than zero.");
      return;
    }

    const data = {
      items: items.map((item) => ({
        itemName: item.itemName,
        itemPrice: parseFloat(item.itemPrice),
        quantity: parseInt(item.quantity),
        amount: parseFloat(item.amount),
      })),
      participants: participants.map((participant) => ({
        id: participant.id,
        name: participant.name.trim()
      })),
      amount: amount.toFixed(2),
    };
    setFormData(data);
    localStorage.setItem("formData", JSON.stringify(data));
    localStorage.setItem("step", 2);
    setBillSplitStatus(2);
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);

    // Simulate API call to extract bill data
    // Replace this with your actual API call
    setTimeout(() => {
      // Example response from API
      const apiItems = [
        { itemName: "Pizza", itemPrice: "12.99", quantity: "1", amount: "12.99" },
        { itemName: "Soda", itemPrice: "2.50", quantity: "2", amount: "5.00" },
      ];
      setItems(apiItems);
      setLoading(false);
      setMode("manual"); // Switch to manual mode to show filled form
    }, 1500);
  };

  const handleItemChange = (idx, field, value) => {
    setItems((items) =>
      items.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );
  };

  const handleAddItem = () => {
    setItems((items) => [
      ...items,
      { itemName: "", itemPrice: "", quantity: "", amount: "" },
    ]);
  };

  const handleRemoveItem = (idx) => {
    setItems((items) => items.filter((_, i) => i !== idx));
    if (items.length === 1) {
      setMode(null);
    }
  };

  return (
    <div className=" py-8 w-full">
      <div className="flex flex-col items-center max-w-3xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 rounded-3xl shadow-2xl border border-blue-200">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">
        How <span className="text-blue-500">would you like to</span> add bill.
      </h2>
      <div className="flex gap-6 mb-4 justify-center">
        <button
          className={`px-6 py-3 rounded-xl border</svg> shadow-sm font-medium transition-all duration-200 ${
            mode === "upload"
              ? "bg-gradient-to-r to-[#06116f] from-[#06116f] via-[#282fa2] text-white scale-105"
              : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
          }`}
          disabled={items?.length > 0}
          onClick={() => setMode("upload")}
        >
          Upload Bill Image
        </button>
        <button
          className={`px-6 py-3 rounded-xl border shadow-sm font-medium transition-all duration-200 ${
            mode === "manual"
              ? "bg-gradient-to-r to-[#06116f] from-[#06116f] via-[#282fa2] text-white scale-105"
              : "bg-white text-blue-600 border-blue-300 hover:bg-blue-50"
          }`}
          onClick={() => {
            setMode("manual");
            if (mode !== "manual" && (!items || items?.length == 0))
              handleAddItem();
          }}
        >
          Add Items Manually
        </button>
      </div>

      {mode === "upload" && (
        <UploadOptionBill
          handleFileChange={handleFileChange}
          loading={loading}
        />
      )}

      {mode === "manual" && (
        <ManualOptionBill
          handleItemChange={handleItemChange}
          handleAddItem={handleAddItem}
          handleRemoveItem={handleRemoveItem}
          items={items}
        />
      )}
      <ParticipantsInput
        participants={participants}
        setParticipants={setParticipants}
      />

      <button
        onClick={handleNext}
        className={`mt-8 bg-gradient-to-r to-[#06116f] from-[#06116f] via-[#282fa2] text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer`}
        disabled={
          !mode || loading || (mode === "manual" && items?.length === 0)
        }
      >
        Next Step
      </button>
      </div>
    </div>
  );
}

export default SplitStep1;
