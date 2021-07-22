import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Sitewrap = styled.div`
  width: calc(var(--unit) * 60);
  max-width: 90vw;
  margin: 0 auto;
`;
const SiteWidth = ({ children }) => <Sitewrap>{children}</Sitewrap>;

SiteWidth.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SiteWidth;
