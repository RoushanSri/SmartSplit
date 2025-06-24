import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../redux/slice/profileSlice';

function AuthProtector({children}) {

    const navigate = useNavigate();
    const {loading, token} = useSelector((state) => state.auth);
    const {profile} = useSelector((state) => state.profile);

    const dispatch = useDispatch();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/login");
        }
    })

    useEffect(() => {
            if(!profile && token)
                dispatch(getProfile())
    }, [dispatch, profile, token]);

    return (
        <>
            {loading ? <div className="loader">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : children}
        </>
    )
}

export default AuthProtector
