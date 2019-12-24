import React from 'react';
import styled from 'styled-components';
import HeaderNavLevel2Phone from './HeaderNavLevel2Phone';
import { useHeaderContext } from './HeaderContext';
import { useAppContext } from '../AppContext';
import Icon from '../Icons/Icon';
import get from 'lodash-es/get';

const Level1Nav = styled.div`
  background: #fff;
  position: absolute;
  top: 42px;
  left: 0;
  width: 100%;
  z-index: 2;
`;

const CloseMegaMenuButton = styled.button`
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #000;
  font-size: 16px;
  text-transform: uppercase;
  position: relative;
  text-align: center;
  width: 100%;
  font-family: MarkProBold;
  border: none;
  padding: 0;
  height: 42px;
  line-height: 24px;
  justify-content: center;
  position: relative;

  .cta-label {
    display: inline-block;
  }

  .lux-lite-icon.arrow-left {
    position: absolute;
    left: 10px;
    top: 13px;
  }
`;

const Link = styled.a`
  display: block;
  width: 100%;
  color: #323232;
  text-align: left;
  font-size: 1rem;
  line-height: 1.5rem;
  padding: 12px 0 12px 20px;
  border-bottom: 0 solid #d1d7da;
  border-width: ${prop => (prop.isActive && prop.hasChildINav ? 0 : '1px')};
  -webkit-font-smoothing: antialiased;
  font-family: MarkProHeavy;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: ${prop => (prop.isActive ? '#ff6e7e' : '#fff')};
  }
`;

function HeaderNavLevel1PhoneItems() {
  const [
    { level1NavItems, level1ActiveIndex, level2ActiveIndex, megaNav = {} }
  ] = useHeaderContext();
  const [{ showMegaNav }, dispatch] = useAppContext();
  const closeMegaMenu = () => dispatch({ payload: { showMegaNav: false } });

  return (
    <Level1Nav>
      {get(megaNav, 'cta') && showMegaNav && (
        <CloseMegaMenuButton
          aria-label="Back to main menu"
          onClick={closeMegaMenu}
        >
          <Icon name="arrow-left" size={16} />
          <span className="cta-label">{megaNav.cta.text}</span>
        </CloseMegaMenuButton>
      )}
      {!showMegaNav && (
        <nav>
          {level1NavItems.map(({ cta, childNavItems }, index) => {
            const { text, link } = cta;
            const isActive = level1ActiveIndex === index;
            return (
              <React.Fragment key={index}>
                <Link
                  href={link}
                  isActive={isActive}
                  hasChildINav={childNavItems.length > 0}
                >
                  {text}
                </Link>
                {isActive && childNavItems.length && (
                  <HeaderNavLevel2Phone
                    activeIndex={level2ActiveIndex}
                    navItems={childNavItems}
                  />
                )}
              </React.Fragment>
            );
          })}
        </nav>
      )}
    </Level1Nav>
  );
}

export default HeaderNavLevel1PhoneItems;
