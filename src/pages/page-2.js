import React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { InlineIcon } from '@iconify/react';
import gmailIcon from '@iconify/icons-simple-icons/gmail';
import facebookIcon from '@iconify/icons-simple-icons/facebook';
import githubIcon from '@iconify/icons-simple-icons/github';


const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
   
    <div style={{ border: "2px solid black", width: `25%`,  marginRight: "1.45rem", float: "left"}}>
      <Image />
    </div>
    <div style={{color: "white", paddingBottom: "4.5rem"}}>
      <p>
      Mitt namn är Charlie Gustavsson, jag är intresserad av webbutveckling. Utvecklar det mesta i React men har kunskaper i de flesta 
      webbrelaterade språk och tekniker. Har ni några funderingar eller förslag kontakta mig gärna, helst på mail.
      </p>
      <a href="mailto:charlie.gustavsson@gmail.com">
      <h3>  <InlineIcon icon={gmailIcon} /> charlie.gustavsson@gmail.com </h3>
    </a>
    <a href="https://www.facebook.com/charlie.gustavsson.98" target="_blank" rel="noopener noreferrer">
    <h3><InlineIcon  icon={facebookIcon} /> facebook</h3>
    </a>
    <a href="https://github.com/CharlieGust" target="_blank" rel="noopener noreferrer">
    <h3><InlineIcon icon={githubIcon} /> github</h3>
    </a>
      </div>

  </Layout>
)

export default SecondPage
