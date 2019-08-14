import React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div style={{
      width: "80%"
    }}>
    <div style={{ width: `35%`, marginBottom: `1.45rem`, marginRight: "1.45rem", float: "left"}}>
      <Image />
    </div>
    <div style={{color: "white", paddingBottom: "2.5rem"}}>
      <p>
      Mitt namn är Charlie Gustavsson, jag är intresserad av webbutveckling. Utvecklar det mesta i React men har kunskaper i de flesta 
      webbrelaterade språk och tekniker. Har ni några funderingar eller förslag kontakta mig gärna, helst på mail.
      </p>
      </div>

    </div>
    <div>
    <a href="mailto:charlie.gustavsson@gmail.com">
      <h2>charlie.gustavsson@gmail.com</h2>
    </a>
    <a href="https://www.facebook.com/charlie.gustavsson.98" target="_blank">
    <h2>facebook</h2>
    </a>
    <a href="https://github.com/CharlieGust" target="_blank">
    <h2>github</h2>
    </a>
    </div>
  </Layout>
)

export default SecondPage
