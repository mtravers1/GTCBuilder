import React from 'react'
import PrimaryButton from '../PrimaryButton'
import { Accordion } from '@mantine/core'
import { IconMap } from '@tabler/icons'

// in individual property there are sub collapsable sections for each details
// this is th address section data

export default function Address() {
    return (
        <>
            <Accordion variant="default" defaultValue="default" className="bg-white rounded-default">
                <Accordion.Item value="default">
                    <Accordion.Control><span className='font-bold'>Address</span></Accordion.Control>
                    <Accordion.Panel>
                        {/* Basic informations */}
                        <div className="grid pc:grid-cols-3 tablet:grid-cols-2 grid-cols-1  pc:text-base text-sm">
                            <div><span className="font-bold">Sreet : </span>Ranmuthuuyana</div>
                            <div><span className="font-bold">City : </span>Gampaha</div>
                            <div><span className="font-bold">Area : </span>Gampaha</div>
                            <div><span className="font-bold">Province : </span>Western</div>
                            <div><span className="font-bold">Zip : </span>Western</div>
                            <div><span className="font-bold">Country : </span>Sri Lanka</div>
                        </div>
                        {/* Google map link */}
                        <div className="mt-2">
                            <PrimaryButton link={"https://goo.gl/maps/RCCTdrW3avD8NHSc8"}>
                                <IconMap /> <span> Locate</span>
                            </PrimaryButton>
                        </div>
                    </Accordion.Panel>
                </Accordion.Item>
            </Accordion>

        </>
    )
}
