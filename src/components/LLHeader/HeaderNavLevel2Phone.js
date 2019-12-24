import React from 'react';
import styled from 'styled-components';
import { useHeaderContext } from './HeaderContext';
import { useAppContext } from '../AppContext';
import Icon from '../Icons/Icon';
import get from 'lodash-es/get';

const Nav = styled.nav`
  padding: 0 0 12px 30px;
  border-bottom: 1px solid #d1d7da;
`;

const Link = styled.a`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 1rem;
  line-height: 24px;
  padding: 12px 0 12px 16px;
  font-family: MarkProMedium;
  text-decoration: none;
  color: #323232;
`;

const OpenMegaMenuButton = styled.button`
  display: block;
  position: relative;
  width: 100%;
  color: #323232;
  text-align: left;
  font-size: 1rem;
  line-height: 24px;
  padding: 12px 0 12px 46px;
  font-family: MarkProMedium;
  text-decoration: none;
  text-transform: none;
  border: none;
  background: transparent;

  .arrow-right {
    position: absolute;
    right: 20px;
    top: 13px;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    color: inherit;
  }
`;

function HeaderNavLevel2Phone() {
  const [
    { level2NavItems = [], level2ActiveIndex = 0, megaNav = {} }
  ] = useHeaderContext();

  const [, appDispatcher] = useAppContext();
  const openMegaNav = () => appDispatcher({ payload: { showMegaNav: true } });
  return (
    <>
      {get(megaNav, 'cta') && level2NavItems.length && (
        <OpenMegaMenuButton onClick={openMegaNav}>
          <span className="cta-label">{megaNav.cta.text}</span>
          <Icon name="arrow-right" size={16} />
        </OpenMegaMenuButton>
      )}
      <Nav>
        {level2NavItems.length &&
          level2NavItems.map(({ cta }, index) => {
            const { text, link } = cta;
            return (
              <Link
                className="link"
                isActive={index === level2ActiveIndex}
                key={index}
                href={link}
              >
                {text}
              </Link>
            );
          })}
      </Nav>
    </>
  );
}

export default HeaderNavLevel2Phone;
