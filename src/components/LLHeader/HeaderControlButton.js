import React from 'react';
import styled from 'styled-components';
import Icon from '../Icons/Icon';
import PropTypes from 'prop-types';
import { size } from '../Breakpoints/Breakpoints';

const Button = styled.button`
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #fff;
  margin-left: 10px;
  transition: opacity 250ms ease-in-out;
  cursor: pointer;

  .icon-label {
    display: none;
  }

  &:hover,
  &:focus {
    opacity: 0.75;
    background-color: transparent;
  }

  @media (min-width: ${size.largeAndUp}px) {
    margin-left: 20px;
    cursor: pointer;

    .icon-label {
      display: inline-block;
      text-transform: uppercase;
      font-family: MarkProHeavy;
      letter-spacing: 0.4px;
      font-size: 12px;
      line-height: 16px;
      display: inline-block;
      margin-left: 5px;
    }
  }
`;

const HeaderControlButton = ({
  icon,
  text,
  ariaLabel = '',
  onClick = () => {}
}) => {
  return (
    <Button onClick={() => onClick()} aria-label={ariaLabel || text}>
      <Icon name={icon} color="#fff" size={16} />
      <span className="icon-label">{text}</span>
    </Button>
  );
};

HeaderControlButton.propTypes = {
  icon: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string
};

export default HeaderControlButton;
