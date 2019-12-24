import React, { useState, useEffect } from 'react';
import HeaderControlButton from './HeaderControlButton';
import PropTypes from 'prop-types';
import fetchJSON from '../utils/fetchJSON';
import { useAppContext } from '../AppContext';
import get from 'lodash-es/get';
import styled from 'styled-components';
import { size } from '../Breakpoints/Breakpoints';
import loadable from '@loadable/component';
const HeaderLoginMenu = loadable(() => import('./HeaderLoginMenu'));

const Wrapper = styled.div`
  position: relative;
  &:before {
    content: ' ';
    border-radius: 50%;
    background-color: yellow;
    width: 8px;
    height: 8px;
    display: ${prop => (prop.isLoggedIn ? 'block' : 'none')};
    position: absolute;
    left: 20px;
    top: -5px;

    @media (min-width: ${size.largeAndUp}px) {
      left: 30px;
    }
  }
`;

const getLoggedInUser = url => {
  return fetchJSON(url).then(({ ImplUserInformationResponse: res }) => {
    if (res) {
      // keep this object as simple as possible, only with relevant info
      // avoid unccessary clutter
      let loggedInUser = {
        isLoggedIn: !res.anonymouUser
      };

      if (!res.anonymouUser) {
        loggedInUser = {
          ...loggedInUser,
          ...{
            contactId: get(res, 'userDetails.contactId'),
            email: get(res, 'userDetails.user'),
            firstName: get(res, 'clientContext.contact.firstName'),
            lastName: get(res, 'clientContext.contact.lastName')
          }
        };
      }

      return loggedInUser;
    }
  });
};

const HeaderLogin = ({
  loginBtn = {},
  logoutBtn = {},
  informationRestUrl = '',
  invalidateSessionUrl = '',
  links = [],
  userNameIconType = ''
}) => {
  const [{ loggedInUser = {} }, dispatch] = useAppContext();
  const [fetchInProgress, setFetchInProgress] = useState(true);
  const [showMenu, setShowMenu] = useState(false);

  // check if the user is logged in
  useEffect(() => {
    getLoggedInUser(informationRestUrl)
      .then(res => {
        setFetchInProgress(false);
        if (res) {
          dispatch({ payload: { loggedInUser: res } });
        }
      })
      .catch(() => {
        setFetchInProgress(false);
      });
  }, [informationRestUrl, dispatch]);

  const { isLoggedIn, firstName, lastName } = loggedInUser;

  return (
    <Wrapper isLoggedIn={isLoggedIn}>
      <HeaderControlButton
        icon="login"
        text={fetchInProgress || isLoggedIn ? null : loginBtn.text}
        onClick={() => setShowMenu(!showMenu)}
      />
      {showMenu && (
        <HeaderLoginMenu
          onClose={() => setShowMenu(false)}
          links={links}
          firstName={firstName}
          lastName={lastName}
          isLoggedIn={isLoggedIn}
          logoutBtn={logoutBtn}
          userNameIconType={userNameIconType}
          invalidateSessionUrl={invalidateSessionUrl}
        />
      )}
    </Wrapper>
  );
};

HeaderLogin.propTypes = {
  loginBtn: PropTypes.object,
  informationRestUrl: PropTypes.string,
  links: PropTypes.arrayOf(PropTypes.object),
  logoutBtn: PropTypes.object,
  userNameIconType: PropTypes.string,
  invalidateSessionUrl: PropTypes.string
};

export default HeaderLogin;
