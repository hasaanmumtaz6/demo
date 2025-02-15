import React from "react";
import Layout from "./components/Layout";

const Home = () => {
  return (
    <Layout title={"Home • DEMO"} description={"Demo Page"} keywords={"demo, code for demo"}>
      <div className="home-page">Home Page</div>
    </Layout>
  );
};

export default Home;
