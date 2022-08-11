import * as React from "react"
import { Link } from "gatsby"

import * as styles from "./NavBar.module.css"

const menuLinks = [
  { text: "Accueil", url: "" },
  { text: "Creation de produit", url: "creation-produits" },
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

const NavBar = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        {menuLinks.map((link, i) => (
          <li key={link.name}>
            <Link to={link.link}>{link.name}</Link>
            {i !== menuLinks.length - 1 && <> · </>}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
