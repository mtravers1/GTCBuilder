import { Textarea, Input } from "@mantine/core";

// litte description section of the add proprty stepper

export default function DescriptionStep({ body, setBody }) {
  return (
    <>
      <div className="flex flex-col space-y-4">
        {/* Description */}
        <div>
          <Textarea
            placeholder="Propert description"
            label="Description"
            withAsterisk
            value={body.description}
            onChange={(event) =>
              setBody({ ...body, description: event.currentTarget.value })
            }
          />
        </div>
        {/* Links */}
        <div>
          <Input.Wrapper label="Document links 01" required>
            <Input
              placeholder="https://"
              value={body?.documentLinks?.link1}
              onChange={(event) =>
                setBody({
                  ...body,
                  documentLinks: {
                    ...body.documentLinks,
                    link1: event.currentTarget.value,
                  },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Links */}
        <div>
          <Input.Wrapper label="Document links 02" required>
            <Input
              placeholder="https://"
              value={body?.documentLinks?.link2}
              onChange={(event) =>
                setBody({
                  ...body,
                  documentLinks: {
                    ...body.documentLinks,
                    link2: event.currentTarget.value,
                  },
                })
              }
            />
          </Input.Wrapper>
        </div>
        {/* Links */}
        <div>
          <Input.Wrapper label="Document links 03" required>
            <Input
              placeholder="https://"
              value={body?.documentLinks?.link3}
              onChange={(event) =>
                setBody({
                  ...body,
                  documentLinks: {
                    ...body.documentLinks,
                    link3: event.currentTarget.value,
                  },
                })
              }
            />
          </Input.Wrapper>
        </div>
      </div>
    </>
  );
}
