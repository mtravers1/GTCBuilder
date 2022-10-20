import React from 'react'
import Left from './LeftSection'
import Center from './CenterSection'
import Right from './RightSection'
import Drawer from './DrawerSection'

// Main navbar index component with sub components with seperate sections

export default function Navbar() {

    return (
        <>
            <nav className="fixed top-0 bg-white shadow-lg px-2 py-4 flex tablet:flex-row justify-between items-center w-full z-20">
                {/* Left */}
                <div className="basis-1/3 flex justify-start items-center space-x-4">
                    <Left />
                </div>
                {/* Center */}
                <div className="laptop:flex hidden basis-1/3 justify-center items-center space-x-4">
                    <Center />
                </div>
                {/* Right */}
                <div className="laptop:flex hidden basis-1/3 justify-end items-center space-x-4 ">
                    <Right />
                </div>

                {/* Drawer (Tablet only)*/}
                <div className="flex justify-center items-center laptop:hidden">
                    <Drawer />
                </div>
            </nav>
        </>
    )
}
