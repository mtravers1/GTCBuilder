import React from "react";
import PropertyCard from "../PropertyCard";
import { Fade } from "react-awesome-reveal";

// in home page there are four sections
// this is the top properties eight grid section

export default function TopPropertiesSection({ allProperties }) {
  return (
    <>
      {/* Populated grid */}
      <div className="grid pc:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-4">
        {allProperties.map((property, index) => (
          <Fade cascade triggerOnce key={index}>
            {/* Replace index with unique id of property to the Link component below */}
            <PropertyCard data={property} />
          </Fade>
        ))}
      </div>
    </>
  );
}
