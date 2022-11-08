import React from "react";
import { Accordion } from "@mantine/core";
import {
  IconBed,
  IconBath,
  IconCar,
  IconShape,
  IconStairs,
  IconCalendarTime,
} from "@tabler/icons";

// in individual property there are sub collapsable sections for each details
// this is the overview section data

export default function Overview({ property }) {
  return (
    <>
      <Accordion
        variant="default"
        defaultValue="default"
        className="bg-white rounded-default"
      >
        <Accordion.Item value="default">
          <Accordion.Control>
            <span className="font-bold">Overview</span>
          </Accordion.Control>
          <Accordion.Panel>
            <div className="flex flex-wrap justify-between text-base ">
              {/* Built year */}
              <div className="flex flex-col justify-center items-center pc:text-base text-sm ">
                <IconCalendarTime className="text-primary" />
                <div className="font-bold">Built year</div>
                <div>{property.builtYear}</div>
              </div>
              {/* Bedrooms */}
              <div className="flex flex-col justify-center items-center pc:text-base text-sm">
                <IconBed className="text-primary" />
                <div className="font-bold ">Bedrooms</div>
                <div>{property.bedRooms}</div>
              </div>
              {/* Bathrooms */}
              <div className="flex flex-col justify-center items-center pc:text-base text-sm">
                <IconBath className="text-primary " />
                <div className="font-bold">Bathrooms</div>
                <div>{property.bathRooms}</div>
              </div>
              {/* Garages */}
              <div className="flex flex-col justify-center items-center pc:text-base text-sm">
                <IconCar className="text-primary" />
                <div className="font-bold">Garages</div>
                <div>{property.garages}</div>
              </div>
              {/* Sqft */}
              <div className="flex flex-col justify-center items-center pc:text-base text-sm">
                <IconShape className="text-primary" />
                <div className="font-bold">Squre ft</div>
                <div>{property.sqFoot}ft</div>
              </div>
              {/* Floors */}
              <div className="flex flex-col justify-center items-center pc:text-base text-sm">
                <IconStairs className="text-primary" />
                <div className="font-bold">Floors</div>
                <div>{property.floors}</div>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
