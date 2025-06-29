import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'

function ManualOptionBill({items, handleItemChange, handleAddItem, handleRemoveItem}) {
  return (
    <div className="w-full max-w-2xl flex flex-col gap-4 bg-white rounded-xl p-6 shadow">
                    <div className="flex flex-col gap-3">
                        {items?.map((item, idx) => (
                            <div className="sm:flex lg:gap-2 items-center grid-cols-4 grid" key={idx}>
                                <input
                                    type="text"
                                    placeholder="Item Name"
                                    className="border border-gray-300 rounded-lg px-3 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-blue-200 col-span-4"
                                    value={item.itemName}
                                    onChange={e => handleItemChange(idx, "itemName", e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Price"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-24 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    value={item.itemPrice}
                                    min="0"
                                    step="0.01"
                                    onChange={e => handleItemChange(idx, "itemPrice", e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Qty"
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-16 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    value={item.quantity}
                                    min="1"
                                    step="1"
                                    onChange={e => handleItemChange(idx, "quantity", e.target.value)}
                                />
                                <input
                                    type="number"
                                    placeholder="Amt."
                                    className="border border-gray-300 rounded-lg px-3 py-2 w-20 focus:outline-none focus:ring-2 focus:ring-blue-200"
                                    value={item.amount}
                                    min="0"
                                    step="0.01"
                                    onChange={e => handleItemChange(idx, "amount", e.target.value)}
                                />
                                <button
                                    onClick={() => handleRemoveItem(idx)}
                                    className="p-2 text-red-500 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-700 transition flex items-center justify-center"
                                    title="Remove item"
                                >
                                    <RiDeleteBinLine size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                    <button
                        className="self-start mt-2 text-blue-600 hover:underline text-sm font-medium flex items-center gap-1"
                        onClick={handleAddItem}
                        type="button"
                    >
                        <span className="text-lg font-bold">+</span> Add another item
                    </button>
                </div>
  )
}

export default ManualOptionBill
