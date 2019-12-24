import React from 'react';
import styled from 'styled-components';
import { useHeaderContext } from './HeaderContext';
import Icon from '../Icons/Icon';
import { useAppContext } from '../AppContext';
import get from 'lodash-es/get';

const Wrapper = styled.div`
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #d1d7da;
  height: 30px;
  line-height: 30px;

  .nav {
    display: flex;
    align-items: center;
  }
`;

const Link = styled.a`
  margin: 0 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  line-height: 30px;
  font-family: MarkProMedium;
  color: #191919;
  -webkit-font-smoothing: antialiased;
  position: relative;
  transition: color 250ms ease-out;
  line-height: inherit;

  &:hover {
    text-decoration: inherit;
    color: ${prop => (prop.isActive ? 'inherit' : '#acafb2')};
  }

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 4px;
    background: #ff6e7e;
    display: ${prop => (prop.isActive ? 'block' : 'none')};
  }
`;

const OpenMegaMenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  position: relative;
  color: #323232;
  text-align: left;
  font-size: 14px;
  line-height: 24px;
  font-family: MarkProMedium;
  text-decoration: none;
  text-transform: none;
  border: none;
  background: transparent;
  padding: 0 15px;
  cursor: pointer;
  transition: opacity 250ms ease-in-out;
  width: auto;

  .cta-label {
    display: inline-block;
    margin-right: 5px;
  }

  &:hover,
  &:focus,
  &:active {
    background-color: transparent;
    color: inherit;
    opacity: 0.5;
  }
`;

function HeaderNavLevel2Desktop() {
  const [{ level2NavItems, level2ActiveIndex, megaNav }] = useHeaderContext();

  const [{ showMegaNav }, appDispatcher] = useAppContext();

  const toggleMegaNav = () =>
    appDispatcher({ payload: { showMegaNav: !showMegaNav } });

  return (
    <Wrapper>
      {get(megaNav, 'cta') && level2NavItems.length && (
        <OpenMegaMenuButton
          aria-label={
            showMegaNav
              ? 'Click to close navigation'
              : 'Click to open the navigation'
          }
          onClick={toggleMegaNav}
        >
          <span className="cta-label">{megaNav.cta.text}</span>
          {!showMegaNav && <Icon name="arrow-down" size={12} />}
          {showMegaNav && <Icon name="arrow-up" size={12} />}
        </OpenMegaMenuButton>
      )}
      <nav>
        {level2NavItems &&
          level2NavItems.map(({ cta }, index) => {
            const { text, link } = cta;
            return (
              <Link
                isActive={index === level2ActiveIndex}
                key={index}
                href={link}
              >
                {text}
              </Link>
            );
          })}
      </nav>
    </Wrapper>
  );
}

export default HeaderNavLevel2Desktop;
