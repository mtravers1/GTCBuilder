import React from "react";
import { Select, Divider } from "@mantine/core";
import { IconCategory } from "@tabler/icons";

// in view all property page top filer componet has three tabs
// this is the Type filter tab component

export default function TypeFilterTab({
  type,
  setType,
  rooms,
  setRooms,
  floors,
  setFloors,
  activeType,
}) {
  // Price range marks

  return (
    <>
      <div className="bg-white rounded-default p-5 shadow-lg pc:w-auto w-full">
        {/* Filters */}
        <div className="flex pc:flex-row flex-col pc:space-x-4 pc:space-y-0 space-y-2">
          {/* Type */}
          <div className={"flex space-x-2 " + (activeType ? "hidden" : "")}>
            <div>
              <IconCategory className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <Select
                styles={{
                  label: { fontWeight: "bold" },
                }}
                radius="sm"
                label="Type"
                placeholder="Apartment"
                transition="pop"
                transitionDuration={200}
                transitionTimingFunction="ease"
                data={[
                  { value: "apartments", label: "Apartments" },

                  { value: "condos", label: "Condos" },
                  { value: "houses", label: "Houses" },
                ]}
                value={type}
                onChange={setType}
              />
            </div>
          </div>
          <Divider orientation="vertical" />

          {/* Rooms */}
          <div className="flex space-x-2">
            <div>
              <IconCategory className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <Select
                styles={{
                  label: { fontWeight: "bold" },
                }}
                radius="sm"
                label="Rooms"
                placeholder="2"
                transition="pop"
                transitionDuration={200}
                transitionTimingFunction="ease"
                data={Array.from({ length: 10 }, (ar, i) => ({
                  value: i + 1,
                  label: i + 1,
                }))}
                value={rooms}
                onChange={setRooms}
              />
            </div>
          </div>
          <Divider orientation="vertical" />

          {/* Floors */}
          <div className="flex space-x-2">
            <div>
              <IconCategory className="text-primary" />
            </div>
            <div className="pc:w-auto w-full">
              <Select
                styles={{
                  label: { fontWeight: "bold" },
                }}
                radius="sm"
                label="Floors"
                placeholder="2"
                transition="pop"
                transitionDuration={200}
                transitionTimingFunction="ease"
                data={Array.from({ length: 10 }, (ar, i) => ({
                  value: i + 1,
                  label: i + 1,
                }))}
                value={floors}
                onChange={setFloors}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
