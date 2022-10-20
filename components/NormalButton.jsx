import React from 'react'

// this is the normal (no link) button component

export default function NormalButton({ children ,...buttonProps}) {
    return (
        <>
            <button {...buttonProps} 
                className={`px-4 py-2 bg-primary hover:bg-primary/90 rounded-default  text-white font-bold flex items-center justify-center space-x-2 cursor-pointer hover:shadow-sm hover:shadow-primary/50 duration-300`}>
                {children}
            </button>
        </>
    )
}
