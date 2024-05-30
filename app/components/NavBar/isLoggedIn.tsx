import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

// The CheckLoggedIn component is responsible for checking if the user is logged in.
const CheckLoggedIn = () => {
    // isLoggedIn state determines whether the user is logged in.
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    // userImage state stores the URL of the user's profile picture.
    const [userImage, setUserImage] = useState('')

    // checkAuthentication function checks if the access_token cookie exists and fetches the user's profile picture.
    const checkAuthentication = async () => {
        const accessToken = Cookies.get('access_token')
        if (accessToken) {
            setIsLoggedIn(true)
            try {
                // Fetch the user's profile picture.
                const response = await axios.get('https://api.spotify.com/v1/me', {
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });
                setUserImage(response.data.images[0].url);
            } catch (error) {
                console.error('Error fetching user profile:', error)
            }
        } else {
            setIsLoggedIn(false)
        }
    };

    // useEffect hook calls the checkAuthentication function when the component mounts.
    useEffect(() => {
        checkAuthentication()
    }, []);

    // The component renders a dropdown menu with the user's profile picture and a logout button if the user is logged in.
    // If the user is not logged in, it renders a login button.
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
