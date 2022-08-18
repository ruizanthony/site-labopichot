import React from "react"
import styles from "../constants/styles"

const Footer = ({ siteTitle }) => (
  <footer style={styles.center}>
    © {new Date().getFullYear()} {siteTitle}
  </footer>
)

export default Footer
