import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { IconBed, IconBath } from '@tabler/icons';
import { Badge } from '@mantine/core';
import { routes } from '../constants/Routes';

// individual property card like display in home page grid

export default function PropertyCard({ data }) {

    return (
        <>
            <Link href={routes.property + data.slug}>
                <a>
                    <div className="bg-white rounded-default hover:shadow-lg duration-300 flex flex-col items-center text-left group">
                        <div className="relative">
                            {/* Cover image */}
                            <Image src={data.images[0]}
                                placeholder="blur"
                                blurDataURL={data.images[0]}
                                width={500}
                                height={300}
                                objectFit="cover"
                                className="rounded-t-default group-hover:scale-110 duration-300"
                                alt="properties images"
                            />
                            {/* Assets availability indicator */}
                            <div className="absolute p-1 top-0 left-0 flex flex-col text-left text-white">
                                {/* Images */}
                                <div><Image src="/icons/image.svg" width={20} height={20} alt="icon" /></div>
                                {/* Video */}
                                <div><Image src="/icons/video.svg" width={20} height={20} alt="icon" /></div>
                                {/* Map */}
                                <div><Image src="/icons/map.svg" width={20} height={20} alt="icon" /></div>
                                {/* 3d visualization */}
                                <div><Image src="/icons/3d.svg" width={20} height={20} alt="icon" /></div>
                            </div>



                            {/* Price */}
                            <div className="absolute top-1 right-1">
                                <div className="bg-white text-primary font-bold px-4 text-lg rounded-default">
                                    $ {data.price.toLocaleString()}
                                </div>
                            </div>
                        </div>
                        <div className="p-2">
                            {/* Preview images */}
                            <div className="flex flex-row justify-center items-center space-x-2">
                                {/* Take from second image (bcz 1st taken to cover image) */}
                                {data.images.slice(1, 5).map((img, index) =>
                                    <div key={index}>
                                        <Image src={img} placeholder="blur" blurDataURL={img} width={100} height={100} objectFit="cover" className="rounded-default" alt="properties images" />
                                    </div>
                                )}
                            </div>

                            {/* Title */}
                            <div className="font-bold text-gray-800 text-left">
                                {data.title}
                            </div>
                            {/* Type */}
                            <div className="font-bold text-black/60 text-left text-sm">
                                {data.type}
                            </div>
                            {/* Location */}
                            <div className="font-bold text-black/50 text-left text-sm mb-4">
                                {data.location}
                            </div>
                            <div className='flex items-center justify-between'>
                                {/* Bedrooms */}
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <IconBed className="text-primary" />
                                    </div>
                                    <div>
                                        <span className='font-bold text-primary'>Beds</span>
                                    </div>
                                    <div>
                                        <span className='font-bold text-primary'>{data.bedrooms}</span>
                                    </div>
                                </div>

                                {/* Bathrooms */}
                                <div className="flex items-center space-x-2">
                                    <div>
                                        <IconBath className="text-primary" />
                                    </div>
                                    <div>
                                        <span className='font-bold text-primary'>Bathrooms</span>
                                    </div>
                                    <div>
                                        <span className='font-bold text-primary'>{data.bathrooms}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Badges */}
                            <div className="flex items-center space-x-2 mt-4">
                                {/* tags array */}
                                {data.tags.map((tag, index) =>
                                    <Badge key={index} variant="filled" className="bg-primary text-white">{tag}</Badge>
                                )}
                            </div>
                        </div>
                    </div>
                </a>
            </Link>
        </>
    )
}
