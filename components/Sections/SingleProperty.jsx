import React from 'react'
import Image from 'next/image'
import { IconChevronRight } from '@tabler/icons';
import { Fade } from 'react-awesome-reveal';
import { routes } from '../../constants/Routes';
import PrimaryButton from '../PrimaryButton';

// in home page there are four sections 
// this is the selected single property section

export default function SingleProperty({ data }) {

    const property = data[0]
    return (
        <>
            <div>
                {/* Images */}
                <div className="grid grid-cols-1 laptop:grid-cols-2 gap-2 ">
                    <div className="laptop:col-span-2 col-span-1 relative">
                        {/* Cover image */}
                        <Fade cascade triggerOnce>
                            <Image
                                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                placeholder="blur"
                                blurDataURL="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                width="1920px"
                                height="540px"
                                objectFit="cover"
                                className="rounded-default"
                                alt="cover image"
                            />
                        </Fade>

                        {/* Overlay details card */}
                        <div className="laptop:absolute bg-white p-2 rounded-default tablet:-right-2 -top-2 shadow-lg overflow-hidden z-10 ">
                            <div className="flex flex-col space-y-2">
                                <div className="font-bold text-lg">{property.title}</div>
                                <div className="text-2xl font-bold text-primary">${property.price.toLocaleString()}</div>
                                <div className="text-sm font-bold">Balcony</div>
                                <div className="text-sm font-bold">Kitchen</div>
                                <div className="text-sm font-bold">Basement</div>
                                {/* Link to the property view page */}
                                <PrimaryButton link={routes.property + "123"}>
                                    <span>View property</span> <IconChevronRight />
                                </PrimaryButton>
                            </div>
                            <div className="flex space-x-2 text-sm font-bold mt-2 text-primary">
                                <div>Rent</div>
                                <div>Negotiable</div>
                                <div>Immediate</div>
                            </div>
                        </div>
                    </div>
                    {/* 4 images grid */}
                    <div className='flex tablet:flex-row flex-col justify-center space-x-0 tablet:space-x-2 w-full'>
                        <Fade cascade direction="right" triggerOnce>
                            {property.images.slice(0, 5).map((img, index) =>
                                <div key={index}>
                                    <Image
                                        src={img}
                                        placeholder="blur"
                                        blurDataURL={img}
                                        width={500}
                                        height={500}
                                        objectFit="cover"
                                        className="rounded-default"
                                        alt="images asset" />
                                </div>
                            )}
                        </Fade>
                    </div>
                </div>
            </div>
        </>
    )
}
