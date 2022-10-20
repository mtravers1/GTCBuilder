import { Input, Text, Image, SimpleGrid } from '@mantine/core';
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { useState } from "react";

// asset section of the add proprty stepper like images and videos

export default function AssetsStep() {

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


        <>
            <div className="flex flex-col space-y-4">
                {/* Video link */}
                <div>
                    <Input.Wrapper label="Video link" required>
                        <Input placeholder="www.youtube.com/" />
                    </Input.Wrapper>
                </div>
                {/* Video Cover image */}
                <div>
                    <div>
                        <label className="text-sm">Video cover image</label>
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

                {/* Google map location link */}
                <div>
                    <Input.Wrapper label="Google map location link" required>
                        <Input placeholder="maps.google.com/" />
                    </Input.Wrapper>
                </div>
                
                {/* Matterport link */}
                <div>
                    <Input.Wrapper label="Virtual tour (matterport link)" required>
                        <Input placeholder="maps.matterport.com/" />
                    </Input.Wrapper>
                </div>
            </div>
        </>
    );
}