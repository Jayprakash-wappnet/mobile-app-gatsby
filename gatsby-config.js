/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `test-gatsby-site`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        collectionTypes: ["mobile-brand", "mobile-menu"],
        queryLimit: 1000,
        accessToken: `8309f05727dc5e03830e2352352819887d5205387d6feea892f5a0fb5a819c10a8f3c30a8eae9358345726dce5903e1ef42271e1c68e059956463603088ce4a0c507b83674a08e0255179bf54994e6dac945072181c1e230f8f77f83a783b02d8c7808e5dfafdd9bf79bb89d569e6976d3b24a07055b209ad891fd46497ee659`
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-image",
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: "http://localhost/graphql"
      }
    }
  ]
};
