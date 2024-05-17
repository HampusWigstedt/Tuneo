"use client";
import React from "react";
import { useEffect } from "react";
import { redirect } from "next/navigation";
import axios from "axios";
import { json } from "stream/consumers";
import qs from "qs";
import Cookies from 'js-cookie';


const CallbackPage = () => {

  useEffect(() => {
    console.log("CallbackPage rendered");
    // Ensure this code runs only on the client-side
    if (typeof window !== "undefined") {
      // Extract code from URL parameters
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
        // Prepare the body parameters
        // const data = {
        //   code: code,
        //   redirect_uri: 'http://localhost:3000/callback',
        //   grant_type: 'authorization_code'
        // };

        // Prepare the headers
        const clientId = process.env.NEXT_PUBLIC_OWNER_SPOTIFY_CLIENT_ID; // Replace with your client ID
        const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET; // Replace with your client secret
        const authToken = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64');
        const data = qs.stringify({
          code: code,
          redirect_uri: 'https://tuneo.site/callback',
          grant_type: 'authorization_code'
        });

        // Perform token exchange
        axios.post("https://accounts.spotify.com/api/token", data, {
          headers: {
            'Authorization': `Basic ${authToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then((response) => {
            const accessToken = response.data.access_token;
            // Store access token securely (e.g., in localStorage)
            Cookies.set('access_token', accessToken, { path: '/' });
            // Redirect user to the main page or any other desired page
            setTimeout(() => {
              window.location.href = '/';
            }, 3000);
          })
          .catch((error) => {
            // Handle error
            console.error("Token exchange error:", error);
            // Redirect user to an error page or home page
          });
      } else {
        // Handle error: Authorization code not found
        console.error("Authorization code not found in URL parameters");
      }
    }
  }, []);
  return <div className='text-center p-96'><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We are <span className="text-green-600 dark:text-green-500">Logging you in.</span></h1>
    <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Stay put. This could take a few secounds.</p>
    <span className="loading loading-infinity loading-lg"></span>
  </div>
};

export default CallbackPage;
