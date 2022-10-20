import React from 'react'
import Link from 'next/link'

// button with link compoents

export default function PrimaryButton({ children, link, type }) {
    return (
        <>
            <Link href={link == null ? "#" : link}>
                <button type="button"
                    className={`px-4 py-2 bg-primary hover:bg-primary/90 rounded-default whitespace-nowrap text-white tablet:text-base text-sm font-bold flex items-center justify-center space-x-2 cursor-pointer hover:shadow-sm hover:shadow-primary/50 duration-300`}>
                    {children}
                </button>
            </Link>

        </>
    )
}
