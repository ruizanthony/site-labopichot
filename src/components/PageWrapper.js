import { Box, Container } from "@mui/material"
import React from "react"

export default function PageWrapper({ children }) {
  return (
    <Box
      sx={{
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
      <Container sx={{ justifyContent: "center", width: "80%" }}>
        {children}
      </Container>
    </Box>
  )
}
