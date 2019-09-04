import React from "react"
import { InlineIcon } from '@iconify/react';
import gmailIcon from '@iconify/icons-simple-icons/gmail';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import githubIcon from '@iconify/icons-simple-icons/github';

const Footer = () => (
  <footer style={{ paddingTop: "1rem", marginTop: "5rem", textAlign: "center", fontWeight: 700 }}>
    {/* <img style={{width: "20px", height: "20px" }} src={mailLogo} alt="Maillogga" /> */}
    
    <ul
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "space-between",
        listStyle: "none",
        padding: 0,
      }}
    >
        <li
          style={{
            flex: "auto",
            maxWidth: "45%",
            margin: "1rem",
          }}
        >
        <a href="mailto:charlie.gustavsson@gmail.com">
      <h1>  <InlineIcon style={{color: "#E63946"}} icon={gmailIcon} /> </h1>
      </a>
        </li>
        <li
          style={{
            flex: "auto",
            maxWidth: "45%",
            margin: "1rem",
          }}
        >
        <a href="https://www.facebook.com/charlie.gustavsson.98" target="_blank" rel="noopener noreferrer">
    <h1><InlineIcon style={{color: "#008CFF"}} icon={facebookIcon} /></h1>
    </a>
        </li>
        <li
          style={{
            flex: "auto",
            maxWidth: "45%",
            margin: "1rem",
          }}
        >
        <a href="https://github.com/CharlieGust" target="_blank" rel="noopener noreferrer">
    <h1><InlineIcon style={{color: "black"}} icon={githubIcon} /></h1>
    </a>
        </li>
    </ul>  
  </footer>
)

export default Footer
