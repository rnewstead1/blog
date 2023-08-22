import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const LatestPost = edges[0].node;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-container">
        <div className="blog-post-container">
          <div className="blog-post">
            <Link to={LatestPost.frontmatter.path} style={{ textDecoration: 'none', color: '#000'}}>
              <h2>{LatestPost.frontmatter.title}</h2>
            </Link>
            <h3>{LatestPost.frontmatter.date}</h3>
            <div className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: LatestPost.html }}/>
          </div>
        </div>
        <hr />
        <Link to="/all-posts">See all running posts</Link>
        <p>Older posts <a href="https://powderach-running.blogspot.com/">here</a>.</p>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: {
        frontmatter: {
          tags: {
            nin: "tech"
          }
        }
      }
      limit: 1
      ) {
      edges {
        node {
          html
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
        }
      }
    }
  }
`
