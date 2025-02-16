import Image from "next/image";
import React from "react";
import consultantpic from "@/public/Image/consultantpic.png";

const OurConsultants = () => {
  return (
    <section className="Our-Consultants">
      <h2>Our Consultants</h2>
      <p>Are You Looking For Recognition of Prior Learning Consultation?</p>

      <div className="consultant-card-box">
        <div className="thumbnail-pic-container">
          <Image src={consultantpic} alt="consultant-thumnail" />
        </div>
        <div className="thumbnail-pic-container">
          <Image src={consultantpic} alt="consultant-thumnail" />
        </div>
        <div className="thumbnail-pic-container">
          <Image src={consultantpic} alt="consultant-thumnail" />
        </div>
        <div className="thumbnail-pic-container">
          <Image src={consultantpic} alt="consultant-thumnail" />
        </div>
      </div>
    </section>
  );
};

export default OurConsultants;
