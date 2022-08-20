import * as React from "react"
import { Link } from "gatsby-theme-material-ui"
export default function Cgv() {
  return (
    <Link to="/">
      <img
        src="/logo.svg" // using static folder
        width="100"
        alt={"Laboratoires Pichot"}
      />
    </Link>
  )
}
