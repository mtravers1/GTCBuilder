import { useState } from 'react';
import { Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone';

// top main carouesl images section of the add proprty stepper

export default function ImagesStep() {
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
        // Main gallery images (max 5 images)
        <div className="flex flex-col space-y-4">
            <label className="text-sm">Main gallery images (Max 5 images)</label>
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
    );
}