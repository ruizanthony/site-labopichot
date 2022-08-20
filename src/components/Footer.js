import React from "react"
import { Box } from "@mui/material"
import { Link } from "gatsby-theme-material-ui"
import Cgv from "./Cgv"

const Footer = ({ siteTitle }) => (
  <footer>
    <Box
      sx={{
        width: "100%",
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        flexFlow: "row wrap",
        px: "2rem",
      }}
    >
      <Box>
        © {new Date().getFullYear()} {siteTitle}
      </Box>
      <Box>
        {" "}
        <Link to="https://fr.linkedin.com/company/laboratoires-industriels-pichot">
          Page Linkedin{" "}
        </Link>
      </Box>
      <Box>
        <Link to="https://packaging-ecoresponsable.com/ ">
          Blog : Packaging écoresponsable{" "}
        </Link>
      </Box>
      <Box>
        <Link to="mentions-legales ">Mentions Légales</Link>
      </Box>
      <Box>
        <Cgv />
      </Box>
    </Box>
  </footer>
)

export default Footer
