import { Input, NumberInput, Checkbox } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

// built date section of the add proprty stepper

export default function OverviewStep({ body, setBody }) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Built year */}
        <div>
          <DatePicker
            placeholder="Pick year"
            label="Built year"
            initialLevel="year"
            withAsterisk
            value={body.buildYear}
            onChange={(date) => setBody({ ...body, builtYear: date })}
          />
        </div>
        {/* Bedrooms */}
        <div>
          <Input.Wrapper label="Bedrooms" required>
            <Input
              placeholder="2"
              value={body.bedRooms}
              onChange={(e) => setBody({ ...body, bedRooms: e.target.value })}
            />
          </Input.Wrapper>
        </div>
        {/* Bathrooms */}
        <div>
          <Input.Wrapper label="Bathrooms" required>
            <Input
              placeholder="2"
              value={body.bathRooms}
              onChange={(e) => setBody({ ...body, bathRooms: e.target.value })}
            />
          </Input.Wrapper>
        </div>
        {/* Garages */}
        <div>
          <Input.Wrapper label="Garages" required>
            <NumberInput
              withAsterisk
              placeholder="2"
              value={body.garages}
              onChange={(value) => setBody({ ...body, garages: value })}
            />
          </Input.Wrapper>
        </div>
        {/* Sq feets */}
        <div>
          <Input.Wrapper label="Square feets" required>
            <NumberInput
              placeholder="1000"
              withAsterisk
              value={body.floors}
              onChange={(value) => setBody({ ...body, sqFoot: value })}
            />
          </Input.Wrapper>
        </div>
        {/* Floors */}
        <div>
          <Input.Wrapper label="Floors" required>
            <NumberInput
              placeholder="2"
              withAsterisk
              value={body.floors}
              onChange={(value) => setBody({ ...body, floors: value })}
            />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}
