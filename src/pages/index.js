import React from "react"
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

export const query = graphql`
  {
    allSanityProject {
      edges {
        node {
          title
          description
          slug {
            current
          }
          image {
            asset {
             fluid{
                ...GatsbySanityImageFluid
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <ul
    style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'space-between',
        listStyle: 'none',
        padding: 0
          }}
    >
      {data.allSanityProject.edges.map(({ node: project }) => (
        <li
          key={project.slug.current}
           style={{
            flex: "auto",
            minWidth: "30%",
            maxWidth: '45%',
            margin: '1rem',
            border: "3px solid #2E8B57",
            borderRadius: "5px",
          }}
        >
        {/* style={{ borderBottom: "3px solid black" }} */}
          <Image fluid={project.image.asset.fluid} alt={project.title} />
          <h2 style={{ margin: "0.5rem", fontsize: "20px" }}>
            {/* style{{ color: black}} */}
            <Link to={project.slug.current}>{project.title}</Link>
          </h2>
          <p style={{ margin: "0.5rem" }}>{project.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export default IndexPage
