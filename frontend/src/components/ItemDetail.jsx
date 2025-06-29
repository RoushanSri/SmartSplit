import React from "react";

function ItemDetail({ item }) {
return (
    <div className="w-full bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4 text-indigo-700">Item Participants</h2>
        {item.participants.length === 0 ? (
            <div className="text-gray-500 text-center py-8">No participants yet.</div>
        ) : (
            item.participants.map((participant, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b last:border-b-0 hover:bg-indigo-50 transition-colors"
                >
                    <span className="text-gray-900 font-medium flex items-center gap-2">
                        <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
                        </svg>
                        {participant.name}
                    </span>
                    <span className="text-indigo-600 font-semibold bg-indigo-100 px-3 py-1 rounded-full">
                        ₹{participant.contribution}
                    </span>
                </div>
            ))
        )}
    </div>
);
}

export default ItemDetail;
