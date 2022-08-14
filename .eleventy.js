module.exports = config => {
    return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
      dir: {
        input: 'src',
        output: 'dist'
      }
    };
  };

  // With the code that we have just added, we are telling
  // Eleventy that markdown files, data files and HTML
  // files should be processed by Nunjucks.


