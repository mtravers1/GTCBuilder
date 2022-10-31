import { Textarea,Input } from '@mantine/core';

// litte description section of the add proprty stepper

export default function DescriptionStep() {
    const [description, setDescription]=useState('')
    return (
        <>
            <div className="flex flex-col space-y-4">
                {/* Description */}
                <div>
                    <Textarea
                        placeholder="Propert description"
                        label="Description"
                        withAsterisk
                        value={description}
                        onChange={(e)=>setDescription(e.target.value)}
                    />
                </div>
                {/* Links */}
                <div>
                    <Input.Wrapper label="Document links 01" required>
                        <Input placeholder="https://" />
                    </Input.Wrapper>
                </div>
                {/* Links */}
                <div>
                    <Input.Wrapper label="Document links 02" required>
                        <Input placeholder="https://" />
                    </Input.Wrapper>
                </div>
                {/* Links */}
                <div>
                    <Input.Wrapper label="Document links 03" required>
                        <Input placeholder="https://" />
                    </Input.Wrapper>
                </div>
            </div>
        </>
    );
}