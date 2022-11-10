import { Input, Text, Image, SimpleGrid } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";
import { useState } from "react";

// asset section of the add proprty stepper like images and videos

export default function AssetsStep({ body, setBody, setFiles, files }) {
  // hold the file data ina react state

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
          <Input.Wrapper label="Video link">
            <Input
              placeholder="www.youtube.com/"
              value={body?.videoLink}
              onChange={(event) =>
                setBody({
                  ...body,
                  videoLink: event.target.value,
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Video Cover image */}
        <div>
          <div>
            <label className="text-sm">Video cover image</label>
            {/* Image drop zone */}
            <Dropzone accept={IMAGE_MIME_TYPE} onDrop={setFiles} maxFiles={1}>
              <Text align="center">Drop image here</Text>
            </Dropzone>

            {/* Preview grid */}
            <SimpleGrid
              cols={4}
              breakpoints={[{ maxWidth: "sm", cols: 1 }]}
              mt={previews.length > 0 ? "xl" : 0}
            >
              {/* Imgae preview */}
              {previews}
            </SimpleGrid>
          </div>
        </div>

        {/* Google map location link */}
        <div>
          <Input.Wrapper label="Google map location link">
            <Input
              placeholder="maps.google.com/"
              value={body?.googleMapLocation}
              onChange={(event) =>
                setBody({
                  ...body,
                  googleMapLocation: event.target.value,
                })
              }
            />
          </Input.Wrapper>
        </div>

        {/* Matterport link */}
        <div>
          <Input.Wrapper label="Virtual tour (matterport link)">
            <Input
              placeholder="maps.matterport.com/"
              value={body?.virtualTourLink}
              onChange={(event) =>
                setBody({
                  ...body,
                  virtualTourLink: event.target.value,
                })
              }
            />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}
