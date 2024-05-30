import React from 'react'
import Link from 'next/link'

const Icon = () => {
    return (
        <Link href="/">
            <button className="w-10 h-10 md:w-12 md:h-12 lg:w-12 lg:h-12">
                <img className="w-full h-full" src="/favicon.ico" alt="Icon" />
            </button>
        </Link>
    )
}

export default Icon;
