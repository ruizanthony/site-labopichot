// https://material.io/inline-tools/color/
// https://bareynol.github.io/mui-theme-creator/

import { createTheme, colors } from "@mui/material"

// A custom theme for this app
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: `#effff2`,
    },
    secondary: {
      main: `#f50057`,
    },
    error: {
      main: colors.red.A400,
    },
    // background: {
    //   default: `#fff`,
    // },
  },

  typography: {
    h1: {
      fontSize: "1rem",
    },
    h4: {
      fontSize: "1rem",
    },

    // fontFamily: ["Montserrat", "sans-serif"].join(","),
  },

  components: {
    // MuiAppBar: {
    //   styleOverrides: {
    //     colorPrimary: {
    //       backgroundColor: "green",
    //     },
    //   },
    // },
  },
})

export default theme
