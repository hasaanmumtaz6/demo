import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords: string;
}

const Layout = ({ children, title, description, keywords }: LayoutProps) => {
  return (
    <main className="layout-container">
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className="main-content-box">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
