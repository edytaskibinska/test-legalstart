import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import { ThemeContext } from '../../contexts';

import Vertical from '../layout/vertical';

import { colors } from '../../style/variables';

import Label from './label';
import Error from './error';

const StyledSelect = styled.select`
  font-size: 16px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px 0;
  height: 40px;

  option[disabled] {
    display: none;
  }

  &.light {
    background-color: #FEFEFE;
    color: ${colors.darkestGrey};
    border: 1px solid rgba(0, 0, 0, 0.05);
  }

  &.dark {
    background-color: #222222;
    color: ${colors.white};
    border: 1px solid rgba(255, 255, 255, 0.15);
  }

  &.error {
    border: 1px solid rgba(255, 42, 42, 0.5);
  }

  &.valid {
    border: 1px solid rgba(7, 209, 135, 0.5);
  }
`;

/**
 * @desc    Custom themed select component
 * @param   {Object}    input         Additional input props to pass down to the classical select element
 * @param   {Object}    name          Input name
 * @param   {String}    label         Input label
 * @param   {Node}      children      Child element to embed in the select element
 * @param   {Boolean}   touched       Flag used to indicate if the user has interacted with the select or not
 * @param   {String}    error         i18n error key
 * @param   {String}    defaultValue  Field default display value
 * @returns {Node}
 * @constructor
 */
const Select = ( {
  input,
  name,
  label,
  children,
  meta: {
    touched,
    error,
    defaultValue,
  },
} ) => {
  const themeContext = useContext( ThemeContext );
  const { register } = useFormContext();

  return (
    <Vertical className='input-group'>
      <Label name={label} />
      <StyledSelect
        ref={register}
        id={label}
        name={name}
        {...input}
        defaultValue={defaultValue}
        className={`${themeContext.theme} ${touched && error ? 'error' : ''} ${touched && !error ? 'valid' : ''}`}
      >
        {children}
      </StyledSelect>
      {touched && error && <Error text={error} />}
    </Vertical>
  );
};

Select.propTypes = {
  input: PropTypes.shape( {} ),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  children: PropTypes.node,
  meta: PropTypes.shape( {
    touched: PropTypes.bool,
    error: PropTypes.string,
    defaultValue: PropTypes.string,
  } ),
};

Select.defaultProps = {
  input: {},
  children: null,
  meta: {
    touched: false,
    error: undefined,
    defaultValue: '',
  },
};

export default Select;
