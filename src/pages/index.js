import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Navbar from "../components/Navbar";
import MobileModel from "../components/MobileModel";

const query = graphql`
  query MyQuery {
    allStrapiMobileBrand {
      edges {
        node {
          BrandName
          Model
        }
      }
    }
  }
`;

const indexPage = () => {
  return (
    <>
      <Navbar />
      <MobileModel />
      <StaticQuery
        query={query}
        render={(data) => (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {data.allStrapiMobileBrand.edges.map((edge) => {
                const { BrandName, Model } = edge.node;
                return (
                  <tr key={BrandName}>
                    <td>{BrandName}</td>
                    <td>{Model}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      />
    </>
  );
};

export default indexPage;
