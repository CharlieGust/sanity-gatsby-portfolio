import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
{
  /* background: `rgb(27, 28, 29)`, */
}

const Header = ({ siteTitle }) => (     
  <header
    style={{
      backgroundColor: "#282828",
      marginBottom: `1.45rem`,
      borderBottom: "4px double black",
      textAlign: "center",
    }}
  >
     <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            letterSpacing: "2px",
            textDecoration: "none",
          }}
        >
          Challes startsida
        </Link>
      </h1>
      <h2 style={{ margin: 0, padding: 10}}>
        <Link
          to="page-3"
          style={{
            letterSpacing: "2px",
            textDecoration: "none",
          }}
        >
          Mina skills
        </Link>
      </h2>
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
