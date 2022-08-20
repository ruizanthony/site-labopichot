import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Box, Grid } from "@mui/material"
import { graphql } from "gatsby"
import { Trans, useTranslation } from "gatsby-plugin-react-i18next"

const utmParameters = `?utm_source=site-labopichot&utm_medium=accueil`

const IndexPage = () => {
  const { t } = useTranslation()

  return (
    <Layout>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="stretch"
        padding={1}
      >
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
          <Trans>IndexTitle</Trans>
        </h1>
        <ul>
          <li>
            <Trans>Livraison en 3 semaines</Trans>{" "}
          </li>
          <li>
            <Trans>
              plus de 1500 produits disponibles en standard (95% de nos produits
              sont standards)
            </Trans>
          </li>
          <li>
            {" "}
            <Trans>
              création de produits avec notre service mouliste intégré pour un
              maximum de réactivité et d'adaptabilité
            </Trans>
          </li>
        </ul>
        <Trans>
          Avec ces trois points forts, nous avons l'ambition de devenir et
          rester votre expert packaging écoresponsable, partenaire de vos
          développements et de votre prise de part de marché.
        </Trans>
      </Box>
    </Layout>
  )
}

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

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`