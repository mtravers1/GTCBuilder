import React from "react";
import Link from "next/link";
import Image from "next/image";

// in categories card with image background with count and title

export default function ImageCard({ title, count, src }) {
  return (
    <>
      <Link href={`/all-properties/${title}`}>
        <div className="relative cursor-pointer group">
          <Image
            src={src}
            className="brightness-50 group-hover:brightness-[0.2] duration-300 rounded-default"
            width={400}
            height={600}
            placeholder="blur"
            objectFit="cover"
            blurDataURL={src}
            alt="overlay image"
          />
          <div className="opacity-100 duration-300 absolute flex flex-col justify-evenly items-center top-0 left-0 h-full w-full m-auto text-white font-bold p-4">
            <div className="text-lg">{title}</div>
            {/* <div>{count} listed</div> */}
          </div>
        </div>
      </Link>
    </>
  );
}
