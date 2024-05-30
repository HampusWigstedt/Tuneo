'use client';
import React from 'react'

const Playlists = () => {

    return (
        <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mt-8 mb-8 underline">Our Personal Choice</h1>
            <p className='text-xl sm:text-2xl font-bold text-center mt-8 mb-2'>These Are Our Favorite Playlists</p>
            <p className='text-lg sm:text-xl font-bold text-center mb-8'>Feel Free To Flip Through Them Or Even Add Them To Your Own Library</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 card card-side bg-base-300 shadow-xl m-4">
                    <div className="card-body">
                        <h2 className="card-title underline">TenTens</h2>
                        <p>My ten most insteresting song as of now</p>
                        <div className="justify-end">
                            <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/playlist/6kjjdPE3oL2O24hu9BFAqJ`} width="100%" height="400" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 card card-side bg-base-300 shadow-xl m-4">
                    <div className="card-body">
                        <h2 className="card-title underline">Songs that deserve more</h2>
                        <p>Unknown songs</p>
                        <div className="justify-end">
                            <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/playlist/4H9KEfRiT4qUWmzFIDT8Sn`} width="100%" height="400" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="col-span-1 card card-side bg-base-300 shadow-xl mt-8 m-4">
                    <div className="card-body">
                        <h2 className="card-title underline">That&#39;s a Rap</h2>
                        <p>Our best Rap picks</p>
                        <div className="justify-end">
                            <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/playlist/1nFJ2YVgMqz4ByJTECQSb7`} width="100%" height="400" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 card card-side bg-base-300 shadow-xl mt-8 m-4">
                    <div className="card-body">
                        <h2 className="card-title underline">Indie Classics</h2>
                        <p>Indie pop/rock</p>
                        <div className="justify-end">
                            <iframe className='rounded-2xl shadow-lg border-0 mt-6' src={`https://open.spotify.com/embed/playlist/1VmG6a3Yn6KiEgzX28k47O`} width="100%" height="400" allow="encrypted-media"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Playlists
