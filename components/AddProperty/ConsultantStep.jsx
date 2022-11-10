import { useState } from "react";
import { Text, Image, SimpleGrid, NumberInput, Input } from "@mantine/core";
import { Dropzone, IMAGE_MIME_TYPE } from "@mantine/dropzone";

// about the consultant details section of the add proprty stepper

export default function ConsultantStep({ body, setBody, files, setFiles }) {
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
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
            mt={previews.length > 0 ? "xl" : 0}
          >
            {/* Imgae preview */}
            {previews}
          </SimpleGrid>
        </div>
      </div>

      <div>
        <div className="grid gap-2 grid-cols-2">
          {/* Full Name */}
          <div>
            <Input.Wrapper label="Full name" required>
              <Input
                placeholder="John Doe"
                value={body?.agent?.fullName}
                onChange={(e) =>
                  setBody({
                    ...body,
                    agent: { ...body.agent, fullName: e.target.value },
                  })
                }
              />
            </Input.Wrapper>
          </div>
          {/* Occupation */}
          <div>
            <Input.Wrapper label="Occupation" required>
              <Input
                placeholder="Realtor.."
                value={body?.agent?.occupation}
                onChange={(e) =>
                  setBody({
                    ...body,
                    agent: { ...body.agent, occupation: e.target.value },
                  })
                }
              />
            </Input.Wrapper>
          </div>
          {/* Mobile */}
          <div>
            <Input.Wrapper label="Mobile number" required>
              <NumberInput
                placeholder="+91---------"
                value={body?.agent?.mobile}
                onChange={(value) =>
                  setBody({ ...body, agent: { ...body.agent, mobile: value } })
                }
              />
            </Input.Wrapper>
          </div>
          {/* Phone */}
          <div>
            <Input.Wrapper label="Phone number">
              <NumberInput
                placeholder="+91---------"
                value={body?.agent?.phone}
                onChange={(value) =>
                  setBody({ ...body, agent: { ...body.agent, phone: value } })
                }
              />
            </Input.Wrapper>
          </div>
          {/* Email */}
          <div>
            <Input.Wrapper label="Email">
              <Input
                type="email"
                placeholder="doe@gmail.com"
                value={body?.agent?.email}
                onChange={(e) =>
                  setBody({
                    ...body,
                    agent: { ...body.agent, email: e?.target?.value },
                  })
                }
              />
            </Input.Wrapper>
          </div>
          {/* Website */}
          <div>
            <Input.Wrapper label="Website">
              <Input
                placeholder="www.example.com"
                value={body?.agent?.website}
                onChange={(e) =>
                  setBody({
                    ...body,
                    agent: { ...body.agent, website: e?.target?.value },
                  })
                }
              />
            </Input.Wrapper>
          </div>
        </div>
      </div>
    </div>
  );
}
