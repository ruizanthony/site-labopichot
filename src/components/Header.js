import * as React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import NavBar from "./NavBar"
import { Box } from "@mui/material"

const Header = ({ siteTitle, siteDescription }) => (
  <Box
    sx={{
      width: "100%",
      padding: "1rem",
      fontSize: "84%",
      textAlign: "center",
    }}
  >
    <header>
      <div>
        <Link to="/">
          <img
            src="/logo.svg" // using static folder
            width="100"
            height="100"
            alt={siteTitle}
          />
        </Link>
      </div>
      <NavBar />
    </header>
  </Box>
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
