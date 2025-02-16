import React from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/HomeBanner";
import Vision from "./components/Vision";
import ContactHome from "./components/ContactHome";
import OfficeLocation from "./components/OfficeLocation";
import ClientReviews from "./components/ClientReviews";
import OurConsultants from "./components/OurConsultants";

const Home = () => {
  return (
    <Layout
      title={"Home • DEMO"}
      description={"Demo Page"}
      keywords={"demo, code for demo"}
    >
      <div className="home-page">
        <HomeBanner />
        <Vision />
        <ContactHome />
        <OfficeLocation />
        <ClientReviews />
        <OurConsultants />
      </div>
    </Layout>
  );
};

export default Home;
