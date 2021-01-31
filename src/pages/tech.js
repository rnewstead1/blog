import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import PostExcerpt from "../components/post-excerpt"
import Layout from "../components/layout"
import SEO from "../components/seo"
import profilePhoto from "../images/RachelNormand.jpg"

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
      <div className="home-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="left-panel" style={{ width: '65%' }}>
            <div>{TechPosts}</div>
        </div>
        <div className="right-panel" style={{ width: '30%' }}>
          <img style={{ width: '70%', filter: 'grayscale(100%)' }} src={profilePhoto}></img>
          <h2>Rachel Normand</h2>
          <p>Software Engineer</p>
          <ul style={{ listStyle: `none` }}>
            <li><a href="/cv">Curriculum Vitae</a></li>
            <li><a href="http://github.com/rnewstead1">Github</a></li>
            <li><a href="https://www.linkedin.com/in/rnewstead/">LinkedIn</a></li>
            <li><a href="https://rnewstead1.github.io/presentations/">Presentations</a></li>
          </ul>
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