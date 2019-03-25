import React from "react"
import {Link} from "gatsby"

const Footer = () => (
  <footer style={{ marginTop: "2rem", textAlign: "center", fontWeight: 700 }}>
    {/* <img style={{width: "20px", height: "20px" }} src={mailLogo} alt="Maillogga" /> */}
    <Link
    to="/page-2"
    >
    Kontakt
    </Link>
  </footer>
)

export default Footer
