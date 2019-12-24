import React from 'react';
import styled from 'styled-components';
import { size } from '../Breakpoints/Breakpoints';
import useOnClickOutside from '../hooks/useOnClickOutside';
import PropTypes from 'prop-types';
import zIndex from '../utils/zIndex';

const Popup = styled.div`
  position: absolute;
  z-index: ${zIndex('headerEmptyCartPopup')};
  top: 29px;
  right: -10px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  min-width: 250px;
  padding: 20px;
  font-size: 16px;
  font-family: MarkProBold;

  &:before {
    position: absolute;
    width: 0;
    height: 0;
    content: '';
    border-style: solid;
    border-color: transparent transparent #fff transparent;
    border-width: 0 10px 10px 10px;
    right: 8px;
    top: -10px;

    @media (min-width: ${size.largeAndUp}px) {
      right: 12px;
    }
  }
`;

const EmptyCartPopup = ({ onClose = () => {} }) => {
  const ref = React.useRef(null);

  useOnClickOutside(ref, onClose);

  return <Popup ref={ref}>You have no items in your cart</Popup>;
};

EmptyCartPopup.propTypes = {
  onClose: PropTypes.func
};

export default EmptyCartPopup;
