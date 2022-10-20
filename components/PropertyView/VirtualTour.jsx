import React from 'react'
import { Accordion } from '@mantine/core'

// in individual property there are sub collapsable sections for each details
// this is the 3D virtual tour section data

export default function VirtualTour() {
    return (
        <>
            <Accordion variant="default" defaultValue="default" className="bg-white rounded-default">
                <Accordion.Item value="default">
                    <Accordion.Control><span className='font-bold'>Virtual tour</span></Accordion.Control>
                    <Accordion.Panel>
                        {/* Matterport link */}
                        <div>
                            <iframe width="100%" height="480" src="https://matterport.com/discover/space/b5dWTbBPZ5n" frameBorder="0" allowFullScreen allow="xr-spatial-tracking"></iframe>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
