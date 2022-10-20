import React, { useState } from 'react'
import { Drawer, Accordion } from '@mantine/core';
import { IconMenu2, IconPlus, IconShieldLock } from '@tabler/icons';
import Image from "next/image"
import Link from "next/link"
import { basicsInfoConstants } from '../../constants/Basics';
import PrimaryButton from '../PrimaryButton';
import { routes } from '../../constants/Routes';

// in mobile view use drawer fo space management with media query
// you can adjest media query from tailwind.config.js file on the root

export default function DrawerSection() {

    // drawer open close state
    const [opened, setOpened] = useState(false);
    const [isAuth, setIsAuth] = useState(false);


    return (
        <>
            {/* Drawer open button */}
            <div className=''>
                <button onClick={() => setOpened(true)}><IconMenu2 /></button>
            </div>

            {/* Drawer with content */}
            <Drawer
                opened={opened}
                onClose={() => setOpened(false)}
                overlayOpacity={0.55}
                overlayBlur={3}
            >
                {/* Drawer content */}
                <div className="flex flex-col justify-center items-center space-y-4">
                    {/* Title */}
                    <div className="text-2xl font-bold">{basicsInfoConstants.name}</div>

                    {/* Check weather user is auth or not */}
                    {isAuth ?
                        <div >
                            {/* Avatar */}
                            <Image
                                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                placeholder="blur"
                                blurDataURL="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                                width={80}
                                height={80}
                                className="rounded-full"
                                alt="avatar"
                            />
                        </div>
                        :
                        <div>
                            {/* Guest user */}
                            {/* Sign in button */}
                            <PrimaryButton link={routes.login}>
                                <div>
                                    <IconShieldLock />
                                </div>
                                <div>
                                    Sign In/Up
                                </div>
                            </PrimaryButton>
                        </div>
                    }



                    {/* Add listing */}
                    <div>
                        <PrimaryButton link={routes.addProperty}>
                            <div> <IconPlus size={20} /> </div> <span>Add property</span>
                        </PrimaryButton>
                    </div>
                    {/* Menu */}
                    <div className="w-full"><Menu /></div>
                </div>
            </Drawer>
        </>
    )
}

// Menu accordions
function Menu() {
    return (
        <>
            {/* About us */}
            <div className="ml-4">
                <Link href={routes.aboutUs}><a className='text-base font-bold text-left'>About Us</a></Link>
            </div>

            {/* Center menu */}
            <Accordion>

                {/* Settings */}
                <Accordion.Item value="Settings">
                    {/* Name */}
                    <Accordion.Control><div className="font-bold"> Settings</div></Accordion.Control>
                    {/* Links */}
                    <Accordion.Panel><Link href={routes.profile}><a>Profile</a></Link></Accordion.Panel>
                    <Accordion.Panel>Logout</Accordion.Panel>
                </Accordion.Item>

                {/* Categories */}
                <Accordion.Item value="Categories">
                    {/* Name */}
                    <Accordion.Control><div className="font-bold">Categories</div></Accordion.Control>
                    {/* Links */}
                    <Accordion.Panel><Link href={routes.allProperties}><a>Houses</a></Link></Accordion.Panel>
                    <Accordion.Panel><Link href={routes.allProperties}><a>Cottages</a></Link></Accordion.Panel>
                </Accordion.Item>

                {/* All */}
                <Accordion.Item value="all">
                    {/* Name */}
                    <Accordion.Control><div className="font-bold">All</div></Accordion.Control>
                    {/* Links */}
                    <Accordion.Panel><Link href={routes.allProperties}><a>Houses</a></Link></Accordion.Panel>
                    <Accordion.Panel><Link href={routes.allProperties}><a>Cottages</a></Link></Accordion.Panel>
                </Accordion.Item>

            </Accordion>
        </>
    )
}