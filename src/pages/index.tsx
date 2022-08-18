import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Box, Grid } from "@mui/material"

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
  {
    text: "Linkedin Labopichot",
    url: "https://www.linkedin.com/company/10460217/admin/",
  },
  {
    text: "Blog packaging ecoresponsable",
    url: "https://packaging-ecoresponsable.com/",
  },
]
const IndexPage = () => (
  <Layout>
    <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>
      <StaticImage
        src="../images/natexpo.jpg"
        loading="eager"
        width={300}
        layout="constrained" // limit max to width=500
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Livraison en 3 semaines, plus de 1500 produits disponibles en standard,
        creation de moules
      </h1>
    </Box>
    <ul>
      <Grid container spacing={3}>
        {links.map(link => (
          <Grid item xs={12} sm={6} md={4} key={link.text}>
            <li key={link.url}>
              <a href={`${link.url}${utmParameters}`}>{link.text} ↗</a>
              <p>{link.text}</p>
            </li>
          </Grid>
        ))}
      </Grid>
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

export const Head = () => (
  <Seo
    title="Le packaging made in France"
    description="Le packaging, les flacons en plastique écoresponsables made in France. Creation de moules en interne. Le leader français du pack pour le complément alimentaire."
    image="/images/piluliersBio.jpg"
    // Boolean indicating whether this is an article:
    // article
  />
)

export default IndexPage
