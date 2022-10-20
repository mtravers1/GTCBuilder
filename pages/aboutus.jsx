import React from 'react'
import Image from 'next/image'
import { Container } from "@mantine/core"
import { basicsInfoConstants } from '../constants/Basics'
import { AboutUsData } from '../dummy_data/aboutusdata'

// about us page 
// route: /aboutus

export default function aboutus({ aboutus }) {
    return (
        <>
            <Container size="xl" className="mt-24">
                <div className='flex flex-col justify-center items-center relative'>
                    {/* Cover Image */}
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            placeholder="blur"
                            blurDataURL="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                            width={1920}
                            height={800}
                            className="rounded-default brightness-[0.2]"
                            objectFit="cover"
                            alt="cover image"
                        />
                    </div>
                    {/* Titles */}
                    <div className="absolute flex flex-col justify-center items-center space-y-2">
                        {/* Title */}
                        <div className="text-white text-xl">
                            {aboutus.title}
                        </div>
                        {/* Brand name */}
                        <div className="text-white text-4xl font-bold">
                            {basicsInfoConstants.name}
                        </div>
                    </div>

                </div>

                {/* Story */}
                <div className="bg-white rounded-default p-2 mt-2">
                    <p className="text-black/80 font-bold">
                        {aboutus.story}
                    </p>
                </div>
            </Container>
        </>
    )
}



// static Data fetching function from API
export async function getStaticProps() {
    const aboutus = AboutUsData //pull dummy about us data
    return {
        props: { aboutus }, // will be passed to the page component as props
    }
}