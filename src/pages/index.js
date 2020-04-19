import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" description="This is a sample website for the Gatsby crash course" />
    <h1>Welcome to my wesbite</h1>
    <p>This is a sample site for the Gatsby crash course</p>
  </Layout>
)

export default IndexPage
