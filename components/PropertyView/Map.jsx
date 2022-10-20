import React from 'react'
import { Accordion } from '@mantine/core'

// in individual property there are sub collapsable sections for each details
// this is the google map section data

export default function Map() {
    return (
        <>
            <Accordion variant="default" defaultValue="default" className="bg-white rounded-default">
                <Accordion.Item value="default">
                    <Accordion.Control><span className='font-bold'>Map</span></Accordion.Control>
                    <Accordion.Panel>
                        {/* Google map link */}
                        <div>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50661.327558193516!2d-122.19009438085918!3d37.4764681488933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fa6b1117280ff%3A0xebbf998e5df289ab!2sMenlo%20Park%2C%20CA%2C%20USA!5e0!3m2!1sen!2slk!4v1661187420709!5m2!1sen!2slk" width="100%" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
