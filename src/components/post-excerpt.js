import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
    <div className="blog-post-container" style={{
            marginBottom: '1rem',
            borderBottom: '1px solid gray',
            paddingBottom: '0.5rem',
        }}
    >
        <div className="blog-post" style={{ paddingBottom: '0.5rem' }}>
            <Link to={post.frontmatter.path} style={{ textDecoration: 'none' }}>
                <h3>{post.frontmatter.title}</h3>
            </Link>
            <div className="blog-post-content" dangerouslySetInnerHTML={{ __html: post.excerpt }}/>
        </div>
        <Link to={post.frontmatter.path} style={{ textDecoration: 'none', color: '#000' }}>
            Read more
        </Link>
    </div>
)

export default PostLink