module.exports = {
  siteMetadata: {
    title: `Laboratoires Pichot`,
    description: `Une entreprise française de fabrication de flacons en plastique ecoresponsables, qui intègre un service interne mouliste, situé dans le territoire Auvergne Rhone Alpes.`,
    author: `labopichot`,
    siteUrl: `https://flaconpet.com/`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "DBP",
        fieldName: "dbp",
        // url: "http://server.dm.pic/graphql",
        url: "https://server.labopi.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          // Authorization: `Bearer ${process.env.GITHUB_TOKEN}`, // TODO: use netlify environment variable https://docs.netlify.com/configure-builds/environment-variables/
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW5fcm9sZSIsImV4cCI6MzE3MTk5MDg3MTEwLCJwZXJzb25faWQiOjYsImlzX2FkbWluIjp0cnVlLCJpYXQiOjE2NjExMDMxMTAsImF1ZCI6InBvc3RncmFwaGlsZSIsImlzcyI6InBvc3RncmFwaGlsZSJ9.OIhD9ugD4mjA7xCZftRyLCgr_F2PsFhoRcujy3nrXDw`,
        },
        // HTTP headers alternatively accepts a function (allows async)
        // headers: async () => {
        //   return {
        //     Authorization: await getAuthorizationToken(),
        //   }
        // },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/locales`,
        name: `locale`,
      },
    },
    {
      resolve: `gatsby-plugin-react-i18next`,
      options: {
        localeJsonSourceName: `locale`,
        languages: [`en`, `fr`],
        defaultLanguage: `fr`,
        // siteUrl: `https://flaconpet.com/`,
        siteUrl: "http://localhost:8000/",
        i18nextOptions: {
          interpolation: {
            escapeValue: false,
          },
          keySeparator: false,
          nsSeparator: false,
        },
        pages: [
          {
            matchPath: "/:lang?/article/:uid",
            getLanguageFromPath: true,
            excludeLanguages: ["es"],
          },
          {
            matchPath: "/preview",
            languages: ["fr"],
          },
        ],
      },
    },
    "gatsby-plugin-image",
    {
      resolve: `mygatsby-plugin-multi-language-sitemap`,
      options: {
        output: "/",
        query: `
          query {
            allSitePage {
              nodes {
                path
              }
            }
            site {
              siteMetadata {
                siteUrl
              }
            }
          }
        `,
        langs: ["en", "de", "fr", "es", "zh-Hant", "zh-Hans"],
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
        icon: "src/images/iconPWA.png",
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`], // by default only mdx
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `articles`,
        path: `${__dirname}/src/articles/`,
      },
    },
    {
      resolve: "gatsby-plugin-page-creator",
      options: {
        path: `${__dirname}/src/articles`,
      },
    },
    "gatsby-theme-material-ui",
  ],
}
