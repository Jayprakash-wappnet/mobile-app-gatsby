import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const contactUsPage = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <center>
        <div className="background-image">
          <StaticImage
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt="A dinosaur 20"
            placeholder="blurred"
            layout="fixed"
          />
        </div>
      </center>
    </div>
  );
};

export default contactUsPage;
