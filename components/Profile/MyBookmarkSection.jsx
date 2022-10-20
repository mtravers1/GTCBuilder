import React from 'react'
import PropertyCard from '../PropertyCard'
import { Accordion } from '@mantine/core'
import { PropertiesData } from '../../dummy_data/propertiesData'
import NormalButton from '../NormalButton'

// Users bookmarked properties used zustand state management system to store global data

export default function MyBookmarkSection() {
    return (
        <>
            <div>
                <Accordion variant="default" defaultValue="mylistings" className="bg-white rounded-default ">
                    <Accordion.Item value="mylistings">
                        {/* Title */}
                        <Accordion.Control className="font-bold"><span className='font-bold'>My Bookmarks</span></Accordion.Control>
                        <Accordion.Panel>
                            {/* Top menu section */}
                            <div className='mb-2'>
                                <NormalButton>
                                    Delete bookmarks
                                </NormalButton>
                            </div>
                            <div className="grid grid-cols-3 gap-2">
                                {/* single property card */}
                                {PropertiesData.slice(0, 4).map((property, index) =>
                                    <div key={index}>
                                        <PropertyCard data={property} />
                                    </div>
                                )}
                            </div>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}
