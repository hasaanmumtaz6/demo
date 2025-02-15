import React from "react";
import Layout from "./components/Layout";
import HomeBanner from "./components/HomeBanner";

const Home = () => {
  return (
    <Layout
      title={"Home • DEMO"}
      description={"Demo Page"}
      keywords={"demo, code for demo"}
    >
      <div className="home-page">
        <HomeBanner />
        <p>Home Page</p>
      </div>
    </Layout>
  );
};

export default Home;
