'use client'
import React, { useState, useEffect } from 'react' // Importing necessary dependencies
import axios from 'axios' // Axios for making HTTP requests
import Cookies from 'js-cookie' // js-cookie for handling cookies

// Define an interface for the track object
interface Track {
    id: string
    name: string
    artists: { id: string; name: string }[]
    image: { height: number; width: number; url: string }
    external_urls: { spotify: string }
}

const Search = () => {
    // State variables for managing the search query, search results, loading state, selected track, user authentication status, and track recommendations
    const [query, setQuery] = useState('')
    const [searchResults, setSearchResults] = useState<Track[]>([])
    const [isLoading, setIsLoading] = useState(false)
    const [recommendations, setRecommendations] = useState<Track[]>([])
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    // Function to check if the user is authenticated by looking for an 'access_token' cookie
    const checkAuthentication = () => {
        const cookieInititated = Cookies.get('access_token')
        if (cookieInititated) {
            setIsLoggedIn(true)
        } else {
            setIsLoggedIn(false)
        }
    }

    // useEffect hook to call checkAuthentication when the component mounts
    useEffect(() => {
        checkAuthentication()
    }, [])

    // Function to handle the selection of a track. This function makes an API call to Spotify's recommendations endpoint to get track recommendations based on the selected track
    const handleTrackSelection = async (track: Track) => {
        setIsLoading(true)
        setSelectedTrack(track)

        const accessToken = Cookies.get('access_token')

        try {
            const response = await axios.get('https://api.spotify.com/v1/recommendations', {
                params: {
                    seed_tracks: track.id,
                    limit: 12, // Adjust the limit as needed
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            })

            // Extract necessary data and set recommendations
            const recommendations: Track[] = response.data.tracks.map((track: any) => ({
                id: track.id,
                name: track.name,
                artists: track.artists.map((artist: any) => ({ id: artist.id, name: artist.name })),
                image: track.album.images[0], // Get the first image from the album
                external_urls: track.external_urls // Get the external_urls object
            }))

            // Set the recommendations state
            setRecommendations(recommendations)

        } catch (error) {
            Cookies.remove('access_token')
            window.location.href = '/'
            console.error('Error getting recommendations:', error)
        } finally {
            setIsLoading(false) // Set loading to false after the API call
        }

    }

    // useEffect hook to search for tracks whenever the search query changes. This function makes an API call to Spotify's search endpoint
    useEffect(() => {
        const searchTracks = async () => {
            setIsLoading(true)
            const accessToken = Cookies.get('access_token')

            try {
                const response = await axios.get('https://api.spotify.com/v1/search', {
                    params: {
                        q: query,
                        type: 'track',
                        limit: 10 // Adjust the limit as needed
                    },
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                })

                // Extract necessary data and set search results
                const tracks: Track[] = response.data.tracks.items.map((track: any) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist: any) => ({ id: artist.id, name: artist.name })),
                    image: track.album.images[0], // Get the first image from the album
                    external_urls: track.external_urls // Get the external_urls object
                }))
                setSearchResults(tracks)
            } catch (error) {
                console.error('Error searching tracks:', error)
            } finally {
                setIsLoading(false) // Set loading to false after the API call
            }
        }

        if (query !== '') {
            searchTracks()
        }
    }, [query])

    // Function to handle the search form submission. This function checks if the search query contains code-like patterns and alerts the user if it does. Otherwise, it sets the search query state which triggers the search
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const query = e.currentTarget.query.value

        // Regular expression to match code-like patterns
        const codePattern = /<[^>]*>|{[^}]*}|function\s*\(|console\.log\(|import\s+|export\s+/;

        if (codePattern.test(query)) {
            alert('Code input is not allowed.')
        } else {
            // Trigger the API call when the user submits the search query
            setSearchResults([]) // Clear previous search results
            setQuery(query)
        }
    }

    // If the component is in a loading state, return a loading message
    if (isLoading) {
        return (
            <div className='text-center p-6 md:p-12 lg:p-24 xl:p-96'>
                <h1 className="mb-4 text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">Data is <span className="text-green-600 dark:text-green-500">Loading</span></h1>
                <p className="text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-normal text-gray-500 dark:text-gray-400">Stay put. This could take a few secounds.</p>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    }

    // Render the search form, search results, selected track, and track recommendations
    return (
        <div className="p-4 ">
            {!isLoggedIn ? (
                <div>
                    <div className='text-center p-4 sm:p-24 md:p-48 lg:p-96'>
                        <h1 className="mb-4 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white">
                            Please <span className="text-green-600 dark:text-green-500">Log In</span>
                        </h1>
                        <p className="text-sm sm:text-md md:text-lg lg:text-xl dark:text-gray-400">
                            You need to log in to use this feature
                        </p>
                    </div>
                </div>
            ) : (
                <div>
                    <div className='text-center text-4xl font-bold p-10'>
                        <h1 className='p-4'>Search for a song</h1>
                        <form onSubmit={handleSearch}>
                            <div className="tooltip md:tooltip-open lg:tooltip-left sm:tooltip-closed md:tooltip-top" data-tip="First search for a Track or Artist here">                                <input type="text" name="query" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <button type="submit" className="p-4">Search</button>
                        </form>
                    </div>
                    <div className="dropdown mt-2 text-center w-full top-full text-4xl font-bold p-6 flex justify-center">
                        <div className="relative">
                            {searchResults.length > 0 && (
                                <div className="tooltip tooltip-open" data-tip="Now click here to select a song">
                                    <div tabIndex={0} role="button" className="btn btn-lg m-1 w-96">Select a track</div>
                                </div>
                            )}
                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box mt-2 w-96">
                                {searchResults.map(track => (
                                    <li key={track.id}>
                                        <a onClick={() => handleTrackSelection(track)}>{track.name} - {track.artists.map(artist => artist.name).join(', ')}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div>
                        {/* Selected track display */}
                        <div className="hero min-h-[150px] bg-base-200 p-2 md:p-10 mb-8 rounded-lg overflow-auto">

                            {selectedTrack && (
                                <div className="flex flex-col md:flex-row items-center space-x-4 justify-center my-6">
                                    <img src={selectedTrack.image?.url} className="max-w-xs rounded-lg shadow-2xl" alt={selectedTrack.name} />
                                    <div>
                                        <h2 className="md:text-2xl text-lg font-bold underline text-violet-600">You Selected</h2>
                                        <h1 className="md:text-2xl text-lg font-bold">{selectedTrack.name}</h1>
                                        <p className="py-2">{selectedTrack.artists.map(artist => artist.name).join(', ')}</p>
                                        <a href={selectedTrack.external_urls?.spotify} target="_blank" rel="noopener noreferrer" className="btn text-white border-none bg-violet-900 btn-primary">View on Spotify</a>
                                        <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/track/${selectedTrack.id}`} width="300" height="80" allow="encrypted-media"></iframe>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className='flex justify-center items-center'>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 py-6">
                                {recommendations.map((track, index) => (
                                    <div key={track.id} className="card w-full sm:w-96 bg-neutral">
                                        <figure className='p-6'>
                                            <img className="object-cover p-2 rounded-3xl w-full h-full" src={track.image?.url} alt={track.name} />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title line-clamp-1">
                                                {index + 1}. {track.name}
                                            </h2>
                                            <h4 className="card-side line-clamp-1">
                                                {track.artists.map(artist => artist.name).join(', ')}
                                            </h4>
                                            <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/track/${track.id}`} width="300" height="80" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Search
