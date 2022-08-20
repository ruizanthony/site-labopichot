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
        color: "black",
      }}
    >
      <Box>
        © {new Date().getFullYear()} {siteTitle}
      </Box>
      <Link
        to="https://fr.linkedin.com/company/laboratoires-industriels-pichot"
        sx={{ color: "black", ml: "2rem" }}
      >
        Page Linkedin{" "}
      </Link>
      <Link
        to="https://packaging-ecoresponsable.com/ "
        sx={{ color: "black", ml: "2rem" }}
      >
        Blog : Packaging écoresponsable{" "}
      </Link>
      <Link to="mentions-legales " sx={{ color: "black", ml: "2rem" }}>
        {" "}
        Mentions Légales
      </Link>

    </Box>
  </footer>
)

      // <Box sx={{ color: "black", ml: "2rem" }}>
      //   <Cgv />
      // </Box>
export default Footer
