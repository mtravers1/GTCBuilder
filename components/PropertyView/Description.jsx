import React from 'react'
import { Accordion } from '@mantine/core'
import { IconExternalLink } from '@tabler/icons'

// in individual property there are sub collapsable sections for each details
// this is th description of the property section data

export default function Description() {
    return (
        <>
            <Accordion variant="default" defaultValue="default" className="bg-white rounded-default">
                <Accordion.Item value="default">
                    <Accordion.Control><span className='font-bold'>Description</span></Accordion.Control>
                    <Accordion.Panel>
                        <div className="flex flex-col justify-between pc:text-base tablet:text-base text-sm">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur sapiente beatae odio iste ab. Inventore voluptates at fugit, voluptatibus rerum tempore officiis nesciunt voluptate, reiciendis, corrupti itaque. Maxime, ullam a!
                            </p>
                            <div className="font-bold mt-4">Documents</div>
                            <div className="flex flex-col">
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='flex space-x-2'><IconExternalLink className="text-primary "/> <span> Legal info</span></a>
                                <a href="http://" target="_blank" rel="noopener noreferrer" className='flex space-x-2'><IconExternalLink className="text-primary "/> <span> Residense info</span></a>
                            </div>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
