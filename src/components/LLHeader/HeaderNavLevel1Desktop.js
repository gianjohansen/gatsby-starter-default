import React from 'react';
import styled from 'styled-components';
import { useHeaderContext } from './HeaderContext';

const Nav = styled.nav`
  display: flex;
  position: relative;
  z-index: 1;
`;

const Level1NavLinkStyled = styled.a`
  text-transform: uppercase;
  margin: 0 10px;
  text-decoration: none;
  display: inline-block;
  font-size: 12px;
  font-family: MarkProHeavy;
  letter-spacing: 0.4px;
  color: ${prop => (prop.isActive ? '#fff' : '#888a8c')};
  -webkit-font-smoothing: antialiased;
  transition: color 250ms ease-out;
  line-height: inherit;
  position: relative;

  &:first-child {
    margin-left: 15px;
  }

  &:hover {
    text-decoration: inherit;
    color: ${prop => (prop.isActive ? '#fff' : '#acafb2')};
  }

  &:after {
    display: ${prop => (prop.isActive ? 'inline-block' : 'none')};
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    content: '';
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent #fff transparent;
  }
`;

function HeaderNavLevel1Desktop() {
  const [{ level1NavItems, level1ActiveIndex }] = useHeaderContext();

  return (
    <Nav>
      {level1NavItems.map(({ cta }, index) => {
        const { text, link } = cta;
        return (
          <Level1NavLinkStyled
            key={index}
            href={link}
            isActive={level1ActiveIndex === index}
          >
            {text}
          </Level1NavLinkStyled>
        );
      })}
    </Nav>
  );
}

export default HeaderNavLevel1Desktop;
