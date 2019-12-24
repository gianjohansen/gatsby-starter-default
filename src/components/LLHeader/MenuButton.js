import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ScreenReaderText from '../ScreenReaderText';
import { useAppContext } from '../AppContext';
import { useHeaderContext } from './HeaderContext';
import Icon from '../Icons/Icon';

const StyledMenuButton = styled.button`
  border: none;
  border-radius: 0;
  background: #191919;
  color: #fff;
  cursor: pointer;
  padding: 0;
  margin: 0;
  margin-left: 10px;
  z-index: 1;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  &:focus,
  &:hover {
    background: #191919;
  }
`;

function MenuButton({ onClick }) {
  const [open, setOpen] = useState(false);
  const [, appDispatcher] = useAppContext();
  const [{ searchOpen }, headerContextDispatcher] = useHeaderContext();

  // when search is open then close then reset the menu button
  React.useEffect(() => {
    if (searchOpen) {
      setOpen(false);
    }
  }, [searchOpen]);

  function handleClick() {
    const toggled = !open;
    if (!toggled) {
      appDispatcher({ payload: { showMegaNav: false } });
    } else {
      headerContextDispatcher({ payload: { searchOpen: false } });
    }
    setOpen(toggled);
    onClick(toggled);
  }

  return (
    <StyledMenuButton aria-expanded="false" onClick={handleClick}>
      <ScreenReaderText>Menu</ScreenReaderText>
      {!open && <Icon name="menu" color="#fff" />}
      {open && <Icon name="close" color="#fff" />}
    </StyledMenuButton>
  );
}

MenuButton.propTypes = {
  onClick: PropTypes.func
};

export default MenuButton;
