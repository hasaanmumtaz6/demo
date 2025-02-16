import Image from "next/image";
import React from "react";
import mapaus from "@/public/Image/austMap.png";
import arrowwhite from "@/public/Image/arrowgray.png";
import arroworrange from "@/public/Image/arrororrange.png";

const OfficeLocation = () => {
  return (
    <section className="office-location">
      <h2>Offices Location</h2>
      <p>
        To check the location on Google Maps, click any of the below locations.
      </p>
      <div className="map-pic-box">
        <Image src={mapaus} alt="australia-map" />

        <div className="location location1">
          <div className="location-conetnt">
            <h3>Melbourne</h3>
            <p>
              Level 1, 530 Little Collins Street, Melbourne, Victoria - 3000
            </p>
          </div>
          <div className="mouse-arrow">
            <Image src={arroworrange} alt="arrow-orrange-pic" />
          </div>
        </div>

        <div className="location location2">
          <div className="location-conetnt">
            <h3>Darwin</h3>
            <p>Level 1/48-50 Smith St. Darwin City NT 0800, Australia</p>
          </div>
          <div className="mouse-arrow">
            <Image src={arroworrange} alt="arrow-orrange-pic" />
          </div>
        </div>

        <div className="location location3">
          <div className="location-conetnt">
            <h3>Sydney</h3>
            <p>
              Level 33, Australia Square 264 George Street, Sydney NSW, 2000,
              Australia
            </p>
          </div>
          <div className="mouse-arrow">
            <Image src={arroworrange} alt="arrow-orrange-pic" />
          </div>
        </div>

        <div className="location location4">
          <div className="location-conetnt">
            <h3>Tasmania</h3>
            <p>Level 2/162 Macquarie StHobart TAS 7000, Tasmania, Australia</p>
          </div>
          <div className="mouse-arrow">
            <Image src={arroworrange} alt="arrow-orrange-pic" />
          </div>
        </div>

        <div className="location location5">
          <div className="location-conetnt">
            <h3>Geelong</h3>
            <p>Suite 2, Level 1, 110 Little Malop Street Geelong Victoria</p>
          </div>
          <div className="mouse-arrow">
            <Image src={arrowwhite} alt="arrow-white-pic" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeLocation;
