import { NumberInput, Input } from '@mantine/core';

// address section of the add proprty stepper
export default function AddressStep() {

    return (
        <>
            <div className="grid grid-cols-2 gap-2">
                {/* Street */}
                <div>
                    <Input.Wrapper label="Street" required>
                        <Input placeholder="Menlo road" />
                    </Input.Wrapper>
                </div>
                {/* City */}
                <div>
                    <Input.Wrapper label="Document links 02" required>
                        <Input placeholder="New york" />
                    </Input.Wrapper>
                </div>
                {/* Area */}
                <div>
                    <Input.Wrapper label="Area" required>
                        <Input placeholder="State" />
                    </Input.Wrapper>
                </div>
                {/* Provinece */}
                <div>
                    <Input.Wrapper label="Provinece" required>
                        <Input placeholder="Western" />
                    </Input.Wrapper>
                </div>
                {/* Zip */}
                <div>
                    <Input.Wrapper label="Zip" >
                        <NumberInput placeholder="11020" />
                    </Input.Wrapper>
                </div>
                {/* Country */}
                <div>
                    <Input.Wrapper label="Country" required>
                        <Input placeholder="Sri Lanka" />
                    </Input.Wrapper>
                </div>
                {/* Locate */}
                <div>
                    <Input.Wrapper label="Locate (google map location link)" >
                        <Input placeholder="gmap" />
                    </Input.Wrapper>
                </div>
            </div>
        </>
    );
}