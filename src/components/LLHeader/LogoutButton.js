import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Icon from '../Icons/Icon';

const Button = styled.button`
  padding: 20px;
  border: solid #d1d7da;
  border-width: 1px 0 0 0;
  margin: 20px 0 0 0;
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
  cursor: pointer;
  width: 100%;
  background: none;

  .lux-lite-icon {
    margin-right: 10px;
  }

  .text {
    display: block;
  }

  &:hover,
  &:focus {
    background: #f5f5f5;
    color: #575859;
    text-decoration: none;
  }
`;

const clearSession = () => {
  sessionStorage.clear();
  window.localStorage.removeItem('user');
  window.localStorage.removeItem('sqreqresp');
  window.localStorage.setItem('clearSessionStorage', Date.now());
};

const LogoutButton = ({ logoutBtn = {}, invalidateSessionUrl }) => {
  const logoutHandler = React.useCallback(() => {
    fetch(invalidateSessionUrl, { method: 'POST' })
      .then(() => {
        clearSession();

        window.sessionStorage.setItem(
          'PreviousPageURLObj',
          JSON.stringify({ isSkip: 'YES' })
        );

        window.location.href = '/auth/glogout?TARGET=' + logoutBtn.href;
      })
      .catch(err => console.error(err));
  }, [invalidateSessionUrl, logoutBtn.href]);

  return (
    <Button onClick={logoutHandler}>
      {logoutBtn.iconType && <Icon name={logoutBtn.iconType} size={20} />}
      <span className="text">{logoutBtn.text}</span>
    </Button>
  );
};

LogoutButton.propTypes = {
  logoutBtn: PropTypes.object,
  invalidateSessionUrl: PropTypes.string
};

export default LogoutButton;
