import React from 'react'
import Image from 'next/image'
import { Container } from "@mantine/core"
import ListedSection from '../../components/Profile/ListedSection'
import MyBookmarkSection from '../../components/Profile/MyBookmarkSection'
import { UserData } from '../../dummy_data/userData'
import Review from '../../components/PropertyView/Review'
import {
    IconDoor,
    IconBrandFacebook,
    IconBrandTwitter,
    IconBrandLinkedin,
    IconBrandPinterest,
    IconDeviceDesktop,
    IconPhone,
    IconMail,

} from "@tabler/icons"

// individual profile page of the user/agent/consultant
// [id] - mean the dynamic route pass the user's id or slug param with Next.js Link component 
// route: /profile/123

export default function Index({ userdata }) {
    return (
        <>
            <Container size="xl" className="mt-24">
                <div className="flex laptop:flex-row flex-col space-x-2">
                    {/* Left section */}
                    <div className="basis-1/3 flex flex-col space-y-2">
                        {/* Avatar */}
                        <div className="laptop:m-0 m-auto">
                            <Image
                                src={userdata.avatar}
                                placeholder="blur"
                                blurDataURL={userdata.avatar}
                                width={400}
                                height={400}
                                objectFit="cover"
                                className="rounded-default"
                                alt="avatar image"
                            />
                        </div>
                        {/* Personal details */}
                        <div className='bg-white p-2'>
                            {/* Name */}
                            <div className="text-2xl font-bold">{userdata.name}</div>
                            {/* Profession */}
                            <div className="text-lg opacity-80">{userdata.profession}</div>
                            {/* About me */}
                            <p className="text-sm opacity-80">{userdata.aboutme}</p>
                            {/* Ratings */}
                            <div className="flex space-x-2">
                                {Array(userdata.ratings).fill(0).map((_, index) =>
                                    <i key={index}><Image src="/icons/star.svg" width={20} height={20} alt="star icon" /></i>
                                )}
                            </div>
                        </div>
                        {/* Social links */}
                        <div className="flex flex-col bg-white rounded-default p-2">
                            <div className="tablet:text-2xl font-bold">Social</div>
                            {/* Address */}
                            <div className="flex items-center  space-x-1 text-black/80">
                                <i><IconDoor className="text-primary" /></i> <span>{userdata.address}</span>
                            </div>
                            {/* Facebook */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconBrandFacebook className="text-primary" /></i> <span>{userdata.facebook}</span>
                            </div>
                            {/* Twitter */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconBrandTwitter className="text-primary" /></i> <span>{userdata.twitter}</span>
                            </div>
                            {/* LinkedIn */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconBrandLinkedin className="text-primary" /></i> <span>{userdata.linkedin}</span>
                            </div>
                            {/* Pinterest */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconBrandPinterest className="text-primary" /></i> <span>{userdata.pinterest}</span>
                            </div>
                            {/* Website */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconDeviceDesktop className="text-primary" /></i> <span>{userdata.website}</span>
                            </div>
                            {/* Phone */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconPhone className="text-primary" /></i> <span>{userdata.phone}</span>
                            </div>
                            {/* Email */}
                            <div className="flex items-center hover:underline cursor-pointer space-x-1 text-black/80">
                                <i><IconMail className="text-primary" /></i> <span>{userdata.email}</span>
                            </div>
                        </div>

                    </div>
                    {/* Right section */}
                    <div className="basis-full flex flex-col laptop:mt-0 mt-2 space-y-2">
                        <div>
                            <MyBookmarkSection />
                        </div>
                        <div>
                            <ListedSection />
                        </div>
                        <div>
                            <Review />
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

// static Data fetching function from API
export async function getServerSideProps() {
    const userdata = UserData //pull dummy user data
    return {
        props: { userdata }, // will be passed to the page component as props
    }
}