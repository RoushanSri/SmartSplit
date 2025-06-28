import React from 'react'

function UploadOptionBill({handleFileChange, loading}) {
  return (
    <div className="w-full max-w-md flex flex-col items-center gap-4 bg-blue-50 rounded-xl p-6 shadow">
                <label className="w-full flex flex-col items-center cursor-pointer">
                    <span className="mb-2 text-blue-700 font-semibold">Select Bill Image</span>
                    <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange}
                        disabled={loading}
                    />
                    <div className="w-full border-2 border-dashed border-blue-300 rounded-lg py-6 flex flex-col items-center justify-center bg-white hover:bg-blue-100 transition">
                        <span className="text-blue-400 text-3xl mb-2">📷</span>
                        <span className="text-gray-500 text-sm">Click or drag to upload</span>
                    </div>
                </label>
                {loading && <p className="text-blue-500 text-sm mt-2">Processing image...</p>}
                <p className="text-gray-500 text-xs mt-1">Upload a clear photo of your bill for best results.</p>
            </div>
  )
}

export default UploadOptionBill
