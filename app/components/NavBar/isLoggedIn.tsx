// isLoggedIn.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import LogoutButton from './LogoutButton';
import LoginButton from './LoginButton';

const CheckLoggedIn = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userImage, setUserImage] = useState('');

    const checkAuthentication = async () => {
        const accessToken = Cookies.get('access_token');
        if (accessToken) {
            setIsLoggedIn(true);
            try {
                const response = await axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                setUserImage(response.data.images[0].url);
            } catch (error) {
                console.error('Error fetching user profile:', error);
            }
        } else {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkAuthentication();
    }, []);

    return (
        isLoggedIn ? (
            <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-20 rounded-full">
                        <img alt="User Avatar" src={userImage} />
                    </div>
                </div>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-primary rounded-box w-52">
                    <li><LogoutButton /></li>
                </ul>
            </div>
        ) : (
            <div className="btn btn-primary text-xl hover:btn-neutral border-black border-2 ml-auto">
                <LoginButton />
            </div>
        )
    );
};

export default CheckLoggedIn;
