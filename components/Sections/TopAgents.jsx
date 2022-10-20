import React from 'react'
import PlainCard from '../PlainCard'
import Image from 'next/image'
import PrimaryButton from '../PrimaryButton'
import { Fade } from "react-awesome-reveal";
import { IconBrandFacebook, IconBrandTwitter, IconBrandLinkedin, IconPhone, IconMail } from '@tabler/icons'
import { routes } from '../../constants/Routes';

// in home page there are four sections 
// this is the top selected agents/consultants section

export default function TopAgentsSection({ data }) {
    return (
        <>
            <section>
                <div className="grid pc:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-4">
                    {data.map((agent, index) =>
                        <Fade cascade triggerOnce key={index}>
                            <PlainCard>
                                {/* Avatar */}
                                <Image src={agent.avatar} placeholder="blur" blurDataURL={agent.avatar} width={100} height={100} objectFit="cover" className="rounded-full" alt="avatar" />
                                {/* Name */}
                                <div className="text-lg font-bold mt-2">{agent.name}</div>
                                {/* Profession */}
                                <div className="text-sm italic">{agent.profession}</div>
                                {/* Review */}
                                <p className="text-sm font-bold text-black/50 text-center line-clamp-3">
                                    {agent.description}
                                </p>
                                {/* Social links */}
                                <div className="flex flex-row space-x-2 mt-4">
                                    {/* Facebook */}
                                    <a href={agent.social[0].facebook} target="_blank" rel="noopener noreferrer"><div className='bg-primary/20 p-1 cursor-pointer rounded-default duration-300 hover:bg-primary/10'><IconBrandFacebook className="text-primary" /></div>
                                    </a>

                                    {/* Twitter */}
                                    <a href={agent.social[0].twitter} target="_blank" rel="noopener noreferrer"><div className='bg-primary/20 p-1 cursor-pointer rounded-default duration-300 hover:bg-primary/10'><IconBrandTwitter className="text-primary" /></div>
                                    </a>

                                    {/* LinkedIn */}
                                    <a href={agent.social[0].linkedin} target="_blank" rel="noopener noreferrer"><div className='bg-primary/20 p-1 cursor-pointer rounded-default duration-300 hover:bg-primary/10'><IconBrandLinkedin className="text-primary" /></div>
                                    </a>

                                    {/* Email */}
                                    <a href={"mailto:" + agent.social[0].email} target="_blank" rel="noopener noreferrer"><div className='bg-primary/20 p-1 cursor-pointer rounded-default duration-300 hover:bg-primary/10'><IconMail className="text-primary" /></div>
                                    </a>

                                    {/* Phone */}
                                    <a href={"tel:" + agent.social[0].phone} target="_blank" rel="noopener noreferrer"><div className='bg-primary/20 p-1 cursor-pointer rounded-default duration-300 hover:bg-primary/10'><IconPhone className="text-primary" /></div>
                                    </a>
                                </div>
                                {/* Profile view button */}
                                <div className="mt-2">
                                    {/* replace index with prifile unique id for dynamic route */}
                                    <PrimaryButton link={routes.profile + index}>
                                        View profile
                                    </PrimaryButton>
                                </div>
                            </PlainCard>
                        </Fade>
                    )}
                </div>
            </section>
        </>
    )
}
