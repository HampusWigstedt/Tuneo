'use client'
import React from 'react'
import { useEffect, useState } from "react"

const Cookies = () => {
    const [showAlert, setShowAlert] = useState(false)

    useEffect(() => {
        if (!document.cookie.split(';').some((item) => item.trim().startsWith('cookieConsent='))) {
            setShowAlert(true)
        }
    }, [])

    const handleAcknowledge = () => {
        document.cookie = 'cookieConsent=true; expires=' + new Date(new Date().getTime() + 365 * 24 * 60 * 60 * 1000).toUTCString()
        setShowAlert(false)
    }

    return (
        <div>
            {showAlert && (
                <div className="card w-auto bg-base-content text-2xl underline shadow-xl my-6 text-black">
                    <div className="card-body text-center">
                        <p>We use essential cookies on our site. We only use these cookies for the application to operate accordingly.</p>
                        <div className="flex justify-center">
                            <button onClick={handleAcknowledge} className="btn btn-md btn-primary">Acknowledge</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cookies
