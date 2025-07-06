import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import avatar from '../assets/noImage.webp'
import { Link } from 'react-router-dom'
import { easeInOut, motion } from 'framer-motion'

function SplitCard({split}) {
  return (
    <motion.div
      key={split.id}
      className="bg-gradient-to-br from-blue-50 via-[#fffbee] to-indigo-100 rounded-3xl p-7 shadow-xl border border-indigo-100 hover:shadow-2xl transition-all duration-300"
      transition={{ duration: 0.5, ease: "easeInOut" }}
      whileHover={{ scale: 1.04 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#181c5d] to-indigo-400 flex items-center justify-center text-white text-lg font-bold shadow">
            {split.Event[0]}
          </div>
          <div>
            <h3 className="font-bold text-[#181c5d] text-lg tracking-tight">
              {split.Event}
            </h3>
          </div>
        </div>
        <span
          className={`px-4 py-1 rounded-full text-xs font-semibold shadow-sm ${split.statusColor} bg-white/80 text-[#181c5d]`}
        >
          {split.status}
        </span>
      </div>

      {/* Details */}
      <div className="grid grid-cols-3 gap-4 mb-5">
        <div>
          <p className="text-xs text-indigo-700 mb-1 font-medium">Total payment</p>
          <p className="text-base font-bold text-[#181c5d]">₹{split.totalPayment}</p>
        </div>
        <div>
          <p className="text-xs text-indigo-700 mb-1 font-medium">Date</p>
          <p className="text-base font-bold text-[#181c5d]">{split.date}</p>
        </div>
        <div>
          <p className="text-xs text-indigo-700 mb-1 font-medium">People</p>
          <div className="flex -space-x-2">
            {split.people.map((idx, i) => (
              <div key={idx} className="rounded-full overflow-hidden w-7 h-7 border-2 border-white shadow">
                <img
                  src={avatar}
                  alt="avatar"
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Items */}
      <div className="space-y-3 mb-5">
        {split.items.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-pink-400 flex items-center justify-center text-white font-bold shadow">
                {item.name[0]}
              </div>
              <div>
                <p className="text-base font-semibold text-[#181c5d]">
                  {item.name}
                </p>
                <p className="text-xs text-indigo-700">₹{item.price}</p>
              </div>
            </div>
            <span className="text-sm text-indigo-700 font-medium">
              {item.quantity}x
            </span>
          </div>
        ))}
        <p className="text-xs text-indigo-500 font-medium">
          +{split.moreItems} more items
        </p>
      </div>

      {/* Action Button */}
      <Link
        to={`/u/split/${split.id}`}
        className="w-full bg-[#181c5d] hover:bg-indigo-700 hover:scale-[1.02] duration-200 cursor-pointer text-white py-3 px-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg transition"
      >
        <span>Split details</span>
        <FaArrowRight className="h-4 w-4" />
      </Link>
    </motion.div>
  )
}

export default SplitCard
