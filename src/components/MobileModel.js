//

import * as React from "react";
import { StaticQuery, graphql } from "gatsby";

const MobileModel = () => {
  return (
    <StaticQuery
      query={graphql`
        query MyQuery {
          allStrapiMobileMenu {
            edges {
              node {
                model_photo {
                  url
                }
                mobbile_name
              }
            }
          }
        }
      `}
      render={(data) => (
        <div>
          {data.allStrapiMobileMenu.edges.map(({ node }) => (
            <div key={node.mobbile_name}>
              <h2>{node.mobbile_name}</h2>
              <img src={node.model_photo.url} alt={node.mobbile_name} />
            </div>
          ))}
        </div>
      )}
    />
  );
};

export default MobileModel;
