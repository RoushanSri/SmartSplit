import React, { useEffect, useState } from 'react'
import { FaBell } from "react-icons/fa";
import img from "../assets/logo.jpg"
import avatar from '../assets/noImage.webp'
import { Link, useLocation } from 'react-router';
import DashData from './DashData';

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const location = useLocation();
const [isDashboard, setIsDashboard] = useState(location.pathname === '/u/dashboard' || location.pathname === '/u/pastEvents');

useEffect(() => {
    setIsDashboard(location.pathname === '/u/dashboard' || location.pathname === '/u/pastEvents');
}, [location.pathname]);

return (
    <div className='bg-gradient-to-r to-[#010316] from-[#010316] via-[#12154e] rounded-2xl w-full'>
    <div className='w-full justify-between flex p-8 text-white items-center relative'>
        <Link to={"/"} className='flex gap-3 items-center'>
            <div className='rounded-full overflow-hidden w-12 h-12'>
                <img src={img} alt="logo" />
            </div>
            <span className='text-2xl font-extrabold'>SmartSplit</span>
        </Link>
        {/* Desktop Menu */}
        <div className='hidden md:flex text-zinc-300'>
            <ul className='list-none flex gap-6'>
                    <li><Link to={"/u/dashboard"} className={`${location.pathname=="/u/dashboard"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Dashboard</Link></li>
                    <li><Link to={"/u/splitBill"} className={`${location.pathname=="/u/splitBill"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Split Bill</Link></li>
                    <li><Link to={"/u/pastEvents"} className={`${location.pathname=="/u/pastEvents"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Past Events</Link></li>
                    <li><Link to={"/u/aboutUs"} className={`${location.pathname=="/u/aboutUs"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>About Us</Link></li>
                    <li><Link to={"/u/contactUs"} className={`${location.pathname=="/u/contactUs"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Contanct Us</Link></li>
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
    {isDashboard && <DashData/>}
    </div>
)
}

export default Header
