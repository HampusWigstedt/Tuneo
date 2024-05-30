"use client"
import React from "react"
import { useEffect } from "react"
import axios from "axios"
import qs from "qs"
import Cookies from 'js-cookie'

// The CallbackPage component is responsible for handling the OAuth callback from Spotify.
const CallbackPage = () => {

  // useEffect hook is used to perform the token exchange when the component mounts.
  useEffect(() => {
    console.log("CallbackPage rendered")
    // Ensure this code runs only on the client-side
    if (typeof window !== "undefined") {
      // Extract code from URL parameters
      const params = new URLSearchParams(window.location.search)
      const code = params.get("code")

      if (code) {
        // Prepare the headers
        const clientId = process.env.NEXT_PUBLIC_OWNER_SPOTIFY_CLIENT_ID
        const clientSecret = process.env.NEXT_PUBLIC_SPOTIFY_CLIENT_SECRET
        const authToken = Buffer.from(`${clientId}:${clientSecret}`, 'utf-8').toString('base64')
        // Prepare the body parameters
        const data = qs.stringify({
          code: code,
          redirect_uri: 'http://localhost:3000/callback',
          grant_type: 'authorization_code'
        })

        // Perform token exchange
        axios.post("https://accounts.spotify.com/api/token", data, {
          headers: {
            'Authorization': `Basic ${authToken}`,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then((response) => {
            const accessToken = response.data.access_token
            // Store access token securely (e.g., in localStorage)
            Cookies.set('access_token', accessToken, { path: '/' })
            // Redirect user to the main page or any other desired page
            setTimeout(() => {
              window.location.href = '/'
            }, 3000)
          })
          .catch((error) => {
            // Handle error
            console.error("Token exchange error:", error)
            // Redirect user to an error page or home page
          })
      } else {
        // Handle error: Authorization code not found
        console.error("Authorization code not found in URL parameters")
      }
    }
  }, [])

  // The component renders a loading screen while the token exchange is being performed.
  return <div className='text-center p-6 md:p-12 lg:p-24 xl:p-96'><h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">We are <span className="text-green-600 dark:text-green-500">Logging you in.</span></h1>
    <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-gray-500 dark:text-gray-400">Stay put. This could take a few secounds.</p>
    <span className="loading loading-infinity loading-lg"></span>
  </div>
}

export default CallbackPage
