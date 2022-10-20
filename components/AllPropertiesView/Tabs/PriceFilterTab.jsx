import React from 'react'
import { Select, Divider, RangeSlider } from '@mantine/core'
import { IconCash } from '@tabler/icons'


// in view all property page top filer componet has three tabs
// this is the price filter tab component

export default function PriceFilterTab() {

    // Price range marks
    const marks = [
        { value: 0, label: '0' },
        { value: 500, label: '500' },
        { value: 1000, label: '1000' },
    ];
    return (
        <>
            <div className="bg-white rounded-default p-5 shadow-lg pc:w-auto w-full">
                {/* Filters */}
                <div className="flex pc:flex-row flex-col pc:space-x-4 pc:space-y-0 space-y-2">
                    {/* Currrency type filter */}
                    <div className="flex space-x-2">
                        <div>
                            <IconCash className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="Currency"
                                placeholder="Dollar"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: 'Dollars' },
                                    { value: '2', label: 'Euros' },
                                    { value: '3', label: 'Pounds' },
                                ]}
                            />
                        </div>
                    </div>
                    {/* Currrency level filter */}
                    <div className="flex space-x-2">
                        <div>
                            <IconCash className="text-primary" />
                        </div>
                        <div className="pc:w-auto w-full">
                            <Select
                                styles={{
                                    label: { fontWeight: "bold" }
                                }}
                                radius="sm"
                                label="Currency level"
                                placeholder="$"
                                transition="pop"
                                transitionDuration={200}
                                transitionTimingFunction="ease"
                                data={[
                                    { value: '1', label: '$' },
                                    { value: '2', label: '$$' },
                                    { value: '3', label: '$$$' },
                                    { value: '4', label: '$$$$' },
                                ]}
                            />
                        </div>
                    </div>
                    <Divider orientation="vertical" />
                    {/* Price range filter */}
                    <div className="flex space-x-2">
                        <div>
                            <IconCash className="text-primary" />
                            Range
                        </div>
                        <div className=" w-full">
                            <RangeSlider className="w-52 border-primary" thumbSize={14} mt="xl" min={0} max={1000} marks={marks} />
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
