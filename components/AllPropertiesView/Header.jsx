import React from "react";
import Image from "next/image";
import { Tabs } from "@mantine/core";
import { IconCategory, IconMapPin, IconCash } from "@tabler/icons";
import { basicsInfoConstants } from "../../constants/Basics";
import LocationFilterTab from "./Tabs/LocationFilterTab";
import PriceFilterTab from "./Tabs/PriceFilterTab";
import TypeFilterTab from "./Tabs/TypeFilterTab";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

// in view all property page top filer componet has three tabs
// this is the main tab component in Tabs folder has sub componnets

export default function AllPropertiesHeader({ activeType }) {
  const [type, setType] = useState();
  const [rooms, setRooms] = useState();
  const [floors, setFloors] = useState();

  const router = useRouter();

  useEffect(() => {
    let path = router.pathname;
    console.log(path);
    if (type) {
      const con = path.includes("?") ? "&" : "?";
      path += `${con}type=${type}`;
    }
    if (rooms) {
      const con = path.includes("?") ? "&" : "?";
      path += `${con}rooms=${rooms}`;
    }
    if (floors) {
      const con = path.includes("?") ? "&" : "?";
      path += `${con}floors=${floors}`;
    }
    router.push(path);
  }, [type, rooms, floors]);

  return (
    <>
      <div className="mb-4 relative">
        {/* Cover image */}
        <div className="brightness-[0.4] h-[230px] w-full">
          <Image
            src="/images/img3.jpg"
            placeholder="blur"
            blurDataURL="/images/img3.jpg"
            layout="fill"
            objectFit="cover"
            alt="cover image"
          />
        </div>
        {/* Title section */}
        {/* <div className="pc:absolute absolute drop-shadow-lg top-0 left-0 flex flex-col h-full w-full pc:justify-center mt-24 items-center space-y-2">
          <h1 className="pc:text-6xl tablet:text-4xl text-2xl text-white text-left font-bold">
            {basicsInfoConstants.name}
          </h1>
          <h1 className="pc:text-4xl tablet:text-2xl text-xl text-white text-left">
            {basicsInfoConstants.subtitle1}
          </h1>
          <h1 className="pc:text-lg tablet:text-lg text-sm text-white text-center">
            {basicsInfoConstants.subtitle2}
          </h1>
        </div> */}

        {/* Filter section */}
        <div className="absolute top-0 left-0 flex flex-col h-full w-full justify-end items-center space-y-2 mt-10 p-2">
          {/* Filter tabs */}
          <Tabs
            variant="outline"
            defaultValue="location"
            className="bg-white font-bold rounded-default  pc:w-auto w-full"
          >
            {/* Titles */}
            <Tabs.List>
              <Tabs.Tab
                value="location"
                icon={<IconMapPin className="text-primary" size={14} />}
              >
                Location
              </Tabs.Tab>
              {/* <Tabs.Tab
                value="price"
                icon={<IconCash className="text-primary" size={14} />}
              >
                Price
              </Tabs.Tab> */}
              <Tabs.Tab
                value="type"
                icon={<IconCategory className="text-primary" size={14} />}
              >
                Type
              </Tabs.Tab>
            </Tabs.List>
            {/* Location filter */}
            <Tabs.Panel value="location" pt="xs">
              {/* refer tas folder */}
              <LocationFilterTab />
            </Tabs.Panel>
            {/* Price filter */}
            {/* <Tabs.Panel value="price" pt="xs"> */}
            {/* refer tas folder */}
            {/* <PriceFilterTab /> */}
            {/* </Tabs.Panel> */}
            {/* Type filter */}
            <Tabs.Panel value="type" pt="xs">
              {/* refer tas folder */}
              <TypeFilterTab
                type={type}
                setType={setType}
                rooms={rooms}
                setRooms={setRooms}
                floors={floors}
                setFloors={setFloors}
                activeType={activeType}
              />
            </Tabs.Panel>
          </Tabs>
        </div>
      </div>
    </>
  );
}
