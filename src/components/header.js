import * as React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';
import SiteWidth from './siteWidth';

const HeaderWrap = styled.header`
  padding: var(--unit) 0;
  background: #e5e5e5;
`;

const Header = ({ siteTitle }) => (
  <HeaderWrap>
    <SiteWidth>
      <h1 style={{ margin: 0 }}>
        <Link to="/">{siteTitle}</Link>
      </h1>
    </SiteWidth>
  </HeaderWrap>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
