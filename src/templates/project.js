import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Image from "gatsby-image"

export const query = graphql`
  query($slug: String) {
    sanityProject(slug: { current: { eq: $slug } }) {
      title
      description
      link
      image {
        asset {
          fluid {
            ...GatsbySanityImageFluid
          }
        }
      }
    }
  }
`

export default ({ data }) => (
  <Layout>
    <Image
      style={{ border: "3px double black", borderRadius: "5px" }}
      fluid={data.sanityProject.image.asset.fluid}
      alt={data.sanityProject.title}
    />
    <h1 style={{ textAlign: "center", color: "white" }}>
      {data.sanityProject.title}
    </h1>
    <p style={{ textAlign: "center", color: "#cecece" }}>
      {data.sanityProject.description}
    </p>
    <h2 style={{ textAlign: "center" }}>
      <a href={data.sanityProject.link}>Link</a>
    </h2>
  </Layout>
)
