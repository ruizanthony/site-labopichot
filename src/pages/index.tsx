import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Box, Grid } from "@mui/material"

const utmParameters = `?utm_source=site-labopichot&utm_medium=accueil`

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
        Laboratoires Pichot, votre expert packaging écoresponsable, de l'idée au
        flacon plastique recyclable et/ou recyclé, en moins de 3 semaines.
      </h1>
      <ul>
        <li>Livraison en 3 semaines </li>
        <li>
          plus de 1500 produits disponibles en standard (95% de nos produits
          sont standards)
        </li>
        <li>
          {" "}
          création de produits avec notre service mouliste intégré pour un
          maximum de réactivité et d'adaptabilité
        </li>
      </ul>
      Avec ces trois points forts, nous avons l'ambition de devenir et rester
      votre expert packaging écoresponsable, partenaire de vos développements et
      de votre prise de part de marché.
    </Box>
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
