import { useState } from "react";
import { Stepper, Group, Container } from "@mantine/core";
import ImagesStep from "../../components/AddProperty/ImagesStep";
import NormalButton from "../../components/NormalButton";
import DetailsStep from "../../components/AddProperty/DetailsStep";
import OverviewStep from "../../components/AddProperty/OverviewStep";
import DescriptionStep from "../../components/AddProperty/DescriptionStep";
import AddressStep from "../../components/AddProperty/AddressStep";
import FeatuersStep from "../../components/AddProperty/FeaturesStep";
import AssetsStep from "../../components/AddProperty/AssetsStep";
import ConsultantStep from "../../components/AddProperty/ConsultantStep";
import SocialLinksStep from "../../components/AddProperty/SocialLinksStep";
import { useHttpServices } from "../../hooks/useHttpServices";
import { properties } from "../../constants/EndPoints";
import { Loader } from "../../components/Helpers";
import { useRouter } from "next/router";
import { showNotification } from "@mantine/notifications";
import axios from "axios";
// add new property page
// route: /addproperty

export default function Index() {
  // Active step state
  const [active, setActive] = useState(0);
  const [imageIsUploading, setImageIsUploading] = useState(false);

  const [propFiles, setPropFiles] = useState([]);
  const [agentImage, setAgentImage] = useState([]);
  const [videoCoverImage, setVideoCoverImage] = useState([]);

  const [body, setBody] = useState({
    features: { indoor: {}, outdoor: {}, utilities: {}, others: {} },
    videoCoverImageLink: "link",
    agent: {},
    isTopProperty: false,
    isFeatured: false,
  });
  const router = useRouter();
  console.log(body);
  console.log(propFiles);
  const images_ = [];

  const { postProtectedData, isLoading } = useHttpServices();
  const handleAddProperty = async () => {
    setImageIsUploading(true);

    for (let i = 0; i < propFiles.length; i++) {
      const formData = new FormData();
      formData.append("file", propFiles[i]);
      formData.append("upload_preset", "gtc-builder");
      const { data: ff } = await axios.post(
        `https://api.cloudinary.com/v1_1/dfm1c1iri/image/upload`,
        formData
      );
      console.log(ff);
      images_.push(ff);
    }

    if (agentImage[0]) {
      let formData = new FormData();
      formData.append("file", agentImage[0]);
      formData.append("upload_preset", "gtc-builder");
      const { data: agentImageResponse } = await axios.post(
        `https://api.cloudinary.com/v1_1/dfm1c1iri/image/upload`,
        formData
      );
      console.log(agentImageResponse);

      body.agent.image = agentImageResponse.secure_url;
    }

    if (videoCoverImage[0]) {
      formData = new FormData();
      formData.append("file", videoCoverImage[0]);
      formData.append("upload_preset", "gtc-builder");
      const { data: coverImageResponse } = await axios.post(
        `https://api.cloudinary.com/v1_1/dfm1c1iri/image/upload`,
        formData
      );
      body.coverImageURL = coverImageResponse?.secure_url;
    }

    const data = await postProtectedData(properties.addProperty, {
      ...body,
      imagesURLs: images_.map((image) => image.secure_url),
    });
    if (!data?.error) {
      console.log(data);
      showNotification({
        title: "Success",
        message: "Property uploaded successfully 🤥",
      });

      router.push("/");
      setImageIsUploading(false);
    } else {
      console.log(data);
      setImageIsUploading(false);
    }
  };

  // Next and previev buttons function
  const nextStep = () =>
    setActive((current) => (current < 10 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <>
      <section className="mt-40 mb-2">
        <Container>
          {/* Stepper component */}
          <Stepper
            color="teal"
            active={active}
            orientation="vertical"
            onStepClick={setActive}
          >
            {/* Images and Details step*/}
            <Stepper.Step
              label="Images and details"
              description="Top carousel and details section"
            >
              <div className="bg-white p-2 rounded-default">
                <div className="font-bold text-lg">Image carousel</div>
                <ImagesStep files={propFiles} setFiles={setPropFiles} />
                <div className="font-bold mt-2 text-lg">Details</div>
                <DetailsStep body={body} setBody={setBody} />
              </div>
            </Stepper.Step>

            {/* Overview and Details step */}
            <Stepper.Step
              label="Description/Overview step"
              description="Description and Overview details"
            >
              <div className="bg-white p-2 rounded-default">
                <div className="font-bold text-lg">Overview section</div>
                <OverviewStep body={body} setBody={setBody} />
                <div className="font-bold mt-2 text-lg">
                  Description section
                </div>
                <DescriptionStep body={body} setBody={setBody} />
              </div>
            </Stepper.Step>

            {/* Address and features step*/}
            <Stepper.Step
              label="Address/Features step"
              description="Address and features section"
            >
              <div className="bg-white p-2 rounded-default">
                <div className="font-bold text-lg">Address section</div>
                <AddressStep body={body} setBody={setBody} />
                <div className="font-bold mt-2 text-lg">Features section</div>
                <FeatuersStep body={body} setBody={setBody} />
              </div>
            </Stepper.Step>

            {/* Assets Step */}
            <Stepper.Step
              label="Assets step"
              description="Assets embedded links"
            >
              <div className="bg-white p-2 rounded-default">
                <div className="font-bold text-lg">Asset section</div>
                <AssetsStep
                  body={body}
                  setBody={setBody}
                  files={videoCoverImage}
                  setFiles={setVideoCoverImage}
                />
              </div>
            </Stepper.Step>

            {/* Consultant and Social Step */}
            <Stepper.Step label="Social Step " description="Social links Step ">
              <div className="bg-white p-2 rounded-default">
                <div className="font-bold text-lg">Consultant section</div>
                <ConsultantStep
                  body={body}
                  setBody={setBody}
                  files={agentImage}
                  setFiles={setAgentImage}
                />
                {/* <div className="font-bold mt-2 text-lg">
                  Social links section
                </div>
                <SocialLinksStep body={body} setBody={setBody} /> */}
              </div>
            </Stepper.Step>
          </Stepper>

          {/* Next and previous buttons */}
          <Group position="center" mt="xl">
            <NormalButton onClick={prevStep}>Back</NormalButton>
            <NormalButton
              onClick={() => {
                if (active >= 5) {
                  handleAddProperty();
                } else {
                  nextStep();
                }
              }}
              className="w-32"
            >
              {isLoading || imageIsUploading ? (
                <Loader size={20} />
              ) : active >= 5 ? (
                "Submit"
              ) : (
                "Next step"
              )}
            </NormalButton>
          </Group>
        </Container>
      </section>
    </>
  );
}
