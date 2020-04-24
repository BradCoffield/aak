module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("images");
  // eleventyConfig.setUseGitIgnore(false);
  // eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.setTemplateFormats([
    "md",
    "css",
    "html",
    "jpg",
    "doc",
    "png",
    "gif",
    "ico",
  ]);

  return {
    dir: {
      input: "./", // Equivalent to Jekyll's source property
      output: "_site", // Equivalent to Jekyll's destination property
    },
    passthroughFileCopy: true,
    includes: "_includes",
    layouts: "_layouts",
  };
};
