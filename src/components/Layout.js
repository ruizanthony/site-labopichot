/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
// import { Container } from "theme-ui"

import { Container, Box, Typography, Paper } from "@mui/material"

import Header from "./Header"
import Footer from "./Footer"

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
      <Container p={4} variant="secondary">
        <main id="primary">{children}</main>
      </Container>
      <Footer siteTitle={site.siteMetadata.title} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
