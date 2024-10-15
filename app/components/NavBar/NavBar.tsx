'use client'
import React from 'react'
import Link from 'next/link'
import CheckLoggedIn from './isLoggedIn'
import { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-base-300 shadow-lg p-6 my-2 rounded-full relative z-20 max-w-8xl mt-4 mx-auto">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                    <div className="hidden md:flex gap-4">
                        <Link href="/topArtists">
                            <span className="btn bg-violet-900 text-lg md:text-xl hover:btn-neutral">Top Artists</span>
                        </Link>
                        <Link href="/topTracks">
                            <span className="btn bg-violet-900 text-lg md:text-xl hover:btn-neutral">Top Tracks</span>
                        </Link>
                        <Link href="/findNewMusic">
                            <span className="btn bg-violet-900 text-lg md:text-xl hover:btn-neutral">Find New Music</span>
                        </Link>
                        <Link href="/ourPersonalChoice">
                            <span className="btn bg-violet-900 text-lg md:text-xl hover:btn-neutral">Our Music Curation</span>
                        </Link>
                        <Link href="/blog">
                            <span className="btn bg-violet-900 text-lg md:text-xl hover:btn-neutral">Blog</span>
                        </Link>
                    </div>
                    <div className="relative md:hidden">
                        <button onClick={toggleMenu} className="btn bg-violet-900 text-sm md:text-lg lg:text-xl hover:btn-neutral border-black border-2 dropdown-toggle">Menu</button>
                        {isOpen && (
                            <ul className="menu dropdown-content z-[1] p-2 shadow bg-primary rounded-box w-52 mt-4 absolute">
                                <li>
                                    <Link href="/topArtists">
                                        <span>Top Artists</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/topTracks">
                                        <span>Top Tracks</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/findNewMusic">
                                        <span>Find New Music</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/ourPersonalChoice">
                                        <span>Our Music Curation</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog">
                                        <span>Blog</span>
                                    </Link>
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
                <div className="flex items-center gap-6 px-4">
                    <CheckLoggedIn />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
