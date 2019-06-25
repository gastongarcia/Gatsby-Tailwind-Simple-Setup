import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Gatsby Tailwind Simple Setup" />

    <div className="md:w-1/2 w-10/12 mx-auto bg-gray-300 mt-5 p-3 rounded-lg">
      <p className="text-lg my-5">Gatsby &amp; Tailwind</p>
      <p className="text-base mb-5">This is a very simple setup of <a href="https://tailwindcss.com/" target="_blank" className="underline">Tailwind</a> in a <a href="https://www.gatsbyjs.org" target="_blank" className="underline">Gatsby</a> project. The only plugins it uses are <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-postcss/?=post" target="_blank" className="underline">Gatsby Post CSS</a> and <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/?=purge" target="_blank" className="underline">Gatsby Purge CSS</a>.</p>
    </div>

    <div className="md:w-1/2 w-10/12 mx-auto bg-gray-200 mt-5 p-3 rounded-lg">
      <p className="text-lg my-5">Setup</p>
      <p className="text-base mb-5">You can download or clone the source from it's <a href="https://github.com/gastongarcia/Gatsby-Tailwind-Simple-Setup" target="_blank" className="underline">Github repo here</a>. Hope it helps.</p>
    </div>

  </Layout>
)

export default IndexPage
