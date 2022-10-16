import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>About Us</h1>
    <p>We are Fresco, a supermarket specializing in providing top quality meats and produce at great prices to the southeast Houston area.</p>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="About Us" />

export default AboutPage