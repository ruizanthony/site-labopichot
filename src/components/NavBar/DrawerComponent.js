import React, { useState } from "react"
import { Divider, Drawer, List, ListItem, ListItemText } from "@mui/material"
//import { Link } from "gatsby"

import {
  BottomNavigationAction,
  Button,
  CardActionArea,
  Fab,
  IconButton,
  Link,
} from "gatsby-theme-material-ui"

import MenuIcon from "@mui/icons-material/Menu"

function DrawerComponent({ menuLinks }) {
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
                      textDecoration: "none",
                      color: "blue",
                      fontSize: "20px",
                    }}
                  >
                    {link.text}
                  </Link>
                </ListItemText>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        sx={{ color: "white" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  )
}
export default DrawerComponent
