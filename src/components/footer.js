import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer style={{ width: "100%", textAlign: "center", marginTop: "2rem", fontWeight: 700 }}>
    {/* <img style={{width: "20px", height: "20px" }} src={mailLogo} alt="Maillogga" /> */}
    <Link style={{ color: "#177741", fontWeight: "300" }} to="/page-2">@ Kontakt</Link>
  </footer>
)

export default Footer
