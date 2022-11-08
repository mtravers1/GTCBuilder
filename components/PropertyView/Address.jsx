import React from "react";
import PrimaryButton from "../PrimaryButton";
import { Accordion } from "@mantine/core";
import { IconMap } from "@tabler/icons";

// in individual property there are sub collapsable sections for each details
// this is th address section data

export default function Address({ property }) {
  return (
    <>
      <Accordion
        variant="default"
        defaultValue="default"
        className="bg-white rounded-default"
      >
        <Accordion.Item value="default">
          <Accordion.Control>
            <span className="font-bold">Address</span>
          </Accordion.Control>
          <Accordion.Panel>
            {/* Basic informations */}
            <div className="grid pc:grid-cols-3 tablet:grid-cols-2 grid-cols-1  pc:text-base text-sm">
              <div>
                <span className="font-bold">Sreet : </span>
                {property?.address?.street}
              </div>
              <div>
                <span className="font-bold">City : </span>{" "}
                {property?.address?.city}
              </div>
              <div>
                <span className="font-bold">Area : </span>{" "}
                {property?.address?.area}
              </div>
              <div>
                <span className="font-bold">Province : </span>
                {property?.address?.province}
              </div>
              <div>
                <span className="font-bold">Zip : </span>{" "}
                {property?.address?.zip}
              </div>
              <div>
                <span className="font-bold">Country : </span>{" "}
                {property?.address?.country}
              </div>
            </div>
            {/* Google map link */}
            <div className="mt-2">
              <PrimaryButton link={"https://goo.gl/maps/RCCTdrW3avD8NHSc8"}>
                <IconMap /> <span> Locate</span>
              </PrimaryButton>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
