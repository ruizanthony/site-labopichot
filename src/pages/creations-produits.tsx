import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import Seo from "../components/Seo"
import { Container, Box } from "@mui/material"

const CreationProduits = () => {
  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="stretch" padding={1}>>
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
          <b>Création de produits avec notre service moule intégré</b>
        </h1>
      </Box>
      <div>
        Chez Laboratoires Pichot, nous partons toujours du vrai besoin client.
        Nos clients créent des gammes de produits cohérentes, pertinentes et
        attirantes pour le consommateur. Le désir d'acheter est souvent
        influencé par le packaging. Ainsi, notre rôle est de vous accompagner
        dans la création de gammes de pack ajusté précisemment à vos besoins.
        C'est cette fabrication de flacon à façon qui nous caractérise. Nous
        fabriquons en France 100% de nos flacons plastiques dans notre site de
        production unique localisé dans le territoire du Livradois Forez, mais
        aussi nous concevons et fabriquons en interne nos moules. C'est cette
        intégration en interne qui explique en partie notre grande réactivité.
        En moyenne, nous fabriquons un moule par semaine, et ce depuis 30 ans.
        Nous créeons 95% de nos moules dans nos standards. Les 5% restants sont
        les moules exclusifs que nous fabriquons spécifiquement pour certains
        produits avec un besoin de démarcation forte (une forme exclusive), ou
        pour porter le nom d'une marque.
      </div>
    </Layout>
  )
}

export const Head = () => (
  <Seo
    title="Creation de gammes de produits"
    description="Notre vrai différence provient de nos compétences en conception d'outillage. Ainsi nous sommes d'un réactivité inégalée dans la satisfaction de vos besoins en nouveauté packaging."
    image="/images/example.png"
    // Boolean indicating whether this is an article:
    // article
  />
)

export default CreationProduits
