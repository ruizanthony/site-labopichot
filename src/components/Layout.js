/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Box, Container, Typography, Paper } from "@mui/material"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby-theme-material-ui"
import Cgv from "./Cgv"
import PageWrapper from "./PageWrapper"

import Header from "./Header"
import Footer from "./Footer"

const shortcodes = { Link, Cgv, Box, Container, PageWrapper }

const Layout = ({ children }) => {
  // Destructure query return down to site:
  const { site } = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  return (
    <>
      <Header
        siteTitle={site.siteMetadata.title}
        siteDescription={site.siteMetadata.description}
      />
      <Box p={4}>
        <main>
          <PageWrapper>
            <MDXProvider components={shortcodes}>{children}</MDXProvider>
          </PageWrapper>
        </main>
      </Box>
      <Footer siteTitle={site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
