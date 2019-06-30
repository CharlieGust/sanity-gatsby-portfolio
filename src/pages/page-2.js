import React from "react"
import Image from "../components/image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hejsan</h1>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <a href="mailto:charlie.gustavsson@gmail.com">
      <h2>charlie.gustavsson@gmail.com</h2>
    </a>
    <h2>facebook</h2>
    <h2>github</h2>
    <h2>linkedIn</h2>
  </Layout>
)

export default SecondPage
