import React from "react";
import Image from "next/image";
import { Container } from "@mantine/core";
import ListedSection from "../../components/Profile/ListedSection";
import MyBookmarkSection from "../../components/Profile/MyBookmarkSection";
import { UserData } from "../../dummy_data/userData";
import Review from "../../components/PropertyView/Review";
import {
  IconDoor,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandPinterest,
  IconDeviceDesktop,
  IconPhone,
  IconMail,
} from "@tabler/icons";
import { getProtectedData } from "../../services/getServices";

// individual profile page of the user/agent/consultant
// [id] - mean the dynamic route pass the user's id or slug param with Next.js Link component
// route: /profile/123

export default function Index({ userdata }) {
  return (
    <>
      <Container size="xl" className="mt-24">
        <div className=" min-h-screen bg-[rgb(74,85,104)] rounded-2xl">
          <h3>Basic info</h3>
          <ul>{}</ul>
        </div>
      </Container>
    </>
  );
}

// static Data fetching function from API
export async function getServerSideProps({ req }) {
  try {
    const { token } = req.cookies;

    const data = await getProtectedData("/auth/profile/user", token);
  } catch (error) {
    console.log(error);
  }
  const userdata = UserData; //pull dummy user data

  return {
    props: { userdata }, // will be passed to the page component as props
  };
}
