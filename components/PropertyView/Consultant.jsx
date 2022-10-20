import React from 'react'
import Image from 'next/image'
import { IconPhone, IconDeviceTablet, IconMail, IconWorld, IconPhoneCall } from '@tabler/icons'
import PrimaryButton from '../PrimaryButton'

// in individual property there are sub collapsable sections for each details
// this is th consultant's data section data

export default function Consultant() {
    return (
        <>
            <div className="bg-white rounded-default p-2 pc:mt-0 mt-4">
                <div>
                    <div className="mb-4"><span className='font-bold'>Consultant</span></div>
                    <div>
                        {/* Consultant */}
                        <div className="grid tablet:grid-cols-2 grid-cols-1 gap-2">
                            {/* Left side */}
                            {/* avatar */}
                            <div>
                                <Image src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" placeholder="blur" blurDataURL="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" width={500} height={500} className="rounded-default" objectFit="cover" alt="avatar" />
                            </div>
                            {/* Right side */}
                            <div className="flex flex-col">
                                {/* name */}
                                <div className="text-xl font-bold">John Doe</div>
                                {/* profession */}
                                <div className="text-base text-black/50">Civil engineer</div>
                                <div className="mt-4 flex flex-col space-y-2 tablet:text-sm">
                                    {/* landphone */}
                                    <div className="flex space-x-2"><IconPhone className="text-primary bg-primary/20 p-1 rounded-full" />
                                        <span className='text-black/50 font-bold'> 0755845621</span>
                                    </div>
                                    {/* cellular */}
                                    <div className="flex space-x-2"><IconDeviceTablet className="text-primary bg-primary/20 p-1 rounded-full" />
                                        <span className='text-black/50 font-bold'> 0755845621</span>
                                    </div>
                                    {/* email */}
                                    <div className="flex space-x-2"><IconMail className="text-primary bg-primary/20 p-1 rounded-full" />
                                        <span className='text-black/50 font-bold'> exapmp-le@mail.com</span>
                                    </div>
                                    {/* website */}
                                    <div className="flex space-x-2"><IconWorld className="text-primary bg-primary/20 p-1 rounded-full" />
                                        <span className='text-black/50 font-bold'> website.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Contact me button */}
                        <div className="flex pc:justify-end justify-start pc:mt-0 mt-2">
                            <PrimaryButton>
                                <IconPhoneCall /><span>Contact me</span>
                            </PrimaryButton>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
