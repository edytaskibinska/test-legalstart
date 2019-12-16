import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useFormContext } from 'react-hook-form';

import { ThemeContext } from '../../contexts';
import { colors } from '../../style/variables';

import Vertical from '../layout/vertical';

import Label from './label';
import Error from './error';

const StyledInput = styled.input`
  font-size: 16px;
  border-radius: 8px;
  padding: 8px;
  margin: 8px 0;
  height: 40px;

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
 * @desc    Custom themed input component
 * @param   {Object}    input         Additional input props to pass down to the classical input element
 * @param   {String}    label         Input label
 * @param   {String}    name          Input name
 * @param   {String}    type          Input type
 * @param   {String}    placeholder   Input placeholder
 * @param   {Boolean}   touched       Flag used to indicate if the user has interacted with the input or not
 * @param   {String}    error         i18n error key
 * @returns {Node}
 * @constructor
 */
const Input = ( {
  input,
  name,
  label,
  type,
  placeholder,
  meta: {
    touched,
    error,
  },
} ) => {
  const themeContext = useContext( ThemeContext );
  const { register } = useFormContext();

  return (
    <Vertical className='input-group'>
      <Label name={label} />
      <StyledInput
        ref={register}
        id={label}
        name={name}
        type={type}
        {...input}
        {...placeholder ? { placeholder } : {}}
        className={`${themeContext.theme} ${touched && error ? 'error' : ''} ${touched && !error ? 'valid' : ''}`}
      />
      {touched && error && <Error text={error} />}
    </Vertical>
  );
};

Input.propTypes = {
  input: PropTypes.shape( {} ),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  meta: PropTypes.shape( {
    touched: PropTypes.bool,
    error: PropTypes.string,
  } ),
};

Input.defaultProps = {
  input: {},
  placeholder: undefined,
  meta: {
    touched: false,
    error: undefined,
  },
};

export default Input;
