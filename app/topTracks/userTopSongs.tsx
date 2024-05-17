'use client';
import React, { use, useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';


interface Image {
    url: string;
    height: number;
    width: number;
}

interface Album {
    id: string;
    images: Image[];
    name: string;
    external_urls: {
        spotify: string;
    };
}

interface Artist {
    name: string;
}

interface Song {
    id: string;
    name: string;
    album: Album;
    artists: Artist[];
    external_urls: {
        spotify: string;
    };
}

interface SpotifyResponse {
    items: Song[];
}

const UserTopSongs = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

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

    const [topSongs, setTopSongs] = useState<Song[]>([]);
    const [timeRange, setTimeRange] = useState('medium_term');

    const changeTimeRange = (newTimeRange: string) => {
        setTimeRange(newTimeRange);
    };

    useEffect(() => {
        const getTopSongs = async () => {
            setIsLoading(true);
            const accessToken = Cookies.get('access_token');

            try {
                const response = await axios.get<SpotifyResponse>("https://api.spotify.com/v1/me/top/tracks", {
                    params: {
                        time_range: timeRange,
                        limit: 40,
                        offset: 0,
                    },
                    headers: {
                        'Authorization': `Bearer ${accessToken}`,
                    },
                });

                setTopSongs(response.data.items);
            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.error(error.response?.data);
                } else {
                    console.error(error);
                }
            } finally {
                setIsLoading(false); // Set loading to false after the API call
            }
        };

        getTopSongs();
    }, [timeRange]);

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
            {isLoggedIn ? (
                <div>
                    <h1 className="text-center text-4xl font-bold underline">Your Top 40 Tracks</h1>
                    <div className="flex justify-center items-center space-x-4 pt-4 pb-8">
                        <button className={`btn ${timeRange === 'short_term' ? 'btn-active' : 'btn-neutral'}`} onClick={() => changeTimeRange('short_term')}>Last 4 Weeks</button>
                        <button className={`btn ${timeRange === 'medium_term' ? 'btn-active' : 'btn-neutral'}`} onClick={() => changeTimeRange('medium_term')}>Last 6 Months</button>
                        <button className={`btn ${timeRange === 'long_term' ? 'btn-active' : 'btn-neutral'}`} onClick={() => changeTimeRange('long_term')}>This Year</button>
                    </div>
                    <div className="grid grid-cols-4 gap-9 py-6">
                        {topSongs.map((Song, index) => (
                            <div key={Song.id} className="card w-96 bg-neutral">
                                <figure className='pt-4'>
                                    <img className="object-cover p-2 rounded-3xl w-[320px] h-[320px]" src={Song.album.images[1].url} alt={Song.name} />
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
            ) : (
                <div>
                    <div className='text-center p-96'><h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Please <span className="text-green-600 dark:text-green-500">Log In</span></h1><p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">You need to log in to see your top Tracks</p></div>
                </div>
            )}
        </div>
    );
};

export default UserTopSongs;
