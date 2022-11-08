import Head from "next/head";
import Link from "next/link";
import AllPropertiesHeader from "../../components/AllPropertiesView/Header";
import PropertyCard from "../../components/PropertyCard";
import { basicsInfoConstants } from "../../constants/Basics";
import { Container } from "@mantine/core";
import { PropertiesData } from "../../dummy_data/propertiesData";
import { getData } from "../../services";
import { properties } from "../../constants/EndPoints";

// view all properties page same for categories page
// route: /allproperties

export default function index({ propertiesdata, allProperties }) {
  return (
    <>
      <Head>
        <title>{basicsInfoConstants.name} - All</title>
      </Head>
      <div>
        <AllPropertiesHeader />
      </div>
      {/* Properties section */}
      <Container size="xl">
        {/* All properties title */}
        <div className="my-10 pt-10 flex items-center justify-between">
          <h1 className="tablet:text-4xl pc:text-2xl text-xl font-bold text-primary ">
            All properties
          </h1>
        </div>
        <section className="mt-10">
          {/* Populated grid */}
          <div className="grid pc:grid-cols-4 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-1 gap-4">
            {allProperties.map((prop, index) => (
              <Link href="/property/123" key={index}>
                <a>
                  <PropertyCard data={prop} />
                </a>
              </Link>
            ))}
          </div>
        </section>
      </Container>
    </>
  );
}

// Pull propperties data from API
export async function getStaticProps() {
  const propertiesdata = PropertiesData; //pull dummy properties data
  const allProperties = await getData(properties.addProperty);
  return {
    props: { propertiesdata, allProperties: allProperties.data }, // will be passed to the page component as props
  };
}
