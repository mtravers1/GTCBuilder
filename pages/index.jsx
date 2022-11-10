import Head from "next/head";
import { basicsInfoConstants } from "../constants/Basics";
import { Container } from "@mantine/core";
import HomeHeader from "../components/Home/HomeHeader";
import Headtitle from "../components/Headtitle";
import CategoriesSection from "../components/Sections/CategoriesSection";
import TopAgentsSection from "../components/Sections/TopAgents";
import TopReviewsSection from "../components/Sections/TopReviewsSection";
import TopPropertiesSection from "../components/Sections/TopPropertiesSection";
import SingleProperty from "../components/Sections/SingleProperty";
import { PropertiesData } from "../dummy_data/propertiesData";
import { CategoriesData } from "../dummy_data/categoriesData";
import { TopAgentsData } from "../dummy_data/topAgentsData";
import { ReviewData } from "../dummy_data/reviewData";
import { useStore } from "../zustand/store";
import { getData } from "../services";
import { properties, siteDetails } from "../constants/EndPoints";

// main index page of the website each section seperated in sections , can be customized from components/sections files
// please read the documentation for more information

export default function Index({
  propertiesdata,
  categoriessdata,
  agentsdata,

  jumboTronData,
  pageContent,
  allProperties,
  featuredProperty,
}) {
  const count = useStore((state) => state.count);

  // dev by (nisalk @ Devocade)
  return (
    <>
      <Head>
        <title>{basicsInfoConstants.name}</title>
      </Head>

      {/* Title header component */}
      <div>
        <HomeHeader data={jumboTronData} pageContent={pageContent} />
      </div>

      <Container size="xl" className="mt-20">
        {/* Top properties */}
        <Headtitle
          title={"Top properties"}
          link="/all-properties"
          isLinked={false}
        />
        <section>
          <TopPropertiesSection allProperties={allProperties} />
        </section>

        {/* Categories */}
        <Headtitle title={"Top categories"} isLinked={false} />
        <section className="mt-2">
          <CategoriesSection data={categoriessdata} />
        </section>

        {/*Feature Agents */}
        <Headtitle title={"Feature agents"} isLinked={false} />
        <section className="mt-2">
          <TopAgentsSection data={agentsdata} />
        </section>

        {/* Single property grid */}
        <Headtitle title={"Feature property"} isLinked={false} />
        <section className="mt-2">
          <SingleProperty property={featuredProperty} />
        </section>

        {/* Reviews */}
        {/* <Headtitle title={"To reviews"} isLinked={false} />
        <section className="mt-2">
          <TopReviewsSection data={reviewdata} />
        </section> */}
      </Container>
    </>
  );
}

// static Data fetching function from Next.js
export async function getStaticProps() {
  try {
    const propertiesdata = PropertiesData; //pull dummy properties data
    const categoriessdata = CategoriesData; //pull dummy categories data
    const agentsdata = TopAgentsData; //pull dummy agents data
    const reviewdata = ReviewData; //pull dummy review data
    const jumboTronData = await getData(siteDetails.homePageDetails);
    const allProperties = await getData(`${properties.addProperty}?isTop=1`);
    const featuredProperty = await getData(
      `${properties.addProperty}?featured=1`
    );
    console.log(featuredProperty);

    const pageData = await getData(
      "/content?resource=gtc-builder&page=home-page"
    );
    const pageContent = pageData.data.reduce(
      (acc, cur) => ({ ...acc, [cur.type]: cur }),
      {}
    );

    return {
      props: {
        propertiesdata,
        categoriessdata,
        agentsdata,
        reviewdata,
        jumboTronData: jumboTronData?.data,
        pageContent,
        allProperties: allProperties?.data,
        featuredProperty: featuredProperty?.data[0],
      }, // will be passed to the page component as props
    };
  } catch (error) {}
}
