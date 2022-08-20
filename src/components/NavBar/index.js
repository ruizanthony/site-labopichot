import * as React from "react"
// import { Link } from "gatsby"
import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui"
import Logo from "../Logo"

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
} from "@mui/material"
import DrawerComponent from "./DrawerComponent"

const menuLinks = [
  { text: "Accueil", url: "/" },
  { text: "Créations de produits", url: "creations-produits" },
  { text: "L'entreprise", url: "entreprise" },
  { text: "Nos marchés", url: "entreprise" },
  {
    text: "Cosmétiques",
    url: "cosmetiques",
  },
  {
    text: "Nutrition/compléments alimentaires",
    url: "nutrition",
  },
  {
    text: "hygiène, nettoyant, désinfection",
    url: "hygiene",
  },
]

function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  // sx={{ bgcolor: "#287c48" }}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Box sx={{ flex: 1 }}>
            <Logo />
          </Box>

          {isMobile ? (
            <DrawerComponent menuLinks={menuLinks} />
          ) : (
            <Box
              sx={{
                textDecoration: "none",
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {menuLinks.map((link, i) => (
                <React.Fragment key={link.text}>
                  <Link
                    to={link.url}
                    sx={{
                      marginLeft: theme.spacing(2),
                      display: "flex",
                      color: "black",
                    }}
                  >
                    {link.text}{" "}
                  </Link>
                </React.Fragment>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}
export default Navbar
