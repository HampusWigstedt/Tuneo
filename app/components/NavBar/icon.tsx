import React from 'react';
import Link from 'next/link';

const Icon = () => {
    return (
        <Link href="/">
                <button className="">
                <img src="/favicon.ico" alt="Icon" />
                </button>
        </Link>
    )
}

export default Icon;