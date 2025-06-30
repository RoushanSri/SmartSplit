import React, { useMemo } from 'react'

function SplitStep2({setBillSplitStatus, formData, setFormData}) {

  const handleNext=()=>{
        const incomplete = formData?.items?.some(
            item => !item.participants || item.participants.length === 0
        );
        if (incomplete) {
            alert("Please assign participants to all items.");
            return;
        }

        const updatedItems = formData.items.map(item => {
          if (item.participants && item.participants.length > 0) {
            const share = item.amount / item.participants.length;
            return {
              ...item,
              participants: item.participants.map(p => ({
          ...p,
          contribution: parseFloat(share.toFixed(2))
              }))
            };
          }
          return item;
        });

        const updatedParticipants = formData.participants.map(participant => ({
          ...participant,
          contri: parseFloat(participantShares[participant.id].toFixed(2)) || 0,
          status:"pending",
          paid: 0
        }));

        const updatedFormData = {
            ...formData,
            items: updatedItems,
            participants: updatedParticipants,
            status:"pending"
        };
        
        localStorage.setItem("formData", JSON.stringify(updatedFormData));
        setFormData(updatedFormData);
        localStorage.setItem("step",3)
        setBillSplitStatus(3)
  }

  const handleAddParticipant = (itemId, participantId) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      items: prevFormData.items.map((item, idx) =>
        idx === itemId
          ? {
              ...item,
              participants: item.participants?.some(
                p => p.id === prevFormData.participants[participantId].id
              )
                ? item.participants
                : [...(item.participants || []), prevFormData.participants[participantId]]
            }
          : item
      )
    }));
  };

  const handleRemoveParticipant = (itemId, participantId) => {
    setFormData(prevFormData => ({
      ...prevFormData,
      items: prevFormData.items.map((item, idx) =>
        idx === itemId
          ? {
              ...item,
              participants: item.participants?.filter(
                p => p.id !== prevFormData.participants[participantId].id
              )
            }
          : item
      )
    }));
  }

  const participantShares = useMemo(() => {
    const shares = {};
    formData?.participants?.forEach(participant => {
      shares[participant.id] = 0;
    });
    formData?.items?.forEach(item => {
      if (item.participants && item.participants.length > 0) {
        const share = item.amount / item.participants.length;
        item.participants.forEach(p => {
          shares[p.id] += share;
        });
      }
    });
    return shares;
  }, [formData]);

  return (
    <div className="max-w-3xl mx-auto bg-gradient-to-br from-blue-50 via-white to-blue-100 p-10 rounded-3xl shadow-2xl border border-blue-200">
      <h2 className="text-3xl font-extrabold mb-8 text-center text-blue-800">
        Assign <span className="text-blue-500">Participants</span> to Items
      </h2>
      <ul className="mb-10 space-y-5">
        {formData?.items.map((item, itemIdx) => (
          <li
            key={itemIdx}
            className="p-6 border-2 border-blue-200 rounded-2xl bg-white hover:shadow-lg transition-shadow duration-200 group"
          >
            <div className="flex justify-between items-center mb-2">
              <div className="font-bold text-xl text-blue-900 flex items-center gap-3">
                <span className="inline-block w-3 h-3 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full group-hover:scale-125 transition-transform"></span>
                {item.itemName}
              </div>
              <div className="flex items-center bg-gradient-to-r from-green-200 to-green-400 px-4 py-1 rounded-2xl text-green-900 font-semibold shadow-inner">
                ₹{item.amount}
              </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-1">
              {formData?.participants.map((participant, participantIdx) => {
                const isAssigned = item.participants?.some(
                  p => p.id === participant.id
                );
                return (
                  <button
                    key={participant.id}
                    onClick={() =>
                      isAssigned
                        ? handleRemoveParticipant(itemIdx, participantIdx)
                        : handleAddParticipant(itemIdx, participantIdx)
                    }
                    className={`px-3 py-1 rounded-full font-semibold border-2 shadow-sm focus:outline-none transition-all duration-200 text-base flex items-center gap-2
                      ${
                        isAssigned
                          ? "bg-gradient-to-r from-green-500 to-green-400 text-white border-green-500 scale-105 ring-2 ring-green-200"
                          : "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-700 border-blue-300 hover:bg-blue-200 hover:scale-105"
                      }
                    `}
                  >
                    <span
                      className={`w-2.5 h-2.5 rounded-full inline-block transition-colors duration-200 ${
                        isAssigned ? "bg-white" : "bg-blue-400"
                      }`}
                    ></span>
                    {participant.name}
                  </button>
                );
              })}
            </div>
            <div className="mt-2 text-sm text-blue-500 italic">
              {item.participants?.length
                ? `${item.participants.length} participant${item.participants.length > 1 ? "s" : ""} assigned`
                : "No participants assigned"}
            </div>
          </li>
        ))}
      </ul>
      <div className="mb-8 bg-blue-50 rounded-xl p-5 shadow-inner border border-blue-100">
        <h3 className="text-xl font-bold mb-3 text-blue-700 flex items-center gap-2">
          <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
          Current Share
        </h3>
        <ul className="space-y-2">
          {formData?.participants.map(participant => (
            <li
              key={participant.id}
              className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-blue-100 transition-colors"
            >
              <span className="text-blue-900 font-medium">{participant.name}</span>
              <span className="font-bold text-green-700 text-lg tracking-wide">
                ₹{participantShares[participant.id]?.toFixed(2)}
              </span>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        <button
          onClick={handleNext}
          className="bg-gradient-to-r to-[#06116f] from-[#06116f] via-[#282fa2] text-white px-8 py-3 rounded-xl shadow-lg font-semibold text-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default SplitStep2
