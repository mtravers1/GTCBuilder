import React from 'react'
import PlainCard from '../PlainCard'
import Image from 'next/image'
import { Fade } from 'react-awesome-reveal'

// in home page there are four sections 
// this is the top user review section

export default function TopReviewsSection({data}) {
    return (
        <>
            <section>
                <div className="grid pc:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-4">
                    {/* Populate reviws here */}
                    {data.map((review, index) =>
                        <Fade cascade triggerOnce key={index}>
                            <div>
                                <PlainCard>
                                    {/* Avatar */}
                                    <Image src={review.avatar} placeholder="blur" blurDataURL={review.avatar} width={100} height={100} objectFit="cover" className="rounded-full" alt="avatar"/>
                                    {/* Name */}
                                    <div className="text-lg font-bold mt-2">{review.name}</div>
                                    {/* Profession */}
                                    <div className="text-sm italic">{review.profession}</div>
                                    {/* Review */}
                                    <p className="text-sm font-bold text-black/50 text-center line-clamp-3">{review.description}
                                    </p>
                                    {/* Rating */}
                                    <div className="flex flex-row space-x-2 mt-4">
                                        {Array(5).fill(0).map((_, index) =>
                                            <i className="text-primary" key={index}> <Image src="/icons/star.svg" width={20} height={20} alt="Star icon" /></i>
                                        )}
                                    </div>
                                </PlainCard>
                            </div>
                        </Fade>
                    )}
                </div>
            </section>
        </>
    )
}
