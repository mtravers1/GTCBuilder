import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { basicsInfoConstants } from '../../constants/Basics'
import { routes } from '../../constants/Routes'


// left section of the navbar
export default function LeftSection() {
    return (
        <>
            <Link href={routes.home}>
                <div className="flex items-center space-x-1">
                    <Image src="/images/logo.svg" className="rounded-default" width={20} height={20} alt="Logo" />
                    <h1 className="font-bold tablet:text-2xl text-lg cursor-pointer">{basicsInfoConstants.name}</h1>
                </div>
            </Link>
        </>
    )
}
