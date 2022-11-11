import { Input, Select, Checkbox } from "@mantine/core";
import { useState } from "react";

// details section of the add proprty stepper

export default function DetailsStep({ body, setBody }) {
  const setType = (type) => {
    setBody({ ...body, type });
  };
  const setSellType = (sellType) => {
    setBody({ ...body, sellType });
  };
  const setPriceType = (priceType) => {
    setBody({ ...body, priceType });
  };

  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Title */}
        <div>
          <Input.Wrapper label="Title" required>
            <Input
              placeholder="ABC Property"
              value={body.title}
              onChange={(e) => setBody({ ...body, title: e.target.value })}
            />
          </Input.Wrapper>
        </div>
        {/* Location */}
        <div>
          <Input.Wrapper label="Location" required>
            <Input
              placeholder="Gampaha, Sri Lanka"
              value={body.location}
              onChange={(e) => setBody({ ...body, location: e.target.value })}
            />
          </Input.Wrapper>
        </div>
        {/* Price */}
        <div>
          <Input.Wrapper label="Price" required>
            <Input
              placeholder="$25,000"
              value={body.price}
              onChange={(e) => setBody({ ...body, price: e.target.value })}
            />
          </Input.Wrapper>
        </div>

        {/* Badges or tags */}
        <div className="flex flex-row space-x-2 justify-between">
          {/* Type */}
          <Select
            label="Type"
            placeholder="Apartment"
            data={[
              { value: "Apartment", label: "Apartment" },
              { value: "Condo", label: "Condo" },
              { value: "House", label: "House" },
              //   { value: "4", label: "Flat" },
            ]}
            value={body.type}
            onChange={setType}
          />
          {/* Selling method */}
          <Select
            label="Sell type"
            placeholder="Rent"
            data={[
              { value: "Rent", label: "Rent" },
              { value: "Sale", label: "Sale" },
              { value: "Commercial", label: "Commercial" },
            ]}
            value={body.sellType}
            onChange={setSellType}
          />
          {/* Price type */}
          <Select
            label="Price type"
            placeholder="Negotiable"
            data={[
              { value: "Negotiable", label: "Negotiable" },
              { value: "Fixed", label: "Fixed" },
            ]}
            value={body.priceType}
            onChange={setPriceType}
          />
        </div>
        <div>
          <Checkbox
            color={"teal"}
            label={"Make top property"}
            checked={body?.isTopProperty}
            onChange={(e) =>
              setBody({
                ...body,
                isTopProperty: e.target.checked,
              })
            }
          />
          <Checkbox
            color={"teal"}
            label={"Make featured Property"}
            checked={body?.isFeatured}
            onChange={(e) =>
              setBody({
                ...body,
                isFeatured: e.target.checked,
              })
            }
          />
        </div>
      </div>
    </>
  );
}
