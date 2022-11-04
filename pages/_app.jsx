import Layout from "../components/layout";
import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import NextNProgress from "nextjs-progressbar";
import { DefaultSeo } from "next-seo";
import SEO from "../next-seo.config";
import { NotificationsProvider } from "@mantine/notifications";
import { useEffect, useState } from "react";
import { useHttpServices } from "../modules/Authentication/hooks/useHttpServices";
import { siteDetails } from "../constants/EndPoints";

// The _app. js file is the default App component that Next. js uses to initialize pages

function MyApp({ Component, pageProps }) {
  const [appLogo, setAppLogo] = useState("");
  const [appName, setAppName] = useState("");
  const [contactInfo, setContactInfo] = useState({});

  const data = { appName, appLogo, contactInfo };
  console.log(data);

  const { getData } = useHttpServices();
  useEffect(() => {
    (async function () {
      const data = await getData(siteDetails.appLogo);
      setAppLogo(data?.data?.appLogo);
      const data_ = await getData(siteDetails.homePageDetails);
      setAppName(data_?.data?.appName);
      const contactInfo = await getData(siteDetails.contacts);
      setContactInfo(contactInfo?.data?.contactInfo);
    })();
  }, []);

  return (
    // Mantine provider is a provider global componets from mantine ui library
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colors: { emerald: ["#10b981"] },
        fontFamily: "Quicksand, sans-serif",
      }}
    >
      <DefaultSeo {...SEO} />
      {/* Mantine notification provider from mantine ui library */}
      <NotificationsProvider>
        {/* basic and primary layout of the website customize in /compoents/layout.jsx */}
        <Layout data={data}>
          {/* Top progress indicator when page load package */}
          <NextNProgress
            options={{ easing: "ease" }}
            color="rgb(40 174 104 )"
            startPosition={0.6}
            stopDelayMs={200}
            height={4}
            showOnShallow={true}
          />
          <Component {...pageProps} />
        </Layout>
      </NotificationsProvider>
    </MantineProvider>
  );
}

export default MyApp;
