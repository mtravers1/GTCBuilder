import React from 'react'
import Link from 'next/link'
import { IconChevronRight } from '@tabler/icons'

// individual sections main title with view all link

export default function Headtitle({ title, link, isLinked }) {
    return (
        <>
            <div className="my-4 flex items-center justify-between">
                <h1 className="tablet:text-4xl pc:text-2xl text-xl font-bold text-primary ">{title}</h1>
                {isLinked ?
                    <Link href={link}>
                        <div className="flex font-bold cursor-pointer">View all<IconChevronRight /></div>
                    </Link>
                    :
                    null
                }
            </div>
        </>
    )
}
