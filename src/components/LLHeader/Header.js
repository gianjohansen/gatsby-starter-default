import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import HeaderNavLevel2Desktop from './HeaderNavLevel2Desktop';
import OptusLogo from './OptusLogo';
import HeaderContext, { reducer } from './HeaderContext';
import * as Styled from '../sharedStyles';
import HeaderNavLevel1Desktop from './HeaderNavLevel1Desktop';
import HeaderNavLevel1Phone from './HeaderNavLevel1Phone';
import HeaderWrapper from './HeaderWrapper';
import { LargeAndUp, LargeDown } from '../Breakpoints/Breakpoints';
import HeaderControls from './HeaderControls';
import SearchBox from './SearchBox';
import get from 'lodash-es/get';

const HeaderTop = styled.div`
  display: flex;
  height: 42px;
  position: relative;
  background: #000;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

/**
 * Get active level1 nav item
 */
function getActiveLevel1NavItemIndex(
  currentPageRootKey,
  currentPageRootUrl,
  navigationModel
) {
  const rootUrl =
    currentPageRootUrl || window.localStorage.getItem(currentPageRootKey) || '';
  return get(navigationModel, 'childNavItems', []).findIndex(item => {
    // ignore url params - super preview mode fix
    return item.cta.link.split('?')[0] === rootUrl;
  });
}

/**
 * Get the level2 selected index
 */
function getLevel2ActiveNavItem(
  navItems = [],
  currentPageTopParentKey,
  currentPageTopParentUrl
) {
  const topParentUrl =
    currentPageTopParentUrl ||
    localStorage.getItem(currentPageTopParentKey) ||
    '';
  return navItems.findIndex(({ cta }) => {
    return cta.link.split('?')[0] === topParentUrl;
  });
}

/**
 * Filter top level navigation
 */
function getLevel1NavItems(items) {
  return items.filter(({ microsite, active, cta }) => {
    if (!cta.text) {
      return false;
    }

    if (microsite) {
      return active;
    } else {
      return true;
    }
  });
}

function Header({
  currentPageRootKey = '',
  currentPageRootUrl = '',
  currentPageTopParentKey = '',
  currentPageTopParentUrl = '',
  navigationModel = {},
  megaNav = {},
  searchBoxModel = {},
  shoppingCartIconModel = {},
  userLoginData = {}
}) {
  const level1ActiveIndex = getActiveLevel1NavItemIndex(
    currentPageRootKey,
    currentPageRootUrl,
    navigationModel
  );
  const level1NavItems = getLevel1NavItems(navigationModel.childNavItems);
  const level2NavItems = get(
    navigationModel.childNavItems[level1ActiveIndex],
    'childNavItems'
  );
  const level2ActiveIndex = getLevel2ActiveNavItem(
    level2NavItems,
    currentPageTopParentKey,
    currentPageTopParentUrl
  );
  const initialState = {
    level1ActiveIndex,
    level2ActiveIndex,
    level2NavItems,
    level1NavItems,
    megaNav
  };

  return (
    <HeaderContext.Provider value={React.useReducer(reducer, initialState)}>
      <HeaderWrapper>
        <Styled.Container>
          <header>
            <HeaderTop>
              <LargeAndUp>
                <HeaderNavLevel1Desktop />
              </LargeAndUp>
              <LargeDown>
                <HeaderNavLevel1Phone />
              </LargeDown>
              <OptusLogo />
              <HeaderControls
                shoppingCartIconModel={get(shoppingCartIconModel, 'initData')}
                userLoginData={get(userLoginData, 'initData.data')}
              />
            </HeaderTop>
            {level2NavItems && (
              <LargeAndUp>
                <HeaderNavLevel2Desktop />
              </LargeAndUp>
            )}
            <SearchBox {...searchBoxModel.data} />
          </header>
        </Styled.Container>
      </HeaderWrapper>
    </HeaderContext.Provider>
  );
}

Header.propTypes = {
  currentPageRootKey: PropTypes.string,
  currentPageRootUrl: PropTypes.string,
  currentPageTopParentKey: PropTypes.string,
  currentPageTopParentUrl: PropTypes.string,
  navigationModel: PropTypes.object,
  megaNav: PropTypes.object,
  searchBoxModel: PropTypes.object,
  shoppingCartIconModel: PropTypes.object,
  userLoginData: PropTypes.object
};

export default Header;
