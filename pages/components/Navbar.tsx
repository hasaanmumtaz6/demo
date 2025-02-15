import Link from "next/link";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoNewspaper } from "react-icons/io5";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href={"/"}>
        <IoNewspaper />
        <b>News & Updated</b>
      </Link>
      <Link href={"/"}>
        <FaLocationDot />
        <b>Contact Us</b>
      </Link>
    </nav>
  );
};

export default Navbar;
