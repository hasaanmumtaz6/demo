import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import illpic from "@/public/Image/illhomebanner.png";
import { BiSupport } from "react-icons/bi";
import clientPic1 from "@/public/Image/clientPic1.png";
import clientPic2 from "@/public/Image/clientPic2.png";
import clientPic3 from "@/public/Image/clientPic3.png";
import clientPic4 from "@/public/Image/clientPic4.png";

const HomeBanner = () => {
  return (
    <section className="home-banner">
      <div className="home-banner-content">
        <b>Rpl Certificates in Australia</b>
        <h2>Are You Facing</h2>
        <h1>No Further Stay</h1>
        <h3>Condition On Your Current Visa Status?</h3>
        <p>
          We can solve your visa related issues, whether its a new visa or
          permanent residency application.
        </p>
        <div className="cta-btn">
          <Link href={"/"} className="primary-btn">
            Get Visa Help Now
          </Link>
          <Link href={"/"} className="secondry-btn">
            Book Appoinment
          </Link>
        </div>
        <span className="social-media-links">
          <Link href={"/"} target="_blank">
            <FaFacebook />
          </Link>
          <Link href={"/"} target="_blank">
            <RiInstagramFill />
          </Link>
          <Link href={"/"} target="_blank">
            <FaLinkedin />
          </Link>
          <Link href={"/"} target="_blank">
            <AiFillTwitterCircle />
          </Link>
        </span>
      </div>

      <div className="home-banner-image-conatiner">
        <div className="illustration-pic">
          <Image src={illpic} alt="ill-pic" />
        </div>
        <p>
          We made sure <b>99.99%</b> of our client are happy about our services.
        </p>

        <b className="contact-number">1300 937 775</b>
        <span className="agent-call-box">
          <BiSupport />
          <b>Call Our Agent</b>
          <p>Anytime</p>
        </span>
        <div className="happy-client-box">
          <div className="clients-pics-container">
            <span>
              <h4>Happy Client</h4>
              <p>Total 2500+</p>
            </span>
            <div className="clients-pics-box">
              <Image src={clientPic1} alt="client1" className="img-client-1" />
              <Image src={clientPic2} alt="client2" className="img-client-2" />
              <Image src={clientPic3} alt="client3" className="img-client-3" />
              <Image src={clientPic4} alt="client4" className="img-client-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
