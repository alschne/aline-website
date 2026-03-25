// Applies defaults to every markdown file in content/.
// The permalink pattern means content/salary-benchmarking.md
// gets written to articles/salary-benchmarking/index.html
// which serves at yoursite.com/articles/salary-benchmarking/

module.exports = {
  layout: "article.njk",
  permalink: "/articles/{{ page.fileSlug }}/index.html",
};