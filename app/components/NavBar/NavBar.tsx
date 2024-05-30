'use client'
import React from 'react'
import Link from 'next/link'
import CheckLoggedIn from './isLoggedIn'
import Icon from './icon'
import { useState } from 'react'

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1 gap-3">
                    <Icon />
                    <div className="relative md:hidden">
                        <button onClick={toggleMenu} className="btn btn-primary text-lg md:text-xl lg:text-2xl hover:btn-neutral border-black border-2 dropdown-toggle">Menu</button>
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
                    <div className="hidden md:flex gap-2">
                        <Link href="/topArtists">
                            <span className="btn btn-primary text-lg md:text-xl hover:btn-neutral border-black border-2">Top Artists</span>
                        </Link>
                        <Link href="/topTracks">
                            <span className="btn btn-primary text-lg md:text-xl hover:btn-neutral border-black border-2">Top Tracks</span>
                        </Link>
                        <Link href="/findNewMusic">
                            <span className="btn btn-primary text-lg md:text-xl hover:btn-neutral border-black border-2">Find New Music</span>
                        </Link>
                    </div>
                </div>

                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end hidden md:block">
                        <div tabIndex={0} role="button" className="btn btn-accent text-lg md:text-xl hover:btn-neutral border-black border-2">Our Music Curation</div>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-primary rounded-box w-52 mt-4">
                            <li><Link href="/ourPersonalChoice"><span>Find New Music</span></Link></li>
                            <li><Link href="/blog"><span>Blog</span></Link></li>
                        </ul>
                    </div>
                    <CheckLoggedIn />
                </div>
            </div>
        </nav >
    );
};

export default NavBar;
