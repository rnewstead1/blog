import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import instagramIcon from '../images/instagram.png';
import mountains from '../images/mountains.svg';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `teal`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 800,
        padding: `1.45rem 1.0875rem 0.5rem 1.0875rem`,
      }}
    >
      <div style={{ backgroundImage: `url("${mountains}")` }}>
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
              backgroundColor: `teal`,
              paddingRight: `10px`
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className="top-nav" style={{ paddingTop: `1.45rem`, display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <ul>
            <li><Link to="/" style={{ color: `white`, textDecoration: `none`, }}>home</Link></li>
            <li><Link to="/all-posts" style={{ color: `white`, textDecoration: `none`, }} >running posts</Link></li>
            <li><Link to="/tech" style={{ color: `white`, textDecoration: `none`, }} >tech stuff</Link></li>
          </ul>
        </div>
        <div>
          <ul>
            <li><a href="https://www.instagram.com/powderach"><img src={instagramIcon} alt="instagram" width="30px" /></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
)


Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
