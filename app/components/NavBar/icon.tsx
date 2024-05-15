import React from 'react';
import Link from 'next/link';

const Icon = () => {
    return (
        <Link href="/">
                <button className="btn btn-circle btn-primary hover:btn-success border-black border-2">
                <svg fill="#000000" width="38px" height="38px" viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg" id="memory-music-note"><path d="M11 2H18V7H13V18H12V19H11V20H7V19H6V18H5V14H6V13H7V12H11V2M11 15H10V14H8V15H7V17H8V18H10V17H11V15Z" /></svg>
                </button>
        </Link>
    )
}

export default Icon;