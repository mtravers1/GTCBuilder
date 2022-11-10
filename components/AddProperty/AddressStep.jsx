import { NumberInput, Input, Select } from "@mantine/core";

// address section of the add proprty stepper
export default function AddressStep({ body, setBody }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {/* Street */}
        <div>
          <Input.Wrapper label="Street">
            <Input
              placeholder="Menlo road"
              value={body?.address?.street}
              onChange={(event) =>
                setBody({
                  ...body,
                  address: { ...body.address, street: event.target.value },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* City */}
        <div>
          <Input.Wrapper label="City">
            <Input
              placeholder="New york"
              value={body?.address?.city}
              onChange={(event) =>
                setBody({
                  ...body,
                  address: { ...body.address, city: event.target.value },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Area */}
        <div>
          <Input.Wrapper label="Area">
            <Input
              placeholder="State"
              value={body?.address?.area}
              onChange={(event) =>
                setBody({
                  ...body,
                  address: { ...body.address, area: event.target.value },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Provinece */}
        <div>
          <Input.Wrapper label="State">
            <Input
              placeholder="Western"
              value={body?.address?.province}
              onChange={(event) =>
                setBody({
                  ...body,
                  address: { ...body.address, province: event.target.value },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Zip */}
        <div>
          <Input.Wrapper label="Zip">
            <NumberInput
              placeholder="11020"
              value={body?.address?.zip}
              onChange={(value) =>
                setBody({
                  ...body,
                  address: { ...body.address, zip: value },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Country */}
        <div>
          <Select
            label="Country"
            placeholder="Apartment"
            data={[{ value: "United States", label: "United States" }]}
            value={body.address?.country}
            onChange={(value) =>
              setBody({
                ...body,
                address: { ...body.address, country: value },
              })
            }
          />
        </div>
        {/* Locate */}
        <div>
          <Input.Wrapper label="Locate (google map location link)">
            <Input
              placeholder="gmap"
              value={body?.address?.map}
              onChange={(event) =>
                setBody({
                  ...body,
                  address: { ...body.address, map: event.target.value },
                })
              }
            />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}
