import React from "react";
import Image from "next/image";
import { Accordion } from "@mantine/core";
import { IconPlayerPlay } from "@tabler/icons";

// in individual property there are sub collapsable sections for each details
// this is the video of the property section data

export default function Video({ property }) {
  return (
    <>
      <Accordion
        variant="default"
        defaultValue="default"
        className="bg-white rounded-default"
      >
        <Accordion.Item value="default">
          <Accordion.Control>
            <span className="font-bold">Video</span>
          </Accordion.Control>
          <Accordion.Panel>
            {/* Video */}
            <a
              href={property.videoLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="relative flex justify-center items-center">
                <Image
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  placeholder="blur"
                  blurDataURL="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  width={1920}
                  height={1080}
                  objectFit="cover"
                  alt="video thumbnail"
                />
                <div className="absolute">
                  <IconPlayerPlay size={100} className="text-white" />
                </div>
              </div>
            </a>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
