import React from 'react'
import { Select, Divider } from '@mantine/core'
import { IconMapPin } from '@tabler/icons'

// in view all property page top filer componet has three tabs
// this is the location tab component

export default function LocationFilterTab() {
    return (
        <>
            <div className="bg-white rounded-default p-5 shadow-lg pc:w-auto w-full">
                {/* Filters */}
                <div className="flex pc:flex-row flex-col pc:space-x-4 pc:space-y-0 space-y-2">
                    {/* Country filter */}
                    <div className="flex space-x-2">
                        <div>
                            <IconMapPin className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="Country"
                                placeholder="Apartments"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: 'Apartments' },
                                    { value: '2', label: 'Houses' },
                                    { value: '3', label: 'Cottages' },
                                ]}
                            />
                        </div>
                    </div>
                    <Divider orientation="vertical" />
                    {/* City */}
                    <div className="flex space-x-2">
                        <div>
                            <IconMapPin className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="City"
                                placeholder="Apartments"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: 'Apartments' },
                                    { value: '2', label: 'Houses' },
                                    { value: '3', label: 'Cottages' },
                                ]}
                            />
                        </div>
                    </div>
                    <Divider orientation="vertical" />
                    {/* State */}
                    <div className="flex space-x-2">
                        <div>
                            <IconMapPin className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="State"
                                placeholder="Apartments"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: 'Apartments' },
                                    { value: '2', label: 'Houses' },
                                    { value: '3', label: 'Cottages' },
                                ]}
                            />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
