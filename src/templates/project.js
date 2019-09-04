import React from "react"
import { graphql } from "gatsby"
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
      fluid={data.sanityProject.image.asset.fluid}
      alt={data.sanityProject.title}
    />
    <h1 style={{ textAlign: "center", color: "white" }}>
    <a href={data.sanityProject.link} target="_blank" rel="noopener noreferrer">{data.sanityProject.title}</a>
    </h1>
    <p style={{ textAlign: "center", color: "#cecece" }}>
      {data.sanityProject.description}
    </p>
    <h2 style={{ textAlign: "center" }}>
    </h2>
  </Layout>
)
