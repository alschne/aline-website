module.exports = function(eleventyConfig) {

  // --- Collections ---
  // Picks up every .md file in /content and sorts newest-first.
  eleventyConfig.addCollection("articles", function(collectionApi) {
    return collectionApi
      .getFilteredByGlob("./src/articles/*.md")
      .reverse(); // newest first
  });

  // --- Filters ---

  // Human-readable date: "March 22, 2026"
  eleventyConfig.addFilter("dateReadable", (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC", // prevents off-by-one date errors
    });
  });

  // ISO date for <time datetime="..."> attribute: "2026-03-22"
  eleventyConfig.addFilter("dateIso", (date) => {
    return new Date(date).toISOString().split("T")[0];
  });

  // Related posts lookup by slug
  eleventyConfig.addFilter("getBySlug", (collection, slug) => {
    return collection.find(post => post.fileSlug === slug);
  });

  // --- Input / Output ---
  return {
    dir: {
      input: "src",
      output: ".",          // write directly into repo root
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};