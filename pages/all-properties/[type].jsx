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

export default function index({ allProperties, type }) {
  return (
    <>
      <Head>
        <title>
          {basicsInfoConstants.name} - {type}
        </title>
      </Head>
      <div>
        <AllPropertiesHeader />
      </div>
      {/* Properties section */}
      <Container size="xl">
        {/* All properties title */}
        <div className="my-10 pt-10 flex items-center justify-between">
          <h1 className="tablet:text-4xl pc:text-2xl text-xl font-bold text-primary ">
            {type}
          </h1>
        </div>
        <section className="mt-10">
          {allProperties.length == 0 && (
            <div className="flex justify-center py-10">
              There are no Properties of category {type} at the moment...
            </div>
          )}
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
export async function getServerSideProps({ query }) {
  const { type } = query;
  const type_ = type[0].toUpperCase() + type.substr(1, type.length - 2);
  console.log(type_);
  const propertiesdata = PropertiesData; //pull dummy properties data
  const allProperties = await getData(
    `${properties.addProperty}?type=${type_}`
  );
  return {
    props: { propertiesdata, allProperties: allProperties.data, type }, // will be passed to the page component as props
  };
}
