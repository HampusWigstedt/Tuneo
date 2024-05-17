'use client';
import React from 'react';
import Link from 'next/link';
import CheckLoggedIn from './isLoggedIn';
import Icon from './icon'


const NavBar = () => {


    return (
        <nav>
            <div className="navbar bg-primary text-primary-content">
                <div className="flex-1 gap-3">
                    <Icon />
                    <div className="hidden md:flex gap-2">
                        <Link href="/topArtists" className="btn btn-primary text-xl hover:btn-neutral border-black border-2">Top Artists</Link>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Link href="/topTracks" className="btn btn-primary text-xl hover:btn-neutral border-black border-2">Top Tracks</Link>
                    </div>
                    <div className="hidden md:flex gap-2">
                        <Link href="/findNewMusic" className="btn btn-primary text-xl hover:btn-neutral border-black border-2">Find New Music</Link>
                    </div>
                </div>

                <div className="flex-none gap-2">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-accent text-xl hover:btn-neutral border-black border-2">Our Music Curation</div>
                        <ul tabIndex={0} className="menu dropdown-content z-[1] p-2 shadow bg-primary rounded-box w-52 mt-4">
                            <li><Link href="/ourPersonalChoice">Find New Music</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    
                    <CheckLoggedIn />
                </div>
            </div>
        </nav >
    );
};

export default NavBar;
