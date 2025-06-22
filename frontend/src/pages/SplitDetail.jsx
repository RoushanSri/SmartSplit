import React from 'react'

function SplitDetail() {
const split = {
    event: "Trip to Italy",
    description: "Dinner at Rome",
    createdAt: "2025-06-21T18:30:00.000Z",
    items: [
        { itemName: "Pasta Carbonara", itemPrice: 14, quantity: 1 },
        { itemName: "Garlic Bread", itemPrice: 6, quantity: 2 },
        { itemName: "Tiramisu", itemPrice: 8, quantity: 1 },
        { itemName: "Wine", itemPrice: 20, quantity: 1 },
    ],
    participants: [
        { name: "Alice", contri: 20, paid: 20, status: "completed" },
        { name: "Bob", contri: 20, paid: 10, status: "pending" },
        { name: "Charlie", contri: 20.75, paid: 0, status: "pending" },
    ],
    amount: 60.75,
    status: "pending",
    billImage: "",
};

const statusColor =
    split.status === "completed"
        ? "bg-green-100 text-green-800"
        : split.status === "pending"
        ? "bg-yellow-100 text-yellow-800"
        : "bg-gray-100 text-gray-800";

return (
    <div>
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold">{split.event}</h2>
                    <p className="text-gray-500 text-sm">
                        {new Date(split.createdAt).toLocaleDateString()}
                    </p>
                    {split.description && (
                        <p className="text-gray-400 text-xs">{split.description}</p>
                    )}
                </div>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}
                >
                    {split.status.charAt(0).toUpperCase() + split.status.slice(1)}
                </span>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Items</h3>
                <ul>
                    {split.items.map((item, idx) => (
                        <li className="flex justify-between py-1" key={idx}>
                            <span>
                                {item.itemName}
                                {item.quantity > 1 && (
                                    <span className="text-gray-400 text-xs ml-1">
                                        x{item.quantity}
                                    </span>
                                )}
                            </span>
                            <span className="text-gray-600">
                                {item.quantity} x ${item.itemPrice}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Participants</h3>
                <ul>
                    {split.participants.map((p, idx) => (
                        <li className="flex justify-between py-1" key={idx}>
                            <span>{p.name}</span>
                            <span className="text-gray-600">
                                Owes ${p.contri.toFixed(2)} | Paid ${p.paid.toFixed(2)}
                                <span
                                    className={`ml-2 px-2 py-0.5 rounded text-xs ${
                                        p.status === "completed"
                                            ? "bg-green-100 text-green-800"
                                            : "bg-yellow-100 text-yellow-800"
                                    }`}
                                >
                                    {p.status}
                                </span>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex items-center justify-between border-t pt-4">
                <span className="font-bold text-lg">Total Payment</span>
                <span className="text-lg font-semibold text-gray-800">
                    ${split.amount.toFixed(2)}
                </span>
            </div>
            {split.billImage && (
                <div className="mt-4">
                    <img
                        src={split.billImage}
                        alt="Bill"
                        className="w-full rounded shadow"
                    />
                </div>
            )}
        </div>
    </div>
);
}

export default SplitDetail
