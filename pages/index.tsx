import React from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/HomeBanner";
import Vision from "./components/Vision";
import ContactHome from "./components/ContactHome";
import OfficeLocation from "./components/OfficeLocation";

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
        <p>Home Page</p>
      </div>
    </Layout>
  );
};

export default Home;
