module.exports = {
  siteMetadata: {
    title: "Gatsby + Node.js (TypeScript) API"
  },
  plugins: [
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "GRAPHCMS",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "GraphCmsData",
        // Url to query from
        url:
          "https://api-us-east-1.graphcms.com/v2/ckce5oe0t699j01xr9tyh6xx6/master"
      }
    }
  ]
};
