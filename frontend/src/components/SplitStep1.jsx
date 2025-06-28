import React, { useState } from "react";
import UploadOptionBill from "./UploadOptionBill";
import ManualOptionBill from "./ManualOptionBill";
import ParticipantsInput from "./ParticipantsInput";
import { useSelector } from "react-redux";

function SplitStep1({ setBillSplitStatus, formData, setFormData }) {
  const { profile } = useSelector((state) => state.profile);

  const [items, setItems] = useState(formData?.items || []);
  const [mode, setMode] = useState(items?.length > 0 ? "manual" : "upload");
  const [loading, setLoading] = useState(false);
  const [participants, setParticipants] = useState(
    formData?.participants || [profile?.name + "(You)"]
  );

  const handleNext = () => {
    const incomplete = items.find(
      (item) =>
        item.name === "" ||
        item.price === "" ||
        item.qty === "" ||
        item.amount === ""
    );
    if (incomplete) {
      alert("Please fill all fields for each item.");
      return;
    }
    const check = participants.filter(
      (participant) => participant.trim() === ""
    );

    if (check.length > 0) {
      alert("Please fill all participant names.");
      return;
    }

    const data = {
      items: items.map((item) => ({
        name: item.name,
        price: parseFloat(item.price),
        qty: parseInt(item.qty),
        amount: parseFloat(item.amount),
      })),
      participants: participants.map((participant) => participant.trim()),
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
        { name: "Pizza", price: "12.99", qty: "1", amount: "12.99" },
        { name: "Soda", price: "2.50", qty: "2", amount: "5.00" },
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
      { name: "", price: "", qty: "", amount: "" },
    ]);
  };

  const handleRemoveItem = (idx) => {
    setItems((items) => items.filter((_, i) => i !== idx));
    if (items.length === 1) {
      setMode(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      <h2 className="text-2xl font-bold mb-2 text-gray-800">
        How would you like to add the bill?
      </h2>
      <div className="flex gap-6 mb-4">
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
  );
}

export default SplitStep1;
