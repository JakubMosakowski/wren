module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {}
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/content/posts`
      }
    },
    `gatsby-plugin-netlify-cms`
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `My Blog Title`,
    author: `My Name`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/gatsbyjs`
      },
      {
        name: `github`,
        url: `https://github.com/gatsbyjs`
      }
    ]
  }
}
