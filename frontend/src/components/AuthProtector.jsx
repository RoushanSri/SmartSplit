import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearProfile, getProfile } from '../redux/slice/profileSlice';
import { clearSplit } from '../redux/slice/splitSlice';
import vid from '../assets/Animation - 1751523503507.webm'

function AuthProtector({children}) {

    const navigate = useNavigate();
    const {token} = useSelector((state) => state.auth);
    const {profile, loading} = useSelector((state) => state.profile);

    const isLoading = loading ;
    
    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    })

    useEffect(() => {
        if(!profile )
            dispatch(getProfile()).then((res) => {
                if (res.error) {
                    localStorage.removeItem("token");
                    dispatch(clearProfile());
                    dispatch(clearSplit());
                    navigate("/login");
                }
            });
        
    }, [ profile, token ]);

    return (
        <>
            {isLoading ? <div className="loader w-full h-screen flex justify-center items-center">
                    <video src={vid} autoPlay loop muted className='w-1/6'/>
            </div> : children}
        </>
    )
}

export default AuthProtector
