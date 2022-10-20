import React, { useState } from 'react'
import { IconUser, IconPlus, IconLock, IconShieldLock } from "@tabler/icons"
import PrimaryButton from "../PrimaryButton"
import { Menu } from "@mantine/core"
import Image from "next/image"
import Link from "next/link"
import { routes } from '../../constants/Routes'

// right secttion of the navbar

export default function RightSection() {


    // Is user authenticated or not?
    const [isAuth, setIsAuth] = useState(true)


    return (
        <>
            {/* Add listing */}
            <div>
                <PrimaryButton link={routes.addProperty}>
                    <div><IconPlus size={20} /></div><span>Add property</span>
                </PrimaryButton>
            </div>

            {/* Auth user or guest user condition */}
            {isAuth ?
                <div>
                    {/* Auth user */}
                    {/* Profile menu with avatar */}
                    <Menu position="left-start" width={200} shadow="lg">
                        <Menu.Target>
                            <div className="cursor-pointer flex items-center">
                                <Image
                                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
                                    width={40}
                                    height={40}
                                    objectFit="cover"
                                    className="rounded-full"
                                    alt="avatar"
                                />
                            </div>
                        </Menu.Target>

                        <Menu.Dropdown>
                            <Menu.Label>Settings</Menu.Label>
                            <Menu.Item icon={<IconUser size={14} />}><Link href={routes.profile + "/123"}><a>Profile</a></Link></Menu.Item>
                            <Menu.Divider />
                            <Menu.Item icon={<IconLock size={14} />}>Log out</Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
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
        </>
    )
}
