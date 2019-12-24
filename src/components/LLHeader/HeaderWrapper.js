import React from 'react';
import styled from 'styled-components';
import { size } from '../Breakpoints/Breakpoints';
import PropTypes from 'prop-types';
import { useAppContext } from '../AppContext';
import zIndex from '../utils/zIndex';

const Wrapper = styled.div`
  @media (min-width: ${size.largeAndUp}px) {
    position: ${prop => (prop.promoBannerExists ? 'absolute' : 'relative')};
    ${prop => (prop.promoBannerExists ? 'top' : 'margin-top')}: 20px;
    width: 100%;
    z-index: ${zIndex('header')};
  }
`;

const HeaderWrapper = ({ children }) => {
  const [{ promoBannerExists }] = useAppContext();
  return <Wrapper promoBannerExists={promoBannerExists}>{children}</Wrapper>;
};

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired
};

export default HeaderWrapper;
