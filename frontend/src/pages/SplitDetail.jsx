import React, { use, useEffect, useState } from 'react'
import { useParams } from 'react-router';
import { getSplitById, updateSplit } from '../redux/slice/splitSlice';
import { useDispatch, useSelector } from 'react-redux';
import SplitTimeline from '../components/SplitTimeline';
import SplitItems from '../components/SplitItems';
import { toast } from 'react-hot-toast';
import { getProfile } from '../redux/slice/profileSlice';

function SplitDetail() {
    const { id } = useParams();

    const { split } = useSelector((state) => state.split);

    const dispatch = useDispatch();

    const [splitData, setSplitData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        if (id) {
            dispatch(getSplitById(id));
        }
    }, [id]);

    function updateProfile(){
        dispatch(getProfile());
    }

    const handleUpdate = () => {
        if (participants.length === 0) {
            toast.error("No participants to update");
            return;
        }
        const toastId = toast.loading("Updating split...");
        
        const owedAmount = participants[participants.length-1].contri - participants[participants.length-1].paid;
        const ownedAmount = participants
            .slice(0, -1)
            .reduce((acc, participant) => acc + (participant.contri - participant.paid), 0);
        
        dispatch(updateSplit({id, participants, owedAmount, ownedAmount}))
            .then((res) => {
                if (res.payload.success) {
                    toast.success("Split updated successfully",{
                        id: toastId
                    });
                    setEditMode(false);
                    updateProfile();
                } else {
                    toast.error(res.payload.message || "Failed to update split",{
                        id: toastId
                    });
                }
            })
            .catch((err) => {
                toast.error(err.message || "An error occurred while updating split",{
                    id: toastId
                });
            });
    }

    const handleChanges = (e, index, participant) => {
        const value = parseFloat(e.target.value);
        if(value > participant.contri || value < 0) {
            alert("Paid amount should be between 0 and owed amount");
            return;
        }
        const updatedParticipants = participants.map((p, idx) => 
            idx === index ? { ...p, paid: value, status: value.toFixed(2) == participant.contri.toFixed(2) ? "completed" : "pending",}: p

        );
        setParticipants(updatedParticipants);
    }

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
            setParticipants(formattedSplit.participants);
        }
    }, [split]);

return (
    <div className="w-full min-h-[50vh] flex flex-col items-center justify-center mt-5">
        <div className="w-full flex justify-between items-center px-8">
            <h1 className="text-3xl font-bold text-gray-900">Split Details</h1>
            <div className="flex items-center gap-4">
                {!editMode?(<button onClick={()=>setEditMode(true)} className='bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-300'>
                    Update Split
                </button>):(<button onClick={()=>handleUpdate()} className='bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition-colors duration-300'>
                    Save Changes
                </button>)}
            </div>
        </div>
    <div className="w-full bg-gray-100 py-4 grid grid-cols-1 md:flex gap-6 px-8">
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
                        <SplitItems item={item} key={idx}/>
                    ))}
                </ul>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold text-lg mb-2">Participants</h3>
                {participants.length === 0 ? (
            <div className="text-gray-500 text-center py-8">No participants yet.</div>
        ) : (
            participants.map((participant, index) => (
                <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b last:border-b-0 hover:bg-indigo-50 transition-colors">
                    <span className="text-gray-900 font-medium flex items-center gap-2">
                        <svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 10a4 4 0 100-8 4 4 0 000 8zm-7 8a7 7 0 1114 0H3z" />
                        </svg>
                        {participant.name}
                    </span>
                    <span className="text-gray-600">
                        Owes ₹{participant.contri.toFixed(2)} | Paid ₹
                        {!editMode?(<span>{participant.paid.toFixed(2)}</span>):
                        (<input
                            type="number"
                            className='border border-gray-300 rounded px-2 py-1 w-24'
                            value={participant.paid}
                            onChange={(e) => handleChanges(e, index, participant)}
                        />)}
                        <span
                            className={`ml-2 px-2 py-0.5 rounded text-xs ${participant.status === "completed"? "bg-green-100 text-green-800": "bg-yellow-100 text-yellow-800"}`}>
                                    {participant.status}
                        </span>
                    </span>
                </div>
            ))
        )}
            </div>
            <div className="flex items-center justify-between border-t pt-4">
                <span className="font-bold text-lg">Total Payment</span>
                <span className="text-lg font-semibold text-gray-800">
                    ${splitData?.amount.toFixed(2)}
                </span>
            </div>
            {splitData?.billImage && !editMode && (
                <div className="mt-4">
                    <img
                        src={split.billImage}
                        alt="Bill"
                        className="w-full rounded shadow"
                    />
                </div>
            )}
        </div>
        {!editMode && (<div className="md:w-1/3 w-full mx-auto bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-bold">Split Status</h3>
            <div>
                <SplitTimeline splitStatus={splitData?.status}/>
            </div>
            <div className='flex flex-col items-start mt-6 gap-2'>
                <h3 className="text-lg font-semibold mt-4">Summary</h3>
                <p className="text-gray-600">
                    Total Amount: <span className='font-semibold'>₹{splitData?.amount.toFixed(2)}</span>
                </p>
                <p className="text-gray-600">
                    Total Owed Amount: <span className='font-semibold'>₹{splitData?.owedAmount.toFixed(2)}</span>
                </p>
                <p className="text-gray-600">
                    Total Owned Amount: <span className='text-indigo-600 font-semibold bg-indigo-100 px-3 py-1 rounded-full'>₹{splitData?.ownedAmount.toFixed(2)}</span>
                </p>
            </div>
        </div>)}
    </div>
    </div>
);
}

export default SplitDetail
