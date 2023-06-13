import React from "react";
import { StaticImage } from "gatsby-plugin-image";
const aboutUsPage = () => {
  return (
    <div>
      <h1>About Us</h1>

      <center>
        <div className="background-image">
          <StaticImage
            src="https://media.istockphoto.com/id/1163589059/photo/about-us.jpg?s=612x612&w=0&k=20&c=xiAumkYaKpQc3xepslDpn-lFhYPae6ivX_rRkgSXJgs="
            alt="A dinosaur 20"
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </center>
    </div>
  );
};

export default aboutUsPage;
