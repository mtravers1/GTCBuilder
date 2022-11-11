import React, { useState } from "react";
import { Container } from "@mantine/core";
import "react-medium-image-zoom/dist/styles.css";
import Overview from "../../components/PropertyView/Overview";
import MainImagesGalery from "../../components/PropertyView/MainImagesGalery";
import Description from "../../components/PropertyView/Description";
import Address from "../../components/PropertyView/Address";
import Freatures from "../../components/PropertyView/Features";
import Video from "../../components/PropertyView/Video";
import Consultant from "../../components/PropertyView/Consultant";
import Review from "../../components/PropertyView/Review";
import SocialLinks from "../../components/PropertyView/SocialLinks";
import Map from "../../components/PropertyView/Map";
import VirtualTour from "../../components/PropertyView/VirtualTour";
import Image from "next/image";
import { showNotification } from "@mantine/notifications";
import { Badge } from "@mantine/core";
import Plans from "../../components/PropertyView/Plans";
import { PropertiesData } from "../../dummy_data/propertiesData";
import { getData } from "../../services";
import { commafy } from "../../utils";
import PrimaryButton from "../../components/PrimaryButton";
import NormalButton from "../../components/NormalButton";
import { routes } from "../../constants/Routes";

// individual property page
// [id] - mean the dynamic route pass the indiividual property id or slug param with Next.js Link component
// route: /property/123

export default function Index({ property }) {
  // current bookmark state
  const [isBookmark, setIsBookmark] = useState(false);

  // Bookmark function (oncleick)
  function bookmark() {
    // Set bookmark state
    setIsBookmark(!isBookmark);

    // Toast notification
    showNotification({
      title: "Bookmark",
      message: isBookmark == true ? "Bookmark removed" : "Bookmark added",
      color: isBookmark == true ? "red" : "green",
    });
  }
  return (
    <div className="mt-24">
      {/* Top images gallery */}
      <Container size="xl">
        <div className="relative">
          {/* Main images gallery */}
          <div>
            <MainImagesGalery data={property.imagesURLs} />
          </div>

          {/* Bookmark */}
          <div className="absolute top-0 right-0 p-1">
            <button onClick={() => bookmark()}>
              <Image
                src={
                  isBookmark ? "/icons/bookmarkFill.svg" : "/icons/bookmark.svg"
                }
                width={30}
                height={30}
                alt="icon"
              />
            </button>
          </div>
        </div>

        {/* Title section */}
        <div>
          <div className="flex justify-between space-x-2 my-2">
            {/* left */}
            {/* Title */}
            <h1 className="font-bold pc:text-2xl tablet:text-xl text-base">
              {property.title}
            </h1>

            {/* right */}
            {/* Price and edit for admin */}
            <div>
              <h2 className="bg-primary font-bold text-white px-4 py-2 rounded-default shadow-sm pc:text-2xl tablet:text-xl text-base text-center">
                from ${commafy(property?.price)}
              </h2>

              <PrimaryButton
                type="button"
                className="mt-3 w-full"
                link={`${routes.editProperty}?id=${property?.id}`}
              >
                <p>Edit property</p>
              </PrimaryButton>
            </div>
          </div>
          {/* Location */}
          <div className="text-black/80 italic pc:text-base text-sm mb-2">
            {`${property.address?.city}, ${property?.address?.country}`}
          </div>
          {/* Badges */}
          <div className="flex flex-wrap tablet:space-y-0 tablet:flex-row space-y-2 tablet:space-x-2 flex-col w-full overflow-x-hidden whitespace-nowrap ">
            <Badge size="lg" className="bg-primary" variant="filled">
              {property.type}
            </Badge>
            <Badge size="lg" className="bg-primary" variant="filled">
              {property.sellType}
            </Badge>
            <Badge size="lg" className="bg-primary" variant="filled">
              {property.priceType}
            </Badge>
          </div>
        </div>

        {/* Accordion section */}
        <div className="flex pc:flex-row tablet:flex-col flex-col pc:space-x-4 mt-4">
          {/* Left */}
          {/* All sections in components/PropertyView folder */}
          <div className="flex flex-col space-y-4 basis-2/3">
            {/* Overview */}
            <div>
              <Overview property={property} />
            </div>

            {/* Description */}
            <div>
              <Description property={property} />
            </div>

            {/* Address */}
            <div>
              <Address property={property} />
            </div>

            {/* Features */}
            <div>
              <Freatures property={property} />
            </div>

            {/* Video */}
            <div>
              <Video property={property} />
            </div>

            {/* Virtual tour */}
            <div>
              <VirtualTour />
            </div>

            {/* Plans */}
            <div>
              <Plans />
            </div>

            {/* Map */}
            <div>
              <Map />
            </div>

            {/* Review */}
            <div>
              <Review />
            </div>
          </div>
          {/* Right */}
          <div className="flex flex-col space-y-4 basis-1/3">
            {/* Consultant card */}
            <div>
              <Consultant agent={property.agent} />
            </div>
            {/* Social links */}
            {/* <div>
              <SocialLinks />
            </div> */}
          </div>
        </div>
      </Container>
    </div>
  );
}

// Pull dynamic data from API
export async function getServerSideProps({ query }) {
  const { id } = query;
  // find property data by id from the route

  try {
    const property = await getData(`/gtc/properties/slug/${id}`);

    return {
      props: { property: property?.data }, // will be passed to the page component as props
    };
  } catch (error) {}
}
