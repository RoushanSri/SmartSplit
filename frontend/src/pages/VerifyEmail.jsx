import React from 'react'
import { TfiEmail } from "react-icons/tfi";

function VerifyEmail() {
return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-200">
        <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md border border-blue-100">
            <div className="flex flex-col items-center">
                <TfiEmail className="text-blue-500 w-20 h-20 mb-6 animate-bounce-slow" />
                <h1 className="text-3xl font-extrabold mb-3 text-center text-blue-800 tracking-tight">
                    Verify Your Email
                </h1>
                <p className="text-gray-600 mb-8 text-center text-base">
                    We’ve sent a verification link to your email address.<br />
                    Please check your inbox and click the link to verify your account.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-bold py-2.5 px-4 rounded-lg shadow transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50">
                    Resend Email
                </button>
            </div>
        </div>
    </div>
)
}

export default VerifyEmail
