import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/Image/logo.png";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <Link href={"/"} className="logo-box">
        <Image src={logo} alt="logo-pic" />
      </Link>
      <div className="tab_actbtn">
        <div className="tabs">
          <Link href={"/"}>ADMISSION</Link>
          <Link href={"/"}>RPL</Link>
          <Link href={"/"}>MIGRATION ASSISTANCE</Link>
          <Link href={"/"}>SKILL ASSESSMENT</Link>
        </div>
        <Link href={"/#"} className="log-in-user">
          <FaUser />
        </Link>
      </div>
    </header>
  );
};

export default Header;
