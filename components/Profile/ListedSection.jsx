import React from 'react'
import PropertyCard from '../PropertyCard'
import { Accordion, Tabs } from '@mantine/core'
import { PropertiesData } from '../../dummy_data/propertiesData'

// in individual user's properties he/she listed section componet

export default function ListedSection() {
    return (
        <>
            <div>
                <Accordion variant="default" defaultValue="mylistings" className="bg-white rounded-default ">
                    <Accordion.Item value="mylistings">
                        {/* Title */}
                        <Accordion.Control className="font-bold"><span className='font-bold'>My listings</span></Accordion.Control>
                        <Accordion.Panel>
                            <Tabs variant="outline" defaultValue="Houses">
                                {/* Tabs */}
                                <Tabs.List>
                                    <Tabs.Tab value="Houses">Houses</Tabs.Tab>
                                    <Tabs.Tab value="Apartments">Apartments</Tabs.Tab>
                                    <Tabs.Tab value="Cottages">Cottages</Tabs.Tab>
                                </Tabs.List>

                                {/* Tab content */}
                                {/* Houses */}
                                <Tabs.Panel value="Houses" pt="xs">
                                    <div className="grid pc:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-2">
                                        {PropertiesData.slice(0, 3).map((prop, index) =>
                                            <div key={index}>
                                                <PropertyCard data={prop} />
                                            </div>
                                        )}
                                    </div>
                                </Tabs.Panel>
                                {/* Apartments */}
                                <Tabs.Panel value="Apartments" pt="xs">
                                    <div className="grid pc:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-2">
                                        {PropertiesData.slice(0, 1).map((prop, index) =>
                                            <div key={index}>
                                                <PropertyCard data={prop} />
                                            </div>
                                        )}
                                    </div>
                                </Tabs.Panel>

                                {/* Cottages */}
                                <Tabs.Panel value="Cottages" pt="xs">
                                    <div className="grid pc:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-2">
                                        {PropertiesData.slice(0, 4).map((prop, index) =>
                                            <div key={index}>
                                                <PropertyCard data={prop} />
                                            </div>
                                        )}
                                    </div>
                                </Tabs.Panel>
                            </Tabs>
                        </Accordion.Panel>
                    </Accordion.Item>
                </Accordion>
            </div>
        </>
    )
}
