import React from 'react';
import styled from 'styled-components';
import HeaderSearch from './HeaderSearch';
import HeaderLogin from './HeaderLogin';
import HeaderCart from './HeaderCart';
import PropTypes from 'prop-types';

const Controls = styled.div`
  position: absolute;
  height: 42px;
  top: 0;
  right: 15px;
  display: flex;
  align-items: center;
`;

const HeaderControls = ({ shoppingCartIconModel, userLoginData }) => {
  return (
    <Controls>
      <HeaderSearch />
      <HeaderCart {...shoppingCartIconModel} />
      <HeaderLogin {...userLoginData} />
    </Controls>
  );
};

HeaderControls.propTypes = {
  shoppingCartIconModel: PropTypes.object,
  userLoginData: PropTypes.object
};

export default HeaderControls;
