import React from 'react'

// just a white background card component like used in categories litle card

export default function PlainCard({ children }) {
    return (
        <>
            <div className="flex flex-col h-full w-full justify-center items-center rounded-default relative text-black bg-white p-2">
                {children}
            </div>
        </>
    )
}
