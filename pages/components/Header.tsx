import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "@/public/Image/logo.png";
import { FaUser } from "react-icons/fa";
import { MdOutlineMenu } from "react-icons/md";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const openMenu = () => {
    setMenu(!menu);
  };

  return (
    <header className="header">
      <div className="header-desk">
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
      </div>

      <div className="header-mobile">
        <Link href={"/"} className="logo-box">
          <Image src={logo} alt="logo-pic" />
        </Link>
        <div className="mobile-tablet-header-tabs">
          <Link href={"/#"} className="mob-tab-log-in-user">
            <FaUser />
          </Link>
          <div className="menu-icon" onClick={openMenu}>
            <MdOutlineMenu onClick={openMenu} />
          </div>
          {menu && (
            <div className="mobile-tab_actbtn">
              <div className="mob-tab-tabs">
                <Link href={"/"}>ADMISSION</Link>
                <Link href={"/"}>RPL</Link>
                <Link href={"/"}>MIGRATION ASSISTANCE</Link>
                <Link href={"/"}>SKILL ASSESSMENT</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
