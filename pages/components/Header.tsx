import Image from "next/image";
import Link from "next/link";
import React from "react";
import logo from "@/public/Image/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box">
        <Image src={logo} alt="logo-pic" />
      </div>
      <div className="tabs">
        <Link href={"/"}>Home</Link>
        <Link href={"/"}>Study Abroad</Link>
        <Link href={"/"}>Courses</Link>
        <Link href={"/"}>Why Global Counsel</Link>
        <Link href={"/"}>IELTS Training</Link>
        <Link href={"/"}>Essential Services</Link>
      </div>
    </header>
  );
};

export default Header;
