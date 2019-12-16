import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Vertical from '../layout/vertical';
import { sizing } from '../../style/variables';

const FormContainer = styled.form`
  .input-group {
    font-size: 12px;
    flex: 1;
  }
  
  .input-group + .input-group {
    margin-left: ${sizing.padding};
  }
`;

const FormTitle = styled.h1`
  margin: 0 0 32px 0;
  color: inherit;
  background-color: inherit;
`;

/**
 * @desc    Custom form component
 * @param   {Node}        children        Child element to embed in the form
 * @param   {String}      formTitle       i18n title key
 * @param   {Function}    handleSubmit    Function called on form submit
 * @returns {Node}
 * @constructor
 */
const Form = ( { children, formTitle, handleSubmit } ) => {
  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormTitle>
        {formTitle}
      </FormTitle>
      <Vertical>
        {children}
      </Vertical>
    </FormContainer>
  );
}

Form.propTypes = {
  children: PropTypes.node,
  formTitle: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

Form.defaultProps = {
  children: null,
};

export default Form;
