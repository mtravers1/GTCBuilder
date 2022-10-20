import React from 'react'
import { Carousel } from '@mantine/carousel'
import { IconCaretRight } from '@tabler/icons'
import Zoom from 'react-medium-image-zoom'
import Image from 'next/image'

// in individual property there are sub collapsable sections for each details
// this is th top main gallery carousel section data

export default function MainImagesGalery({ data }) {
    return (
        <>
            <Carousel withIndicators className="basis-1/2 flex justify-center items-center"
                nextControlIcon={<IconCaretRight size={30} className="text-white" />}
                previousControlIcon={<IconCaretRight size={30} className="text-white rotate-180" />}
                styles={{
                    control: {
                        color: 'white',
                        '&[data-inactive]': {
                            opacity: 0,
                            cursor: 'default',
                        },
                    },
                }}
            >
                {data.map((img, index) =>
                    <Carousel.Slide key={index}>
                        <Zoom><Image src={img} placeholder="blur" blurDataURL={img} width={1920} height={1080} alt="gallery images" />
                        </Zoom>
                    </Carousel.Slide>
                )}

            </Carousel>
        </>
    )
}
