import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import SiteWidth from "./SiteWidth"
import styledComponentsCjs from "styled-components"

const HeaderWrap = styledComponentsCjs.header`
  padding: var(--unit) 0;
  background: #e5e5e5;
`

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <SiteWidth>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </SiteWidth>
  </HeaderWrap>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
