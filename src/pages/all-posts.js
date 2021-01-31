import React from "react"
import { graphql } from "gatsby"
import PostLink from "../components/post-link"
import PostExcerpt from "../components/post-excerpt"
import Layout from "../components/layout"
import SEO from "../components/seo"

const CURRENT_YEAR = '2021';

const AllPostsPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const RecentPosts = edges
    .filter(edge => edge.node.frontmatter.date.includes(CURRENT_YEAR))
    .map(edge => <PostExcerpt key={edge.node.id} post={edge.node} />)
  
  const OlderPosts = edges
    .filter(edge => !edge.node.frontmatter.date.includes(CURRENT_YEAR))
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
    
  return (
    <Layout>
      <SEO title="Running posts" />
      <div>
        <div>{RecentPosts}</div>
      </div>
      <div>
        <h2>Older</h2>
        <div>{OlderPosts}</div>   
      </div>
    </Layout>
  )
}

export default AllPostsPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          tags: {
            nin: "tech"
          }
        }
      } ) {
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