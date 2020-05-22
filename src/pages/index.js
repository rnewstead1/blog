import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import pentlands from "../images/pentlands.jpg"

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  return (
    <Layout>
      <SEO title="Index" />
      <div className="home-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="left-panel" style={{ width: '65%' }}>
          <div style={{ marginBottom: '1rem' }}>
            <img src={pentlands} alt="Pentland Hills" />
            <span>Happiest in the mountains.</span>
          </div>
          <div className="blog-post-container">
            <div className="blog-post">
              <Link to={edges[0].node.frontmatter.path} style={{ textDecoration: 'none', color: '#000'}}>
                <h2>{edges[0].node.frontmatter.title}</h2>
              </Link>
              <h3>{edges[0].node.frontmatter.date}</h3>
              <div className="blog-post-content"
                  dangerouslySetInnerHTML={{ __html: edges[0].node.html }}/>
            </div>
          </div>
          <Link to="/all-posts">See all posts</Link>
        </div>
        <div className="right-panel" style={{ width: '30%' }}>
          <a class="twitter-timeline" href="https://twitter.com/powderach?ref_src=twsrc%5Etfw" data-height="1000">Latest tweets</a>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1) {
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

console.log(pageQuery)