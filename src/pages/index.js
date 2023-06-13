import React from "react";
import { StaticQuery, graphql } from "gatsby";

const query = graphql`
  query MyQuery1 {
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
      <h1 className="d-flex justify-content-center" style={{ padding: "5%" }}>
        Available Now !!!
      </h1>
      <StaticQuery
        query={query}
        render={(data) => (
          <table className="table table-bordered">
            <thead className="thead-dark">
              <tr>
                <th>Name</th>
                <th>Model</th>
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
