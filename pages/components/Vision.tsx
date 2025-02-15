import Link from "next/link";
import React from "react";
import { LiaPagerSolid } from "react-icons/lia";

const Vision = () => {
  return (
    <section className="vision-container">
      <p>We Can Shape Your Vision</p>
      <h2>Do You Want To Complete Your Degree Fast Through The RPL?</h2>
      <div className="vision-card-container">
        <div className="vision-card-box">
          <LiaPagerSolid />
          <Link href={"/"}>Partner Visa</Link>
        </div>
        <div className="vision-card-box">
          <LiaPagerSolid />
          <Link href={"/"}>Training Visa</Link>
        </div>
        <div className="vision-card-box">
          <LiaPagerSolid />
          <Link href={"/"}>Visitor Visa</Link>
        </div>
        <div className="vision-card-box">
          <LiaPagerSolid />
          <Link href={"/"}>Temporary Graduate Visa</Link>
        </div>
        <div className="vision-card-box">
          <LiaPagerSolid />
          <Link href={"/"}>Skilled Regional Visa</Link>
        </div>
        <div className="vision-card-box">
          <LiaPagerSolid />
          <Link href={"/"}>Student Visa</Link>
        </div>
      </div>
    </section>
  );
};

export default Vision;
