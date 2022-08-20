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
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"

import Logo from "../Logo"

import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
  useTheme,
  useMediaQuery,
  Box,
  Switch,
  FormGroup,
  FormControlLabel,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
} from "@mui/material"
import DrawerComponent from "./DrawerComponent"
import { graphql } from "gatsby"

const menuLinks = [
  { text: "Accueil", url: "/" },
  { text: "Créations de produits", url: "/creations-produits" },
  { text: "L'entreprise", url: "/entreprise" },
  { text: "Nos marchés", url: "/nos-marches" },
  {
    text: "Cosmétiques",
    url: "/cosmetiques",
  },
  {
    text: "Nutrition/compléments alimentaires",
    url: "/nutrition",
  },
  {
    text: "hygiène, nettoyant, désinfection",
    url: "/hygiene",
  },
  {
    text: "Contact",
    url: "/contact",
  },
]

function Navbar() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const { languages, changeLanguage, language } = useI18next()
  const { t } = useTranslation()

  // sx={{ bgcolor: "#287c48" }}
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ width: "100%" }}>
        <Toolbar>
          <Box sx={{ mr: "2rem" }}>
            <Logo />
          </Box>
          <FormControl>
            <InputLabel id="language-select-label">Language</InputLabel>
            <Select
              labelId="language-select-label"
              id="language-select"
              value={language}
              label="lang"
              onChange={e => changeLanguage(e.target.value)}
            >
              {languages.map(lng => (
                <MenuItem value={lng}>{lng}</MenuItem>
              ))}
            </Select>
          </FormControl>

          {isMobile ? (
            <DrawerComponent menuLinks={menuLinks} t={t} />
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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`
