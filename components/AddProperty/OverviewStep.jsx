import { Input, NumberInput } from '@mantine/core';
import { DatePicker } from '@mantine/dates';

// built date section of the add proprty stepper

export default function OverviewStep() {
    return (
        <>
            <div className="flex flex-col space-y-4">
                {/* Built year */}
                <div>
                    <DatePicker placeholder="Pick year" label="Built year" initialLevel="year" withAsterisk />
                </div>
                {/* Bedrooms */}
                <div>
                    <Input.Wrapper label="Bedrooms" required>
                        <Input placeholder="2" />
                    </Input.Wrapper>
                </div>
                {/* Bathrooms */}
                <div>
                    <Input.Wrapper label="Bathrooms" required>
                        <Input placeholder="2" />
                    </Input.Wrapper>
                </div>
                {/* Garages */}
                <div>
                    <Input.Wrapper label="Garages" required>
                        <Input placeholder="2" />
                    </Input.Wrapper>
                </div>
                {/* Sq feets */}
                <div>
                    <Input.Wrapper label="Square feets" required>
                        <NumberInput
                            placeholder="1000"
                            withAsterisk
                        />
                    </Input.Wrapper>
                </div>
                {/* Floors */}
                <div>
                    <Input.Wrapper label="Floors" required>
                        <NumberInput
                            placeholder="2"
                            withAsterisk
                        />
                    </Input.Wrapper>
                </div>
            </div>
        </>
    );
}