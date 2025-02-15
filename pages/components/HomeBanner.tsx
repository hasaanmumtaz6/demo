import Image from "next/image";
import React from "react";
import banerbg from "@/public/Image/homebannerbg.png";
import Link from "next/link";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="banner-Image-Box">
        <Image src={banerbg} alt="home-banner-bg" />
      </div>
      <div className="banner-content-box">
        <div className="content-conatiner">
          <h1>Begin Your Australia Education Dream</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <Link href={"/"} className="primary-btn">
            Book Your Seat &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
