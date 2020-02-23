module.exports = {
  pathPrefix: ``,
  plugins: [
    {
      resolve: `gatsby-theme-codebushi`,
      options: {
        tailwindConfig: `tailwind.config.js`
      }
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "sitehosting",
      },
    }
  ]
};
