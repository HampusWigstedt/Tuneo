'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

// Define an interface for the track object
interface Track {
    id: string;
    name: string;
    artists: { id: string; name: string }[];
    image: { height: number; width: number; url: string };
    external_urls: { spotify: string };
}

const Search = () => {
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState<Track[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [recommendations, setRecommendations] = useState<Track[]>([]);


    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const checkAuthentication = () => {
        const cookieInititated = Cookies.get('access_token');
        if (cookieInititated) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    };

    useEffect(() => {
        checkAuthentication();
    }, []);

    const handleTrackSelection = async (track: Track) => {
        setIsLoading(true);
        setSelectedTrack(track);

        const accessToken = Cookies.get('access_token');

        try {
            const response = await axios.get('https://api.spotify.com/v1/recommendations', {
                params: {
                    seed_tracks: track.id,
                    limit: 12, // Adjust the limit as needed
                },
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });

            // Extract necessary data and set recommendations
            const recommendations: Track[] = response.data.tracks.map((track: any) => ({
                id: track.id,
                name: track.name,
                artists: track.artists.map((artist: any) => ({ id: artist.id, name: artist.name })),
                image: track.album.images[0], // Get the first image from the album
                external_urls: track.external_urls // Get the external_urls object
            }));

            // Set the recommendations state
            setRecommendations(recommendations);

        } catch (error) {
            console.error('Error getting recommendations:', error);
        } finally {
            setIsLoading(false); // Set loading to false after the API call
        }

    };

    useEffect(() => {
        const searchTracks = async () => {
            setIsLoading(true);
            const accessToken = Cookies.get('access_token');

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
                });

                // Extract necessary data and set search results
                const tracks: Track[] = response.data.tracks.items.map((track: any) => ({
                    id: track.id,
                    name: track.name,
                    artists: track.artists.map((artist: any) => ({ id: artist.id, name: artist.name })),
                    image: track.album.images[0], // Get the first image from the album
                    external_urls: track.external_urls // Get the external_urls object
                }));
                setSearchResults(tracks);
            } catch (error) {
                console.error('Error searching tracks:', error);
            } finally {
                setIsLoading(false); // Set loading to false after the API call
            }
        };

        if (query !== '') {
            searchTracks();
        }
    }, [query]);

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const query = e.currentTarget.query.value;

        // Regular expression to match code-like patterns
        const codePattern = /<[^>]*>|{[^}]*}|function\s*\(|console\.log\(|import\s+|export\s+/;

        if (codePattern.test(query)) {
            alert('Code input is not allowed.');
        } else {
            // Trigger the API call when the user submits the search query
            setSearchResults([]); // Clear previous search results
            setQuery(query);
        }
    };


    if (isLoading) {
        return (
            <div className='text-center p-96'><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Data is <span className="text-green-600 dark:text-green-500">Loading</span></h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Stay put. This could take a few secounds.</p>
                <span className="loading loading-infinity loading-lg"></span>
            </div>
        )
    }

    return (
        <div className="p-4 ">
            {!isLoggedIn ? (
                <div>
                    <div className='text-center p-96'><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please <span className="text-green-600 dark:text-green-500">Log In</span></h1><p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You need to log in to use this feature</p></div>
                </div>
            ) : (
                <div>
                    <div className='text-center text-4xl font-bold p-6'>
                        <h1 className='p-4'>Search for a song</h1>
                        <form onSubmit={handleSearch}>
                            <input type="text" name="query" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                            <button type="submit" className="p-4">Search</button>
                        </form>
                    </div>
                    <div className="dropdown mt-2 text-center w-full top-full text-4xl font-bold p-6 flex justify-center">
                        <div className="relative">
                            {searchResults.length > 0 && (
                                <div className="tooltip tooltip-open" data-tip="Select a track here">
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
                        <div className="hero min-h-[200px] bg-base-200 p-10 mb-8 rounded-lg">
                            <div className="hero-content flex-col lg:flex-row">
                                {selectedTrack && (
                                    <div className="flex items-center space-x-4 justify-center my-6">
                                        <img src={selectedTrack.image?.url} className="max-w-xs rounded-lg shadow-2xl" alt={selectedTrack.name} />
                                        <div>
                                            <h2 className="text-2xl font-bold underline text-emerald-900">You Selected</h2>
                                            <h1 className="text-2xl font-bold">{selectedTrack.name}</h1>
                                            <p className="py-2">{selectedTrack.artists.map(artist => artist.name).join(', ')}</p>
                                            <a href={selectedTrack.external_urls?.spotify} target="_blank" rel="noopener noreferrer" className="btn btn-primary">View on Spotify</a>
                                            <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/track/${selectedTrack.id}`} width="300" height="80" allow="encrypted-media"></iframe>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-9 mx-20 pb-14">
                            {recommendations.map((track, index) => (
                                <div key={track.id} className="card w-96 bg-neutral">
                                    <figure className='pt-4'>
                                        <img className="object-cover p-2 rounded-3xl w-[320px] h-[320px]" src={track.image?.url} alt={track.name} />
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
            )}
        </div>
    );
};

export default Search;
