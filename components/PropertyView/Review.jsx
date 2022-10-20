import React from 'react'
import Image from 'next/image'
import { Accordion, Input, Spoiler } from '@mantine/core'
import { IconSend, IconMailForward } from '@tabler/icons'
import NormalButton from '../NormalButton'

// in individual property there are sub collapsable sections for each details
// this is the review section data

export default function Review() {
    return (
        <>
            <Accordion variant="default" defaultValue="default" className="bg-white rounded-default ">
                <Accordion.Item value="default">
                    <Accordion.Control><span className='font-bold'>Review</span></Accordion.Control>
                    <Accordion.Panel>
                        {/* Add your review */}
                        <div className="mb-4">
                            <ComposeCard />
                        </div>
                        {/* Comments */}
                        <div className="my-4">
                            <CommentCard />
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </>
    )
}

// Review card

function CommentCard() {
    return (
        <>
            <div className="flex pc:flex-row flex-col space-x-2 my-4">
                {/* Avatar */}
                <div className="basis-auto">
                    <Image src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                        className="rounded-default"
                        placeholder="blur" blurDataURL="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" width={100} height={100} alt="user image" />
                </div>
                {/* Review */}
                <div className="basis-full">
                    {/* Single review */}
                    <div>
                        {/* User */}
                        <div className="mb-1">
                            <div className="font-bold">John doe</div>
                            <div className="font-bold text-black/50">Architecture</div>
                            <div className="font-bold text-black/50 italic text-sm">08/22/2022</div>
                        </div>
                        {/* Review text */}
                        <Spoiler maxHeight={50} showLabel="Show more" hideLabel="Hide" className="pc:text-base text-sm font-bold text-black/60">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat eveniet vitae dicta officiis rem tenetur consequatur id ut, cum itaque vero qui sequi distinctio facilis! Vitae a repellat vero?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla placeat eveniet vitae dicta officiis rem tenetur consequatur id ut, cum itaque vero qui sequi distinctio facilis! Vitae a repellat vero?
                        </Spoiler>

                    </div>
                </div>
            </div>
        </>
    )
}

// Post your review card
function ComposeCard() {
    return (
        <>
            <div className="flex flex-col w-full space-y-2 items-center">
                {/* Input box */}
                <div className=" w-full">
                    <Input icon={<IconSend />} placeholder="Your review" />
                </div>
                <div className="flex justify-end w-full">
                    <NormalButton type={"button"}>
                        <span>Post</span><IconMailForward />
                    </NormalButton>
                </div>
            </div>
        </>
    )
}