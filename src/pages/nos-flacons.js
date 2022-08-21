import * as React from "react"
import { graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import Flacon from "../components/Flacon"
import Bouchon from "../components/Bouchon"

import * as styles from "./flacons.module.css"
import { useTranslation } from "react-i18next"
import { isBouchon } from "../utils/isBouchon"

const FlaconPage = ({ data }) => {
  const { t } = useTranslation()
  return (
    <Layout>
      <section className={styles.wrapper}>
        <StaticImage
          src="../images/flacons.jpg"
          alt="flacons plastiques"
          layout="fullWidth"
        />
        <h1 className={styles.heading}>{t("FlaconPageTitle")}</h1>
        <div>
          <p>{t("FlaconPageDescription")}</p>
        </div>
      </section>
      <section className={styles.flacons}>
        <div className="flaconList">
          <h2 className="flaconHeading">Flacons</h2>
          <ul className={styles.flacons__list}>
            {data.dbp.cielArticles
              ?.filter(a => !isBouchon(a))
              .map((a, index, array) => (
                <Flacon key={a.code} article={a} index={index} array={array} />
              ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

// export const Head = ({ data }) => {
//   // const { t } = useTranslation() // useTranslation doesnt seem to work with Head api
//   const locales = data.locales.edges[0].node.data
//   let obj = undefined
//   if (locales) {
//     obj = JSON.parse(locales)
//   }
//   return (
//     <Seo
//       title={obj?.FlaconPageTitle}
//       description={obj?.FlaconPageDescription}
//       image={obj?.FlaconPageImage}
//     />
//   )
// }

export const query = graphql`
  query ($language: String!) {
    dbp {
      cielArticles(
        filter: {
          and: {
            code: { notStartsWith: "5" }
            and: {
              code: { notStartsWith: "C" }
              and: { code: { notStartsWith: "T" } }
            }
          }
        }
      ) {
        bague
        code
        couleur
        designationLongue
        diametreaMm
        diametrebMm
        famille
        matiere
        qteParColis
        stockReel
        stockTheorique
        volumeMl
        typeColis
        volumeaMl
        volumebMl
        vrac
      }
    }
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

// productionCielsByCodeConnection(
//   filter: { timestampFinProd: { greaterThan: "20180101" } }
// ) {
//   totalCount
// }
// productionCielsByCode(orderBy: TIMESTAMP_FIN_PLANNIFIE_DESC, first: 1) {
//   timestampFinProd
// }

export default FlaconPage
