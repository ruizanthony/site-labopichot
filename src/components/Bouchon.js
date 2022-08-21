import * as React from "react"
import PropTypes from "prop-types"

import * as styles from "./article.module.css"

// Transform date to human readable format.
const humanDate = date => {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

const Bouchon = ({ article, index, array }) => (
  <li className={styles.article}>
    <div className={styles.article__title}>
      <a href={article?.url}>
        {" "}
        Bouchon: {article.designationLongue} ({index}/{array.length})
      </a>
    </div>
    <div className={styles.article__meta}>
      {Object.keys(article)
        .filter(key =>
          [
            "designationLongue",
            "bague",
            "code",
            "couleur",
            "famille",
            "matiere",
          ].includes(key)
        )
        .map(key => (
          <div>
            {" "}
            {key} : {article[key]}
          </div>
        ))}
    </div>
  </li>
)

Bouchon.propTypes = {
  article: PropTypes.object.isRequired,
}

Bouchon.defaultProps = {
  article: [],
}

export default Bouchon
