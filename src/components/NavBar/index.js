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

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material"
import DrawerComponent from "./DrawerComponent"

const menuLinks = [
  { text: "Accueil", url: "" },
  { text: "Créations de produits", url: "creations-produits" },
  { text: "L'entreprise", url: "entreprise" },
  {
    text: "Showcase",
    url: "showcase",
  },
  {
    text: "Cosmetiques",
    url: "cosmetiques",
  },
  {
    text: "Nutrition/compléments alimentaires",
    url: "nutrition",
  },
  {
    text: "hygiêne, nettoyant, désinfection",
    url: "hygiene",
  },
]

function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  // sx={{ bgcolor: "#287c48" }}
  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: "1", cursor: "pointer" }}>
          Laboratoires Pichot
        </Typography>
        {isMobile ? (
          <DrawerComponent menuLinks={menuLinks} />
        ) : (
          <div
            sx={{
              textDecoration: "none",
              color: "white",
              fontSize: "20px",
              marginLeft: theme.spacing(20),
              "&:hover": {
                color: "black",
                borderBottom: "1px solid white",
              },
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
          </div>
        )}
      </Toolbar>
    </AppBar>
  )
}
export default Navbar
