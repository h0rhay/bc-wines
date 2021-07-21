import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./Header"
import SiteWidth from "./SiteWidth"
import styledComponentsCjs from "styled-components"

const Footerwrap = styledComponentsCjs.footer`
  padding: var(--unit) 0;
  background: #e9e9e9;
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
    <main>{children}</main>
    <Footerwrap>
      <SiteWidth>
        © {new Date().getFullYear()}, Built with
        {` `}
        <span>❤️</span>
      </SiteWidth>
    </Footerwrap>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
