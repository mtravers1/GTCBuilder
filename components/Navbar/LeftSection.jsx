import React from "react";
import Link from "next/link";
import Image from "next/image";
import { basicsInfoConstants } from "../../constants/Basics";
import { routes } from "../../constants/Routes";

// left section of the navbar
export default function LeftSection({ data }) {
  return (
    <>
      <Link href={routes.home}>
        <div className="flex items-center space-x-1">
          <Image
            src={data?.appLogo || "/images/logo.svg"}
            className="rounded-default"
            width={20}
            height={20}
            alt="Logo"
          />
          <h1 className="font-bold tablet:text-2xl text-lg cursor-pointer">
            {data.appName}
          </h1>
        </div>
      </Link>
    </>
  );
}
