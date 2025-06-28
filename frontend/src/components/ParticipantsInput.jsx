import React from "react";

function ParticipantsInput({participants, setParticipants}) {

  const handleChange = (index, event) => {
    const newParticipants = [...participants];
    newParticipants[index] = event.target.value;
    setParticipants(newParticipants);
  };

  const handleAdd = () => {
    setParticipants([...participants, ""]);
  };

  const handleRemove = (index) => {
    if (participants.length === 1) return;
    setParticipants(participants.filter((_, i) => i !== index));
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold text-blue-700 mb-6 flex items-center gap-2">
        <svg
          className="w-7 h-7 text-blue-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-2a4 4 0 100-8 4 4 0 000 8zm6 6v-2a4 4 0 00-3-3.87M9 20v-2a4 4 0 013-3.87"
          />
        </svg>
        Add Participants
      </h2>
      <p className="text-gray-600 mb-2">Enter the names of people sharing the bill:</p>
      {participants.map((participant, idx) => (
        <div key={idx} className="flex items-center mb-4 group">
          <input
            type="text"
            value={participant}
            onChange={(e) => handleChange(idx, e)}
            required
            disabled={idx === 0}
            placeholder={`Participant ${idx + 1}`}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition bg-white shadow-sm"
          />
          <button
            type="button"
            onClick={() => handleRemove(idx)}
            disabled={idx === 0}
            className={`px-3 py-2 rounded-r-lg border border-l-0 transition-all duration-200 ${
              idx === 0
                ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                : "bg-red-500 text-white hover:bg-red-600 hover:scale-105 shadow-md"
            }`}
            title="Remove participant"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={handleAdd}
        className="w-full mt-6 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-2 px-4 rounded-lg shadow-lg transition-all duration-200 flex items-center justify-center gap-2"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4v16m8-8H4"
          />
        </svg>
        Add Participant
      </button>
    </div>
  );
}

export default ParticipantsInput;
