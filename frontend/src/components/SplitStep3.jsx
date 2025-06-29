import React, { useState } from "react";
import SplitItems from "./SplitItems";

function SplitStep3({ setBillSplitStatus, formData, setFormData }) {

  const handleSubmit = () => {
    const ownedAmount =
      participants.reduce((sum, p) => sum + (p.contri - p.paid), 0) -
      (participants[0].contri - participants[0].paid);
    const owedAmount = participants[0].contri - participants[0].paid;

    console.log(owedAmount, ownedAmount, participants);

    if (!event || !description) return alert("All fields should be filled.");

    console.log(
      "Event:",
      event,
      " Description:",
      description,
      " Amount:",
      formData.amount,
      "OwedAmount:",
      owedAmount,
      " OwnedAmount:",
      ownedAmount,
      " Participants:",
      participants,
      "Items:",
      formData.items
    );

    localStorage.removeItem("step");
    localStorage.removeItem("formData");
    setBillSplitStatus(1);
  };

  const [participants, setParticipants] = useState(
    formData?.participants || []
  );

  const [event, setEvent] = useState(formData?.event || "");
  const [description, setDescription] = useState(formData?.description || "");

  const handleChanges = (e, idx, participant) => {
    if (e.target.value < 0 || e.target.value > participant.contri)
      return alert(
        "Amount shouldn't be less than 0 and greater than owed amount."
      );
    const updated = [...participants];
    updated[idx] = {
      ...participant,
      paid: parseFloat(e.target.value) || 0,
      status: participant.contri == e.target.value ? "completed" : "pending",
    };
    setParticipants(updated);
    setFormData({ ...formData, participants: updated });
  };

  return (
    <div className="mx-auto md:w-2/3 w-full bg-white rounded-2xl shadow-2xl p-8 transition-all duration-300">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">
        Fill <span className="text-blue-500">up the required</span> Details.
      </h2>
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col gap-4">
          <input
            className="text-3xl placeholder:text-gray-400 font-extrabold border-b-2 border-indigo-200 focus:outline-none focus:border-indigo-500 bg-transparent transition-all duration-200"
            placeholder="Event Name"
            value={event}
            onChange={(e) => setEvent(e.target.value)}
            maxLength={40}
          />
          <input
            className="text-base text-gray-500 border-b-2 border-indigo-100 focus:outline-none focus:border-indigo-400 bg-transparent transition-all duration-200"
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={80}
          />
        </div>
        <span
          className={`px-4 py-1.5 rounded-full text-sm font-bold shadow ${
            formData?.status == "pending"
              ? "bg-yellow-100 text-yellow-800"
              : "bg-green-100 text-green-800"
          }`}
        >
          {(formData?.status || "pending").charAt(0).toUpperCase() +
            (formData?.status || "pending").slice(1)}
        </span>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-3 text-indigo-900 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-2a4 4 0 014-4h4a4 4 0 014 4v2M9 17H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v6a4 4 0 01-4 4h-2M9 17v2a2 2 0 002 2h2a2 2 0 002-2v-2"></path></svg>
          Items
        </h3>
        <ul className="space-y-2">
          {formData?.items?.map((item, idx) => (
            <li key={idx} className="bg-indigo-50 rounded p-2">
              <SplitItems item={item} />
            </li>
          ))}
        </ul>
      </div>
      <div className="mb-6">
        <h3 className="font-semibold text-xl text-indigo-900 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a4 4 0 00-4-4h-1M9 20H4v-2a4 4 0 014-4h1m0-4a4 4 0 118 0 4 4 0 01-8 0z"></path></svg>
          Participants
        </h3>
        <p className="mb-6 text-gray-400">It is assumed that the payment is done by you so just enter the contri amount for "YOU", rest will be taken care of.</p>
        {participants.length === 0 ? (
          <div className="text-gray-400 text-center py-8 italic">
            No participants yet.
          </div>
        ) : (
          <div className="space-y-3">
            {participants.map((participant, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-3 px-4 border border-indigo-100 rounded-lg bg-white hover:bg-indigo-50 transition-colors shadow-sm"
              >
                <span className="text-gray-900 font-medium flex items-center gap-2">
                  <svg
                    className="w-6 h-6 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
                  </svg>
                  {participant.name}
                </span>
                <span className="text-gray-700 flex items-center gap-2">
                  <span className="bg-indigo-100 text-indigo-700 px-2 py-0.5 rounded text-xs font-semibold">
                    Owes ₹{participant.contri}
                  </span>
                  <span className="ml-2">
                    Paid ₹
                    <input
                      type="number"
                      placeholder="0.00"
                      className="border border-gray-300 rounded px-2 py-1 w-24 ml-1 focus:outline-none focus:border-indigo-400 transition-all"
                      value={participant?.paid || ""}
                      onChange={(e) => handleChanges(e, index, participant)}
                      min={0}
                      max={participant.contri}
                    />
                  </span>
                  <span
                    className={`ml-2 px-2 py-0.5 rounded text-xs font-bold shadow ${
                      participant.status === "completed"
                        ? "bg-green-100 text-green-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {participant.status}
                  </span>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center justify-between border-t pt-6 mb-4">
        <span className="font-bold text-xl text-indigo-900 flex items-center gap-2">
          <svg className="w-6 h-6 text-indigo-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 16v-4"></path></svg>
          Total Payment
        </span>
        <span className="text-2xl font-extrabold text-indigo-700">
          ₹{formData?.amount}
        </span>
      </div>
      {formData?.billImage && (
        <div className="mt-6 flex justify-center">
          <img
            src={formData.billImage}
            alt="Bill"
            className="w-full max-w-md rounded-xl shadow-lg border border-indigo-100"
          />
        </div>
      )}
      <div className="flex justify-center mt-8">
        <button
          onClick={handleSubmit}
          className="bg-gradient-to-r from-indigo-500 via-indigo-700 to-indigo-900 text-white px-10 py-3 rounded-2xl shadow-xl font-bold text-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default SplitStep3;
