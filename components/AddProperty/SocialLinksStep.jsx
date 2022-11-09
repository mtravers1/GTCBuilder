import { Input } from "@mantine/core";

// social links section of the add proprty stepper

export default function SocialLinksStep({ body, setBody }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        {/* Facebook */}
        <div>
          <Input.Wrapper label="Facebook">
            <Input
              placeholder="www.example.com"
              value={body?.virtualTour}
              onChange={(event) =>
                setBody({
                  ...body,
                  virtualTour: event.target.value,
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Twitter */}
        <div>
          <Input.Wrapper label="Twitter">
            <Input placeholder="www.example.com" />
          </Input.Wrapper>
        </div>
        {/* Instagram */}
        <div>
          <Input.Wrapper label="Instagram">
            <Input placeholder="www.example.com" />
          </Input.Wrapper>
        </div>
        {/* Youtube */}
        <div>
          <Input.Wrapper label="Youtube">
            <Input placeholder="www.example.com" />
          </Input.Wrapper>
        </div>
        {/* LinkedIn */}
        <div>
          <Input.Wrapper label="LinkedIn">
            <Input placeholder="www.example.com" />
          </Input.Wrapper>
        </div>
        {/* Pinterest */}
        <div>
          <Input.Wrapper label="Pinterest">
            <Input placeholder="www.example.com" />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}
