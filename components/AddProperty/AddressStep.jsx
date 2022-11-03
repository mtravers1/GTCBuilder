import { NumberInput, Input } from "@mantine/core";

// address section of the add proprty stepper
export default function AddressStep({ body, setBody }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {/* Street */}
        <div>
          <Input.Wrapper label="Street" required>
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
          <Input.Wrapper label="City" required>
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
          <Input.Wrapper label="Area" required>
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
          <Input.Wrapper label="Provinece" required>
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
          <Input.Wrapper label="Country" required>
            <Input
              placeholder="Sri Lanka"
              value={body?.address?.country}
              onChange={(event) =>
                setBody({
                  ...body,
                  address: { ...body.address, country: event.target.value },
                })
              }
            />
          </Input.Wrapper>
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
