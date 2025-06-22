import React, { useState } from 'react'
import { FaBell } from "react-icons/fa";
import img from "../assets/logo.jpg"
import avatar from '../assets/noImage.webp'

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

return (
    <div className='w-full bg-transparent justify-between flex p-8 text-white items-center relative'>
        <div className='flex gap-3 items-center'>
            <div className='rounded-full overflow-hidden w-12 h-12'>
                <img src={img} alt="logo" />
            </div>
            <span className='text-2xl font-extrabold'>SmartSplit</span>
        </div>
        {/* Desktop Menu */}
        <div className='hidden md:flex text-zinc-300'>
            <ul className='list-none flex gap-12'>
                    <li>Dashboard</li>
                    <li>Split Bill</li>
                    <li>Past Events</li>
                    <li>About Us</li>
                    <li>Contanct Us</li>
            </ul>
        </div>

        <div className='md:hidden flex items-center'>
            <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>

        {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-zinc-900 text-zinc-300 flex flex-col md:hidden z-10">
                <ul className='list-none flex flex-col gap-4 p-4'>
                    <li>Dashboard</li>
                    <li>Split Bill</li>
                    <li>Past Events</li>
                    <li>About Us</li>
                    <li>Contanct Us</li>
                </ul>
            </div>
        )}
        <div className='hidden md:flex gap-3 items-center'>
            <div className='rounded-full border-1 border-gray-400 p-2'>
                    <FaBell/>
            </div>
            <div className='rounded-full overflow-hidden w-8 h-8'>
                <img src={avatar} alt="avatar" className='object-contain' />
            </div>
        </div>
    </div>
)
}

export default Header
