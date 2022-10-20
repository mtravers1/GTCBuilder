import { useState } from 'react';
import { Text, Image, SimpleGrid, NumberInput,Input } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

// about the consultant details section of the add proprty stepper

export default function ConsultantStep() {
    const [files, setFiles] = useState([]); // hold the file data ina react state

    // Image preview component
    const previews = files.map((file, index) => {
        const imageUrl = URL.createObjectURL(file);
        return (
            <Image
                key={index}
                src={imageUrl}
                imageProps={{ onLoad: () => URL.revokeObjectURL(imageUrl) }}
                alt="preview image"
            />
        );
    });

    return (
        <div className="flex flex-col space-y-4">
            {/*Consultant profile picture */}
            <div>
                <div className="text-sm">Consultant profile picure</div>
                <div>
                    {/* Image drop zone */}
                    <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} maxFiles={5}>
                        <Text align="center">Drop images here</Text>
                    </Dropzone>

                    {/* Preview grid */}
                    <SimpleGrid
                        cols={4}
                        breakpoints={[{ maxWidth: 'sm', cols: 1 }]}
                        mt={previews.length > 0 ? 'xl' : 0}
                    >
                        {/* Imgae preview */}
                        {previews}
                    </SimpleGrid>
                </div>
            </div>

            <div>
                <div className="grid gap-2 grid-cols-2">
                    {/* Phone */}
                    <div>
                        <Input.Wrapper label="Phone number" required>
                            <NumberInput placeholder="+91---------" />
                        </Input.Wrapper>
                    </div>
                    {/* Mobile */}
                    <div>
                        <Input.Wrapper label="Mobile number" required>
                            <NumberInput placeholder="+91---------" />
                        </Input.Wrapper>
                    </div>
                    {/* Email */}
                    <div>
                        <Input.Wrapper label="Email" required>
                            <Input placeholder="+91---------" />
                        </Input.Wrapper>
                    </div>
                    {/* Website */}
                    <div>
                        <Input.Wrapper label="Website" required>
                            <Input placeholder="www.example.com" />
                        </Input.Wrapper>
                    </div>
                </div>
            </div>

        </div>
    );
}