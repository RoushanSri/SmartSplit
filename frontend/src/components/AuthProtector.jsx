import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearProfile, getProfile } from '../redux/slice/profileSlice';
import { clearSplit } from '../redux/slice/splitSlice';

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
            {isLoading ? <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : children}
        </>
    )
}

export default AuthProtector
