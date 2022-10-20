import React from 'react'
import { Select, Divider } from '@mantine/core'
import { IconCategory } from '@tabler/icons'

// in view all property page top filer componet has three tabs
// this is the Type filter tab component


export default function TypeFilterTab() {

    // Price range marks
   
    return (
        <>
            <div className="bg-white rounded-default p-5 shadow-lg pc:w-auto w-full">
                {/* Filters */}
                <div className="flex pc:flex-row flex-col pc:space-x-4 pc:space-y-0 space-y-2">
                    {/* Type */}
                    <div className="flex space-x-2">
                        <div>
                            <IconCategory className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="Type"
                                placeholder="Apartment"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: 'Apartment' },
                                    { value: '2', label: 'Cottage' },
                                    { value: '3', label: 'House' },
                                ]}
                            />
                        </div>
                    </div>
                    <Divider orientation="vertical" />
                    
                    {/* Rooms */}
                    <div className="flex space-x-2">
                        <div>
                            <IconCategory className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="Rooms"
                                placeholder="2"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                ]}
                            />
                        </div>
                    </div>
                    <Divider orientation="vertical" />
                    
                    {/* Floors */}
                    <div className="flex space-x-2">
                        <div>
                            <IconCategory className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="Floors"
                                placeholder="2"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: '1' },
                                    { value: '2', label: '2' },
                                    { value: '3', label: '3' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
