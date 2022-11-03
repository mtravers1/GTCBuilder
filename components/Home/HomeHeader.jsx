import React from "react";
import Image from "next/image";
import { basicsInfoConstants } from "../../constants/Basics";
import {
  IconMapPin,
  IconCurrencyDollar,
  IconBuilding,
  IconSearch,
} from "@tabler/icons";
import { Divider, Select, Input } from "@mantine/core";

// Home page  header compoent with main titles and filter compoent

export default function HomeHeader({ data }) {
  return (
    <>
      <div className="relative ">
        {/* Cover image */}
        <div className="brightness-[0.4] h-[600px] w-full mt-16">
          <Image
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            placeholder="blur"
            blurDataURL="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
            layout="fill"
            objectFit="cover"
            alt="cover image"
          />
        </div>
        {/* Title section */}
        <div className="absolute drop-shadow-lg top-0 left-0 flex flex-col h-full w-full laptop:mt-56 mt-24 items-center space-y-2 ">
          <h1 className="pc:text-6xl text-4xl text-white text-left font-bold uppercase">
            {data.homePageTitle}
          </h1>
          <h1 className="pc:text-4xl tablet:text-2xl text-xl text-white text-center">
            {data.homePageSubTitle}
          </h1>
          <h1 className="pc:text-lg tablet:text-lg text-sm text-white text-center">
            {basicsInfoConstants.homePageText}
          </h1>
        </div>
        {/* Filter section */}
        <div className="absolute top-0 left-0 flex flex-col h-full w-full justify-end items-center space-y-2 mt-10 p-2 ">
          <FilterComponent />
        </div>
      </div>
    </>
  );
}

// Filter componet
function FilterComponent() {
  return (
    <>
      <div className="bg-white rounded-default p-5 shadow-lg laptop:w-auto w-full">
        {/* Filters */}
        <div className="flex laptop:flex-row flex-col laptop:space-x-4 laptop:space-y-0 space-y-2">
          {/* Location filter */}
          <div className="flex space-x-2">
            <div>
              <IconMapPin className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <Select
                styles={{
                  label: { fontWeight: "bold" },
                }}
                radius="sm"
                label="Location"
                placeholder="Gampaha, Sri Lanka"
                transition="pop"
                transitionDuration={200}
                transitionTimingFunction="ease"
                data={[
                  { value: "1", label: "New zeland" },
                  { value: "2", label: "USA" },
                ]}
              />
            </div>
          </div>

          <Divider orientation="vertical" />

          {/* Price filter */}
          <div className="flex space-x-2">
            <div>
              <IconCurrencyDollar className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <Select
                styles={{
                  label: { fontWeight: "bold" },
                }}
                radius="sm"
                label="Price"
                placeholder="Gampaha, Sri Lanka"
                transition="pop"
                transitionDuration={200}
                transitionTimingFunction="ease"
                data={[
                  { value: "1", label: "$" },
                  { value: "2", label: "$$" },
                  { value: "3", label: "$$$" },
                ]}
              />
            </div>
          </div>

          <Divider orientation="vertical" />

          {/* Type filter */}
          <div className="flex space-x-2">
            <div>
              <IconBuilding className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <Select
                styles={{
                  label: { fontWeight: "bold" },
                }}
                radius="sm"
                label="Type"
                placeholder="Gampaha, Sri Lanka"
                transition="pop"
                transitionDuration={200}
                transitionTimingFunction="ease"
                data={[
                  { value: "1", label: "Apartment" },
                  { value: "2", label: "House" },
                  { value: "3", label: "Flat" },
                ]}
              />
            </div>
          </div>

          <Divider orientation="vertical" />

          {/* Search  */}
          <div className="flex space-x-2">
            <div>
              <IconSearch className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <h1 className="text-base font-bold">Search</h1>
              <Input
                radius="sm"
                icon={<IconSearch />}
                placeholder="Search..."
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
