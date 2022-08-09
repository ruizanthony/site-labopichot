import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const utmParameters = `?utm_source=site-labopichot&utm_medium=accueil`

const links = [
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

const moreLinks = [
  { text: "Linkedin Labopichot", url: "https://www.linkedin.com/company/10460217/admin/" },
  { text: "Blog packaging ecoresponsable", url: "https://packaging-ecoresponsable.com/" },
]
const IndexPage = () => (
  <Layout>
    <Seo title="Accueil" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/natexpo.jpg"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        <b>Laboratoires Pichot</b>
      </h1>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Le packaging made in France"
description="Le packaging, les flacons en plastique écoresponsables made in France. Creation de moules en interne. Le leader français du pack pour le complément alimentaire."
image="/images/piluliersBio.jpg"
pathname="/"
// Boolean indicating whether this is an article:
// article
/>

export default IndexPage
