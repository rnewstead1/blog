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
  const LatestPost = edges[0].node;
  return (
    <Layout>
      <SEO title="Home" />
      <div className="home-container" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div className="left-panel" style={{ width: '65%' }}>
          <div style={{ marginBottom: '1rem' }}>
            <img src={pentlands} alt="Pentland Hills" />
            <div style={{ marginBottom: '1rem', width: '80%', marginLeft: 'auto', marginRight: 'auto', padding: '1rem' }}>
              <i>Hill repeats & recover, <a href="https://linktr.ee/runwildandbepoetry" style={{ textDecoration: 'none', color: '#000' }}>Sydney Zester</a></i><br/><br/>
              <div style={{ textAlign: 'right' }}>
                some days we bundle up<br/>
                and run hill repeats outside<br/>
                in the hollow winter air.<br/>
                other days we wrap up cozy<br/>
                and slurp mugs of coffee<br/>
                while snug on the sofa.<br/>
                i think it’s best to do both.<br/>
              </div>
            </div>
            <hr />
            <p>I'm moving my blog here. For older posts go <a href="https://powderach-running.blogspot.com/">here</a>.</p>
          </div>
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
          <Link to="/all-posts">See all running posts</Link>
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
