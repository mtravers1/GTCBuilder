import Head from "next/head"
import { basicsInfoConstants } from "../constants/Basics"
import { Container } from "@mantine/core"
import HomeHeader from "../components/Home/HomeHeader"
import Headtitle from "../components/Headtitle"
import CategoriesSection from "../components/Sections/CategoriesSection"
import TopAgentsSection from "../components/Sections/TopAgents"
import TopReviewsSection from "../components/Sections/TopReviewsSection"
import TopPropertiesSection from "../components/Sections/TopPropertiesSection"
import SingleProperty from "../components/Sections/SingleProperty"
import { PropertiesData } from "../dummy_data/propertiesData"
import { CategoriesData } from "../dummy_data/categoriesData"
import { TopAgentsData } from "../dummy_data/topAgentsData"
import { ReviewData } from "../dummy_data/reviewData"

// main index page of the website each section seperated in sections , can be customized from components/sections files
// please read the documentation for more information

export default function Index({ propertiesdata, categoriessdata, agentsdata, reviewdata }) {

  // dev by (nisalk @ Devocade)
  return (
    <>
      <Head>
        <title>{basicsInfoConstants.name}</title>
      </Head>

      {/* Title header component */}
      <div>
        <HomeHeader />
      </div>

      <Container size="xl" className="mt-20">
        {/* Top properties */}
        <Headtitle title={"Top properties"} link="/allproperties" isLinked={true} />
        <section>
          <TopPropertiesSection data={propertiesdata}/>
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
          <SingleProperty data={propertiesdata} />
        </section>

        {/* Reviews */}
        <Headtitle title={"To reviews"} isLinked={false} />
        <section className="mt-2">
          <TopReviewsSection data={reviewdata} />
        </section>
      </Container>
    </>
  )
}

// static Data fetching function from Next.js
export async function getStaticProps() {
  const propertiesdata = PropertiesData //pull dummy properties data
  const categoriessdata = CategoriesData //pull dummy categories data
  const agentsdata = TopAgentsData //pull dummy agents data
  const reviewdata = ReviewData //pull dummy review data
  return {
    props: { propertiesdata, categoriessdata, agentsdata, reviewdata }, // will be passed to the page component as props
  }
}