const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
  
    const BlogPostTemplate = path.resolve(`./src/templates/blog-page.js`);
    const BlogPostQuery = await graphql(`
  {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "Blog"}}}) {
      nodes {
        fields {
          slug
        }
      }
    }
    
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;
    if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `pages` });
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      });
    }
  };