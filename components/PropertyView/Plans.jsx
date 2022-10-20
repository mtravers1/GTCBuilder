import React from 'react'
import Image from 'next/image'
import { Accordion, Tabs } from '@mantine/core'

// in individual property there are sub collapsable sections for each details
// this is the Plans section data

export default function Plans() {
    return (
        <>
            <Accordion variant="default" defaultValue="default" className="bg-white rounded-default">
                <Accordion.Item value="default">
                    {/* Accordian title */}
                    <Accordion.Control><span className='font-bold'>Plans</span></Accordion.Control>
                    {/* Accordian content */}
                    <Accordion.Panel>
                        {/* Plans tab section */}
                        <Tabs variant="outline" defaultValue="plana">

                            {/* Tab title */}
                            <Tabs.List>
                                <Tabs.Tab value="plana">Plan A</Tabs.Tab>
                                <Tabs.Tab value="planb">Plan B</Tabs.Tab>
                            </Tabs.List>

                            {/* Tab content */}
                            <Tabs.Panel value="plana" pt="xs">
                                <Image
                                    src="https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    placeholder="blur"
                                    blurDataURL="https://images.unsplash.com/photo-1573868396123-ef72a7f7b94f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    width={1920}
                                    height={1080}
                                    alt="plan image"
                                />
                            </Tabs.Panel>

                            <Tabs.Panel value="planb" pt="xs">
                                <Image
                                    src="https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    placeholder="blur"
                                    blurDataURL="https://images.unsplash.com/photo-1573867607131-872f83689352?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                                    width={1920}
                                    height={1080}
                                    alt="plan image"
                                />
                            </Tabs.Panel>
                        </Tabs>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
