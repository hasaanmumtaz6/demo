import Image from "next/image";
import React from "react";
import character from "@/public/Image/character.png";
import Link from "next/link";
import client4 from "@/public/Image/client4.png"
import client5 from "@/public/Image/client5.png"
import client6 from "@/public/Image/client6.png"
import client7 from "@/public/Image/client7.png"

const ContactHome = () => {
  return (
    <section className="contact-home-section-container">
      <div className="contact-home-section-box">
        <div className="image-ill-box">
          <div className="blob"></div>
          <b className="ill ill1"></b>
          <b className="ill ill2"></b>
          <b className="ill ill3"></b>
          <div className="image-box">
            <Image src={character} alt="character-contect-section" />
          </div>
          <div className="contact-happy-client">
            <div className="contact-client-pic-box">
              <h3>Happy Client</h3>
              <div>
                <Image src={client4} className="client4" alt="client4-contect-section" />
                <Image src={client5} className="client5" alt="client5-contect-section" />
                <Image src={client6} className="client6" alt="client6-contect-section" />
                <Image src={client7} className="client7" alt="client7-contect-section" />
              </div>
            </div>
            <p>+2.5K</p>
          </div>
        </div>

        <div className="home-contact-content-box">
          <h2>
            Why should you choose <b>Studyin</b>
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor Lorem ipsum dolor sit amet consetetur
            sadipscing elitr
          </p>
          <Link href={"/"} className="third-btn">
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;
