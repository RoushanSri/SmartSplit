import React, { useEffect, useState } from 'react'
import { FaBell } from "react-icons/fa";
import img from "../assets/logo.jpg"
import avatar from '../assets/noImage.webp'
import { Link, useLocation, useNavigate } from 'react-router';
import DashData from './DashData';
import { CgLogOut, CgProfile } from "react-icons/cg";
import { MdSettings } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../redux/slice/authSlice';
import { toast } from 'react-hot-toast';
import { clearProfile } from '../redux/slice/profileSlice';
import { clearSplit } from '../redux/slice/splitSlice';
import { motion } from 'framer-motion';

function Header() {
const [menuOpen, setMenuOpen] = useState(false);

const dispatch = useDispatch();
const navigate = useNavigate();

const location = useLocation();
const [isDashboard, setIsDashboard] = useState(location.pathname === '/u/dashboard' || location.pathname === '/u/pastEvents');

useEffect(() => {
    setIsDashboard(location.pathname === '/u/dashboard' || location.pathname === '/u/pastEvents');
}, [location.pathname]);

const [dropdownOpen, setDropdownOpen] = useState(false);

const handleDropdownToggle = () => {
    setDropdownOpen((prev) => !prev);
};

const handleDropdownClose = () => {
    setDropdownOpen(false);
};

const handleMenuClose = () => {
    setMenuOpen(false);
};

const handleLogout = () => {
    const toastId = toast.loading("Logging out...");
    dispatch(logoutUser())
        .then(() => {
            localStorage.removeItem("token");
            dispatch(clearProfile());
            dispatch(clearSplit());
            navigate("/login")
            toast.success("Logged out successfully", { id: toastId });
        })
        .catch((error) => {
            toast.error(`Logout failed: ${error.message}`, { id: toastId });
        });
}

return (
    <motion.div
        className='bg-gradient-to-r to-[#010316] from-[#010316] via-[#12154e] rounded-2xl w-full'
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
    >
        <div className='w-full justify-between flex p-8 text-white items-center relative'>
            <Link to={"/"} className='flex gap-3 items-center'>
                <div className='rounded-full overflow-hidden w-12 h-12'>
                    <img src={img} alt="logo" />
                </div>
                <span className='text-2xl font-extrabold'>SmartSplit</span>
            </Link>
            {/* Desktop Menu */}
            <div className='hidden lg:flex text-zinc-300'>
                <ul className='list-none flex lg:gap-6 md:gap-2'>
                        <li><Link to={"/u/dashboard"} className={`${location.pathname=="/u/dashboard"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Dashboard</Link></li>
                        <li><Link to={"/u/splitBill"} className={`${location.pathname=="/u/splitBill"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Split Bill</Link></li>
                        <li><Link to={"/u/pastEvents"} className={`${location.pathname=="/u/pastEvents"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Past Events</Link></li>
                        <li><Link to={"/u/aboutUs"} className={`${location.pathname=="/u/aboutUs"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>About Us</Link></li>
                        <li><Link to={"/u/contactUs"} className={`${location.pathname=="/u/contactUs"?"bg-[#c2b2ec29]":""} p-1 px-4 rounded-full flex justify-center items-center hover:text-zinc-100 duration-200`}>Contanct Us</Link></li>
                    </ul>
                </div>

            <div className='lg:hidden flex items-center' onBlur={()=>setTimeout(handleMenuClose, 500)}>
                <button onClick={() => setMenuOpen(!menuOpen)} className="focus:outline-none border-2 border-zinc-500 p-2 rounded-xl hover:bg-zinc-800 transition-colors duration-200 cursor-pointer">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {menuOpen && (
      <div className="absolute top-full right-0 w-1/2 md:w-1/3 bg-[#1e0452e3] text-white shadow-lg rounded-b-lg z-50 animate-slide-down">
        <div className="flex flex-col divide-y divide-zinc-700">
        
            <Link to={"/u/dashboard"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg">
              Dashboard
            </Link>
        
            <Link to={"/u/splitBill"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg">
              Split Bill
            </Link>
        
            <Link to={"/u/pastEvents"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg">
              Past Events
            </Link>
        
            <Link to={"/u/aboutUs"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg">
              About Us
            </Link>
        
            <Link to={"/u/contactUs"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg">
              Contact Us
            </Link>
        
            <Link to={"/u/settings"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg">
              Settings
            </Link>
        
            <Link to={"/u/logout"} className="px-6 py-4 hover:bg-[#1e0452] transition-colors duration-200 cursor-pointer text-lg" onClick={handleLogout}>
              Logout
            </Link>
        </div>
      </div>
    )}
            <div className='hidden lg:flex gap-3 items-center'>
                <div className='rounded-full border-1 border-gray-400 p-2'>
                        <FaBell/>
                    </div>
                    <div className='relative'>
                        <div
                            className='rounded-full overflow-hidden w-8 h-8 cursor-pointer'
                            onClick={handleDropdownToggle}
                            tabIndex={0}
                            onBlur={() => setTimeout(handleDropdownClose, 500)}
                        >
                            <img src={avatar} alt="avatar" className='object-contain' />
                            <div className='absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-white'></div>
                        </div>
                        {dropdownOpen && (
                            <div className="absolute right-0 mt-2 w-30 bg-black text-white rounded shadow-lg z-20">
                                <ul className="py-2">
                                    <li>
                                        <Link
                                            to="/u/profile"
                                            className="px-4 py-2 hover:bg-[#514377e6] flex items-center gap-2"
                                            onClick={handleDropdownClose}
                                        >
                                            <CgProfile/> <span>Profile</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to="/u/settings"
                                            className="px-4 py-2 hover:bg-[#514377e6] flex items-center gap-2"
                                            onClick={handleDropdownClose}
                                        >
                                            <MdSettings/>Settings
                                        </Link>
                                    </li>
                                    <li>
                                        <button
                                            className="w-full text-left px-4 py-2 hover:bg-[#514377e6] text-red-500 flex items-center gap-2 cursor-pointer"
                                            onClick={() => {
                                                handleLogout();
                                                handleDropdownClose();
                                            }}
                                        >
                                            <CgLogOut/>Logout
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {isDashboard && <DashData/>}
    </motion.div>
)
}

export default Header
