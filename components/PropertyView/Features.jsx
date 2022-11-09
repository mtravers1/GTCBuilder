import React from "react";
import { Accordion } from "@mantine/core";
import {
  IconSoup,
  IconWashMachine,
  IconDeviceTv,
  IconBarbell,
  IconGrowth,
  IconBallTennis,
  IconSwimming,
  IconPropeller,
  IconBolt,
  IconFlame,
  IconDroplet,
  IconWifi,
  IconElevator,
  IconSmoking,
  IconDisabled,
  IconHome2,
  IconRowInsertTop,
} from "@tabler/icons";
import { MakeComponent } from "../Helpers";

// in individual property there are sub collapsable sections for each details
// this is th features section data
const features = {
  Kitchen: IconSoup,
  Balcony: IconHome2,
  Basement: IconRowInsertTop,
  Laundry: IconWashMachine,
  Gymnasium: IconBarbell,
  "Living room": IconDeviceTv,
};

export default function Freatures({ property }) {
  //   console.log(property.features);
  const indoor =
    property?.features?.indoor && Object.keys(property?.features?.indoor);

  return (
    <>
      <Accordion
        variant="default"
        defaultValue="default"
        className="bg-white rounded-default"
      >
        <Accordion.Item value="default">
          <Accordion.Control>
            <span className="font-bold">Features</span>
          </Accordion.Control>
          <Accordion.Panel>
            {/* Indoor features */}
            <div className="font-bold mt-4">Indoor features</div>
            <div className="grid pc:grid-cols-3 grid-cols-2 gap-2 pc:text-base text-sm">
              {indoor?.map((feature, idx) => {
                const Icon = MakeComponent(features[feature]);

                return (
                  <div className="flex space-x-2">
                    <Icon className="text-primary" />
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
            {/* Outdoor features */}
            <div className="font-bold mt-4">Outdoor features</div>
            <div className="grid pc:grid-cols-3 grid-cols-2 gap-2 pc:text-base text-sm">
              <div className="flex space-x-2">
                <IconGrowth className="text-primary" />
                <span>Backyard</span>
              </div>
              <div className="flex space-x-2">
                <IconHome2 className="text-primary" />
                <span>Frontyard</span>
              </div>
              <div className="flex space-x-2">
                <IconBallTennis className="text-primary" />
                <span>Tennis court</span>
              </div>
              <div className="flex space-x-2">
                <IconSwimming className="text-primary" />
                <span>Pool</span>
              </div>
            </div>
            {/* Utilities */}
            <div className="font-bold mt-4">Utilities</div>
            <div className="grid pc:grid-cols-3 grid-cols-2 gap-2 pc:text-base text-sm">
              <div className="flex space-x-2">
                <IconPropeller className="text-primary" />
                <span>AC</span>
              </div>
              <div className="flex space-x-2">
                <IconBolt className="text-primary" />
                <span>Electricity</span>
              </div>
              <div className="flex space-x-2">
                <IconFlame className="text-primary" />
                <span>Natural gas</span>
              </div>
              <div className="flex space-x-2">
                <IconDroplet className="text-primary" />
                <span>Purified water</span>
              </div>
              <div className="flex space-x-2">
                <IconWifi className="text-primary" />
                <span>Internet</span>
              </div>
            </div>
            {/* Other features */}
            <div className="font-bold mt-4">Other features</div>
            <div className="grid pc:grid-cols-3 grid-cols-2 gap-2 pc:text-base text-sm">
              <div className="flex space-x-2">
                <IconElevator className="text-primary" />
                <span>Elevator</span>
              </div>
              <div className="flex space-x-2">
                <IconSmoking className="text-primary" />
                <span>Smoke area</span>
              </div>
              <div className="flex space-x-2">
                <IconDisabled className="text-primary" />
                <span>Accessible</span>
              </div>
            </div>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </>
  );
}
