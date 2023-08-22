import React from "react"
import { graphql } from "gatsby"
import PostExcerpt from "../components/post-excerpt"
import Layout from "../components/layout"
import SEO from "../components/seo"
import profilePhoto from "../images/RachelNormand.jpeg"

const TechPostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const TechPosts = edges
    .map(edge => <PostExcerpt key={edge.node.id} post={edge.node} />)
  
  return (
    <Layout>
      <SEO title="Tech stuff" />
      <div>
        <div className="home-container-two-column" style={{ 'border-bottom': '1px dotted gray' }}>
          <div className="left-panel">
            <h2>Rachel Normand</h2>
            <p>Software Engineer</p>
            <ul style={{ listStyle: `none` }}>
              <li><a href="/cv">Curriculum Vitae</a></li>
              <li><a href="http://github.com/rnewstead1">Github</a></li>
              <li><a href="https://www.linkedin.com/in/rnewstead/">LinkedIn</a></li>
              <li><a href="https://rnewstead1.github.io/presentations/">Presentations</a></li>
            </ul>
          </div>
          <div className="right-panel">
            <img style={{ width: '70%' }} src={profilePhoto}></img>
          </div>
        </div>
        <div>
          <h2>Tech blog posts</h2>
          {TechPosts}
        </div>
    </div>
    </Layout>
  )
}

export default TechPostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: {
            frontmatter: {
              tags: {
                in: "tech"
              }
            }
          }
        ) {
      edges {
        node {
          id
          excerpt(format: HTML)
          frontmatter {
            date(formatString: "MMM YYYY")
            path
            title
            tags
          }
        }
      }
    }
  }
`