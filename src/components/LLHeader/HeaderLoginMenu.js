import React, { useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import uuid from 'uuid/v1';
import { size } from '../Breakpoints/Breakpoints';
import Icon from '../Icons/Icon';
import useOnClickOutside from '../hooks/useOnClickOutside';
import zIndex from '../utils/zIndex';
import LogoutButton from './LogoutButton';

const Menu = styled.nav`
  position: absolute;
  z-index: ${zIndex('headerLoginMenu')};
  top: 29px;
  right: -10px;
  background: #fff;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
  min-width: 270px;
  padding: ${prop => (prop.isLoggedIn ? '0' : '20px 0')};

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

  .header-login-menu-item {
    display: flex;
    font-family: MarkProBold;
    font-weight: 400;
    color: #575859;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 16px;
    line-height: 1.2;
    padding: 10px 20px;

    .lux-lite-icon {
      margin-right: 10px;
    }

    .text {
      display: block;
    }

    &:hover,
    &:focus {
      background-color: #f5f5f5;
    }
  }
`;

const Username = styled.div`
  padding: 20px;
  border: solid #d1d7da;
  border-width: 0 0 1px 0;
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  font-family: MarkProBold;
  font-weight: 400;
  color: #575859;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 1;
  overflow-x: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  .lux-lite-icon {
    margin-right: 10px;
  }

  .text {
    display: block;
  }

  &:hover,
  &:focus {
    background: #fff;
    color: #575859;
    text-decoration: none;
  }
`;

const HeaderLoginMenu = ({
  links,
  firstName = '',
  lastName = '',
  isLoggedIn = false,
  logoutBtn = {},
  userNameIconType = '',
  invalidateSessionUrl = '',
  onClose = () => {}
}) => {
  const ref = useRef(null);

  useOnClickOutside(ref, onClose);

  return (
    <Menu ref={ref} isLoggedIn={isLoggedIn}>
      {isLoggedIn && (
        <Username position="header">
          {userNameIconType && <Icon name={userNameIconType} size={20} />}
          <span className="text">{`${firstName} ${lastName}`}</span>
        </Username>
      )}
      {links.map(item => {
        return (
          <a
            className="header-login-menu-item"
            href={item.url}
            aria-label={item.label}
            key={uuid()}
          >
            {item.iconType && <Icon name={item.iconType} size={20} />}
            <span className="text">{item.label}</span>
          </a>
        );
      })}
      {isLoggedIn && (
        <LogoutButton
          logoutBtn={logoutBtn}
          invalidateSessionUrl={invalidateSessionUrl}
        />
      )}
    </Menu>
  );
};

HeaderLoginMenu.propTypes = {
  links: PropTypes.arrayOf(PropTypes.object),
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  logoutBtn: PropTypes.object,
  userNameIconType: PropTypes.string,
  invalidateSessionUrl: PropTypes.string,
  onClose: PropTypes.func
};

export default HeaderLoginMenu;
