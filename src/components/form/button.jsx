import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../contexts';
import { colors, sizing } from '../../style/variables';

const TemplatableButton = styled.button`
  &[type=submit] {
    background-color: ${colors.accentColor};
    padding: 8px 24px;
    text-transform: uppercase;
    color: ${colors.white};
    margin: 32px auto 0;
    border: none;
    font-size: 20px;
    font-weight: 400;
    border-radius: ${sizing.borderRadius};
    outline: none;
  }
  
  &:hover {
    cursor: pointer;
  }
  
  &[type=submit][disabled]:hover {
    cursor: not-allowed;
  }
  
  &.light {
    box-shadow: 0 4px 10px 0 rgba(15, 59, 47, 0.25);
  }
  
  &.light[type=submit][disabled] {
    background-color: rgba(42, 42, 42, 0.25);
  }
  
  &.dark {
    box-shadow: 0 4px 10px 0 rgba(226, 234, 232, 0.2);
  }
  
  &.dark[type=submit][disabled] {
    background-color: rgba(242, 242, 242, 0.75);
    color: ${colors.darkestGrey};
  }
`;

/**
 * @desc    Custom form themed button component
 * @param   {Node}    children      Child element to embed in the button
 * @param   {String}  type          Button's type
 * @param   {Object}  otherProps    Other unplanned props that are passed down to the classical button element
 * @returns {Node}
 * @constructor
 */
const Button = ( { children, type = 'button', ...otherProps } ) => {
  const themeContext = useContext( ThemeContext );

  return (
    <TemplatableButton
      type={type}
      {...otherProps}
      className={themeContext.theme}
    >
      {children}
    </TemplatableButton>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string.isRequired,
};

Button.defaultProps = {
  children: null,
};

export default Button;
