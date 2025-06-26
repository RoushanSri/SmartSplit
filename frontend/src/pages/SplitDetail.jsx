import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getSplitById } from '../redux/slice/splitSlice';
import { useDispatch, useSelector } from 'react-redux';
import SplitTimeline from '../components/SplitTimeline';
import SplitItems from '../components/SplitItems';

function SplitDetail() {
    const { id } = useParams();

    const { split } = useSelector((state) => state.split);

    const disaptch = useDispatch();

    const [splitData, setSplitData] = useState(null);

    useEffect(() => {
        if (id) {
            disaptch(getSplitById(id));
        }
    }, [id]);

    useEffect(() => {
        if (split) {
            const formattedSplit = {
                ...split,
                date: new Date(split.createdAt).toISOString().split('T')[0],
                items: split.items.map(item => ({
                    ...item,
                    itemPrice: parseFloat(item.itemPrice),
                    quantity: parseInt(item.quantity, 10),
                    participants: item.participants.map(p => ({
                        ...p,
                        contri: parseFloat(p.contri),
                    })),
                })),
                participants: split.participants.map(p => ({
                    ...p,
                    contri: parseFloat(p.contri),
                    paid: parseFloat(p.paid)
                })),
                statusColor: split.status === "completed"
                    ? "bg-green-100 text-green-800"
                    : split.status === "pending"
                    ? "bg-yellow-100 text-yellow-800"
                    : "bg-gray-100 text-gray-800",

            };
            setSplitData(formattedSplit);
        }
    }, [split]);

return (
    <div className="min-h-[50vh] w-full bg-gray-100 py-8 grid grid-cols-1 md:flex gap-6 px-8">
        <div className="mx-auto md:w-2/3 w-full bg-white rounded-xl shadow-md p-6 ">
            <div className="flex items-center justify-between mb-4">
                <div>
                    <h2 className="text-2xl font-bold">{splitData?.event}</h2>
                    <p className="text-gray-500 text-sm">
                        {splitData?.date}
                    </p>
                    {splitData?.description && (
                        <p className="text-gray-400 text-xs">{splitData?.description}</p>
                    )}
                </div>
                <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${splitData?.statusColor}`}
                >
                    {splitData?.status.charAt(0).toUpperCase() + splitData?.status.slice(1)}
                </span>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Items</h3>
                <ul>
                    {splitData?.items.map((item, idx) => (
                        <SplitItems item={item}/>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Participants</h3>
                <ul>
                    {splitData?.participants.map((p, idx) => (
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
                    ${splitData?.amount.toFixed(2)}
                </span>
            </div>
            {splitData?.billImage && (
                <div className="mt-4">
                    <img
                        src={split.billImage}
                        alt="Bill"
                        className="w-full rounded shadow"
                    />
                </div>
            )}
        </div>
        <div className="md:w-1/3 w-full mx-auto bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold">Split Status</h3>
            <div>
                <SplitTimeline splitStatus={splitData?.status}/>
            </div>
        </div>
    </div>
);
}

export default SplitDetail
