import { Input,Select } from '@mantine/core';
import {useState} from 'react'

// details section of the add proprty stepper

export default function DetailsStep() {
    const [title, setTitle]=useState('')
    const [location, setLocation]=useState('')

    const handleSubmit = (e)=>{
        e.preventDefault;
        const houseinfo={title, location}
    }

    return (
        
    
        <>
            <div className="flex flex-col space-y-4">
                {/* Title */}
                <div>
                    <Input.Wrapper label="Title" required>
                        <Input placeholder="ABC Property" value={title} onChange={(e)=>setTitle(e.target.value)} />
                    </Input.Wrapper>
                </div>
                {/* Location */}
                <div>
                    <Input.Wrapper label="Location" required>
                        <Input placeholder="Gampaha, Sri Lanka" value={location} onChange={(e)=>setLocation(e.target.value)}/>
                    </Input.Wrapper>
                </div>
                {/* Price */}
                <div>
                    <Input.Wrapper label="Price" required>
                        <Input placeholder="$25,000" />
                    </Input.Wrapper>
                </div>

                {/* Badges or tags */}
                <div className="flex flex-row space-x-2 justify-between">
                    {/* Type */}
                    <Select
                        label="Type"
                        placeholder="Apartment"
                        data={[
                            { value: '1', label: 'Apartment' },
                            { value: '2', label: 'Cottage' },
                            { value: '3', label: 'House' },
                            { value: '4', label: 'Flat' },
                        ]}
                    />
                    {/* Selling method */}
                    <Select
                        label="Sell type"
                        placeholder="Rent"
                        data={[
                            { value: '1', label: 'Rent' },
                            { value: '2', label: 'Sale' },
                            { value: '3', label: 'Commercial' },
                        ]}
                    />
                    {/* Price type */}
                    <Select
                        label="Price type"
                        placeholder="Negotiable"
                        data={[
                            { value: '1', label: 'Negotiable' },
                            { value: '2', label: 'Fixed' },
                        ]}
                    />
                </div>
            </div>
        </>
    );
}