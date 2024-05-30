'use client'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

// Define the structure of the Image object
interface Image {
    url: string;
    height: number;
    width: number;
}

// Define the structure of the Album object
interface Album {
    id: string;
    images: Image[];
    name: string;
    external_urls: {
        spotify: string;
    };
}

// Define the structure of the Artist object
interface Artist {
    name: string;
}

// Define the structure of the Song object
interface Song {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];
    external_urls: {
        spotify: string;
    };
}

// Define the structure of the Spotify API response
interface SpotifyResponse {
    items: Song[];
}

// Define the UserTopSongs component
const UserTopSongs = () => {

    // Define state variables
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    // Method to check if the user is authenticated
    const checkAuthentication = () => {
        const cookieInititated = Cookies.get('access_token')
        if (cookieInititated) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }

    // Use useEffect to check authentication when the component mounts
    useEffect(() => {
        checkAuthentication()
    }, [])

    // Define state variables for the top songs and the time range
    const [topSongs, setTopSongs] = useState<Song[]>([])
    const [timeRange, setTimeRange] = useState('medium_term')

    // Method to change the time range
    const changeTimeRange = (newTimeRange: string) => {
        setTimeRange(newTimeRange)
    }

    // Use useEffect to fetch the top songs when the time range changes
    useEffect(() => {
        const getTopSongs = async () => {
            setIsLoading(true) // Set loading to true before the API call
            const accessToken = Cookies.get('access_token')

            try {
                // Make the API call
                const response = await axios.get<SpotifyResponse>("https://api.spotify.com/v1/me/top/tracks", {
                    params: {
                        time_range: timeRange,
                        limit: 40,
                        offset: 0,
                    },
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                })

                // Set the top songs state variable with the response data
                setTopSongs(response.data.items)
            } catch (error) {
                // Handle any errors
                if (axios.isAxiosError(error)) {
                    Cookies.remove('access_token')
                    console.error(error.response?.data)
                } else {
                    Cookies.remove('access_token')
                    console.error(error)
                }
            } finally {
                setIsLoading(false) // Set loading to false after the API call
            }
        }

        getTopSongs()
    }, [timeRange])

    // Render a loading message while the data is being fetched
    if (isLoading) {
        return (
            <div className='text-center p-6 md:p-12 lg:p-24 xl:p-96'>
                <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Data is <span className="text-green-600 dark:text-green-500">Loading</span></h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-gray-500 dark:text-gray-400">Stay put. This could take a few secounds.</p>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    }

    return (

        <div className="p-4 ">
            {isLoggedIn ? (
                <div>
                    <h1 className="text-center text-4xl font-bold underline">Your Top 40 Tracks</h1>
                    <div className="flex justify-center items-center space-x-2 pt-4 pb-8">
                        <button className={`btn ${timeRange === 'short_term' ? 'btn-active' : 'btn-neutral'}`} onClick={() => changeTimeRange('short_term')}>Last 4 Weeks</button>
                        <button className={`btn ${timeRange === 'medium_term' ? 'btn-active' : 'btn-neutral'}`} onClick={() => changeTimeRange('medium_term')}>Last 6 Months</button>
                        <button className={`btn ${timeRange === 'long_term' ? 'btn-active' : 'btn-neutral'}`} onClick={() => changeTimeRange('long_term')}>This Year</button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 py-6">
                            {topSongs.map((Song, index) => (
                                <div key={Song.id} className="card w-full sm:w-96 bg-neutral">
                                    <figure className='p-6'>
                                        <img className="object-cover p-2 rounded-3xl w-full h-full" src={Song.album.images[1].url} alt={Song.name} />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title line-clamp-1">
                                            {index + 1}. {Song.name}
                                        </h2>
                                        <h4 className="card-side line-clamp-1">
                                            {Song.artists[0].name || 'Unknown'}
                                        </h4>
                                        <div className="card-actions justify-end">
                                            <a href={Song.external_urls.spotify} target="_blank" rel="noopener noreferrer">
                                                <div className="badge badge-outline">View on Spotify</div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='text-center p-96'><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please <span className="text-green-600 dark:text-green-500">Log In</span></h1><p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You need to log in to see your top Tracks</p></div>
                </div>
            )}
        </div>
    )
}

export default UserTopSongs
