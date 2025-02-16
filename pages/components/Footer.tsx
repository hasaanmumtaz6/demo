import Image from "next/image";
import React from "react";
import logo from "@/public/Image/logo.png";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { BiLogoInstagramAlt } from "react-icons/bi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="about_tabs-conatiner-footer">
        <div className="about-footer">
          <div className="logo-footer-box">
            <Image src={logo} alt="logo-pic-footer" />
          </div>

          <p>
            Our highly skilled team helps students all through the entire
            procedure of their education. It begins with the admissions
            procedure and can proceed until the completion of graduation. We
            offer our excellent service to students from around the globe, which
            is crucial to both of us and the understudies that we serve. Our
            team is made of individuals that have specific abilities to
            guarantee you are helped by experts.
          </p>

          <span className="social_media_icons">
            <Link href={"/"} target="_blank">
              <FaFacebookF />
            </Link>
            <Link href={"/"} target="_blank">
              <FaTwitter />
            </Link>
            <Link href={"/"} target="_blank">
              <BiLogoInstagramAlt />
            </Link>
            <Link href={"/"} target="_blank">
              <FaLinkedinIn />
            </Link>
            <Link href={"/"} target="_blank">
              <FaYoutube />
            </Link>
          </span>
        </div>

        <div className="footer-tabs">
          <div className="visa-service-tabs">
            <h4>Visa Services</h4>
            <Link href={"/"}>Partner Visa</Link>
            <Link href={"/"}>Student Visa</Link>
            <Link href={"/"}>Training Visa</Link>
            <Link href={"/"}>Visitor Visa</Link>
            <Link href={"/"}>Temporary Visa</Link>
          </div>
          <div className="support-tabs">
            <h4>Support</h4>
            <Link href={"/"}>Getting started</Link>
            <Link href={"/"}>Help center</Link>
            <Link href={"/"}>Server status</Link>
            <Link href={"/"}>Report a bug</Link>
            <Link href={"/"}>Chat support</Link>
          </div>
        </div>
      </div>
      <div className="copyright-line_tabs">
        <p>Copyright &copy; 2022 Study in pty ltd</p>
        <span className="tabs-copyright-line-foooter">
          <p>All Rights Reserved</p>
          <i>|</i>
          <Link href="/">Terms and Conditions</Link>
          <i>|</i>
          <Link href="/"> Privacy Policy</Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
