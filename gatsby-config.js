require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: `Charlies Portfölj`,
    description: `Mina färdigheter som webbutvecklare`,
    author: `Charlie Gustavsson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "aequqpsb",
        dataset: "production",
        overlayDrafts: true,
        watchMode: true,
        token: process.env.SANITY_TOKEN
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#4ead59`,
        theme_color: `#4ead59`,
        display: `minimal-ui`,
        icon: `src/images/cikon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
