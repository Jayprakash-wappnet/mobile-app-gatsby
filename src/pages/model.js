import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link, graphql } from "gatsby";
import React from "react";

const modelPage = ({ data }) => {
  const images = data.allStrapiMobileMenu.nodes.map(
    (node) => getImage(node?.model_photo?.localFile?.childImageSharp?.gatsbyImageData) ?? null
  );

  console.log(images);
  return (
    <center>
      <h2>Image fetch from local file storage</h2>
      <StaticImage
        src="../images/dino.jpeg"
        alt="A dinosaur"
        placeholder="blurred"
        layout="fixed"
        width={200}
        height={200}
      />
      <section>
        <h2>Remote Image </h2>
        <StaticImage
          src="https://placekitten.com/g/200/300"
          alt="A dinosaur 20"
          placeholder="blurred"
          layout="fixed"
          width={200}
          height={200}
        />
      </section>

      <section>
        <h2>Image from API</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gridGap: "10px" }}>
          {images.map((image, index) => (image ? <GatsbyImage key={index} image={image} alt="not found" /> : null))}
        </div>
      </section>
      <Link to="/">
        <button className="btn btn-primary">Back to Home</button>
      </Link>
    </center>
  );
};
export default modelPage;

export const pageQuery = graphql`
  {
    allStrapiMobileMenu {
      nodes {
        model_photo {
          localFile {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
        }
      }
    }
  }
`;
