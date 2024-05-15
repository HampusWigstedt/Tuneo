'use client'
import React from 'react';
import { useEffect, useState } from "react";

const Cookies = () => {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        if (!document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='))) {
            // The cookie does not exist, so show the cookie consent banner
            setShowAlert(true);
        }
    }, []);

    const handleDeny = () => {
        window.location.href = '/error'
    }

    const handleAccept = () => {
        // When the user gives their consent, set the cookieConsent cookie
        // This cookie will expire in 365 days
        document.cookie = 'cookieConsent=true; expires=' + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString();
        window.location.href = '/'
        setShowAlert(false);
    }

    return (
<div>
    {showAlert && (
        <div className="card w-auto bg-base-content text-2xl underline shadow-xl my-6 text-black">
            <div className="card-body text-center">
                <div className="card-actions justify-end">
                    <button className="btn btn-square btn-sm" onClick={handleDeny}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <p>Cookies are essential for the application to work. If you do not accept you can not proceed. Please click here to accept cookies.</p>
                <div className="flex justify-center">
                    <button onClick={handleAccept} className="btn btn-md btn-primary">Accept</button>
                </div>
            </div>
        </div>
    )}
</div>
    )
}

export default Cookies