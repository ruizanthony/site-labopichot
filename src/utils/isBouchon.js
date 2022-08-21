export const isBouchon = article => {
  if (
    article &&
    article.famille &&
    (article.famille.includes("BOUCHON") ||
      article.famille === "BOUCHON" ||
      article.famille === "NEGOCE" ||
      article.famille === "CAPES")
  ) {
    return true
  } else {
    return false
  }
}
