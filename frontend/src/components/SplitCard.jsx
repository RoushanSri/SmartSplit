import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import avatar from '../assets/noImage.webp'

function SplitCard({split}) {
  return (
    <div key={split.id} className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white">
                      {split.Event[0]}
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {split.Event}
                      </h3>
                    </div>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${split.statusColor}`}
                  >
                    {split.status}
                  </span>
                </div>
    
                {/* Details */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Total payment</p>
                    <p className="text-sm font-medium text-slate-900">
                      ₹{split.totalPayment}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">Date</p>
                    <p className="text-sm font-medium text-slate-900">
                      {split.date}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">People</p>
                    <div className="flex">
                      {split.people.map((idx) => (
                        <div key={idx} className="rounded-full overflow-hidden w-6 h-6">
                          <img
                            src={avatar}
                            alt="avatar"
                            className="object-contain"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
    
                {/* Items */}
                <div className="space-y-3 mb-4">
                  {split.items.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                          {item.name[0]}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            {item.name}
                          </p>
                          <p className="text-xs text-slate-500">₹{item.price}</p>
                        </div>
                      </div>
                      <span className="text-sm text-slate-600">
                        {item.quantity}x
                      </span>
                    </div>
                  ))}
                  {split.moreItems!==0 && (<p className="text-xs text-slate-500">
                    +{split.moreItems} more items
                  </p>)}
                </div>
    
                {/* Action Button */}
                <button className="w-full bg-slate-900 hover:bg-slate-800 cursor-pointer text-white py-3 px-4 rounded-xl font-medium transition-colors flex items-center justify-center space-x-2">
                  <span>Split details</span>
                  <FaArrowRight className="h-4 w-4" />
                </button>
              </div>
  )
}

export default SplitCard
