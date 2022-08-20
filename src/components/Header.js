import * as React from "react"
import { Link } from "gatsby-theme-material-ui"
import PropTypes from "prop-types"

import NavBar from "./NavBar"
import { Box, Container, Grid } from "@mui/material"

const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <Box sx={{ flexGrow: 1 }}>
      <NavBar />
    </Box>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteDescription: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteDescription: ``,
}

export default Header
