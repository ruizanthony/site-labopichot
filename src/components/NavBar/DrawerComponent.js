import React, { useState } from "react"
import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material"

import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui"
import { useI18next, useTranslation } from "gatsby-plugin-react-i18next"

import MenuIcon from "@mui/icons-material/Menu"

function DrawerComponent({ menuLinks, t }) {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <>
      <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
        <List>
          {menuLinks.map((link, i) => (
            <React.Fragment key={link.text}>
              <ListItem onClick={() => setOpenDrawer(false)}>
                <ListItemText>
                  <Link
                    to={link.url}
                    sx={{
                      color: "black",
                      fontSize: "20px",
                    }}
                  >
                    {t(link.text)}
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
        Menu
        <MenuIcon />
      </IconButton>
    </>
  )
}
export default DrawerComponent
