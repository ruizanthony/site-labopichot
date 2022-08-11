module.exports = {
  siteMetadata: {
    title: `Lqborqtoires Pichot`,
    description: `Une entreprise française de fabrication de flacons en plastique ecoresponsables, qui intègre un service interne mouliste, situé dans le territoire Auvergne Rhone Alpes.`,
    author: `Laboratoires Pichot`,
    siteUrl: `https://sitelabopichot.gtsb.io/`
    },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/iconPWA.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content-images",
        path: "./content/images/",
      },
      __key: "content-images",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `labopichot`,
        short_name: `pichot`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
