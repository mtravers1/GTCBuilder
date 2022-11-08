import { Checkbox } from "@mantine/core";
import { useState } from "react";

// features section of the add proprty stepper
const indoorFeatures = [
  { label: "Gymnasium", color: "teal" },
  { label: "Kitchen" },
  { label: "Laundry" },
  { label: "Living room" },
];
const outFeatures = [
  { label: "Front yard", color: "teal" },
  { label: "Backyard" },
  { label: "Tennis court" },
  { label: "Pool" },
];
const utilities = [
  { label: "A/C", color: "teal" },
  { label: "Electricity" },
  { label: "Natural gas" },
  { label: "Purified water" },
  { label: "Internet" },
];
const otherFeatures = [
  { label: "Elevator", color: "teal" },
  { label: "Smoking area" },
  { label: "Accessibility" },
];

export default function FeatuersStep({ body, setBody }) {
  return (
    <>
      <div>
        {/* Indoor */}
        <label className="font-bold">Indoor</label>
        <div className="grid grid-cols-2 gap-2">
          {indoorFeatures.map((feature, idx) => (
            <Checkbox
              color={feature.color || "teal"}
              label={feature.label}
              checked={body?.features?.indoor[feature.label]}
              onChange={(e) =>
                setBody({
                  ...body,
                  features: {
                    ...body.features,
                    indoor: {
                      ...body?.features?.indoor,
                      [feature.label]: e.currentTarget?.checked,
                    },
                  },
                })
              }
            />
          ))}
        </div>

        {/* Outdoor */}
        <label className="font-bold">Outdoor</label>
        <div className="grid grid-cols-2 gap-2">
          {outFeatures.map((feature, idx) => (
            <Checkbox
              color={feature.color || "teal"}
              label={feature.label}
              checked={body?.features?.outdoor[feature.label]}
              onChange={(e) =>
                setBody({
                  ...body,
                  features: {
                    ...body.features,
                    outdoor: {
                      ...body?.features?.outdoor,
                      [feature.label]: e.currentTarget?.checked,
                    },
                  },
                })
              }
            />
          ))}
        </div>

        {/* Utilities */}
        <label className="font-bold">Utilities</label>
        <div className="grid grid-cols-2 gap-2">
          {utilities.map((feature, idx) => (
            <Checkbox
              color={feature.color || "teal"}
              label={feature.label}
              checked={body?.features?.utilities[feature.label]}
              onChange={(e) =>
                setBody({
                  ...body,
                  features: {
                    ...body.features,
                    utilities: {
                      ...body?.features?.utilities,
                      [feature.label]: e.currentTarget?.checked,
                    },
                  },
                })
              }
            />
          ))}
        </div>

        {/* Other features */}
        <label className="font-bold">Other features</label>
        <div className="grid grid-cols-2 gap-2">
          {otherFeatures.map((feature, idx) => (
            <Checkbox
              color={feature.color || "teal"}
              label={feature.label}
              checked={body?.features?.others[feature.label]}
              onChange={(e) =>
                setBody({
                  ...body,
                  features: {
                    ...body.features,
                    others: {
                      ...body?.features?.others,
                      [feature.label]: e.currentTarget?.checked,
                    },
                  },
                })
              }
            />
          ))}
        </div>
      </div>
    </>
  );
}
