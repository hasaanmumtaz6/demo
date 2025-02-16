import Image from "next/image";
import React from "react";
import clientTestmonial from "@/public/Image/client8.png";

const ClientReviews = () => {
  return (
    <section className="Client-Reviews relative">
      <div className="client-review-content-box">
        <p>Client Reviews</p>
        <h2>What Client Say About Us.</h2>
      </div>
      <div className="client-review-card-slider">
        <div className="client-card-testmonial-conatiner">
            <div className="client-pic-testmonials-card">
              <Image src={clientTestmonial} alt="client-testmonial-pic" />
            </div>
            <p>
              {"“"}On the Windows talking painted pasture yet its express
              parties use. Sure last upon he same as knew next. Of believed or
              diverted no.{"”"}
            </p>
            <b>Yonzzone Bst</b>
            <p>West Beach Bathers Pavilion</p>
          </div>
      </div>
    </section>
  );
};

export default ClientReviews;
