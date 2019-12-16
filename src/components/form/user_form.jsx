import React from 'react';
import { useFormContext } from 'react-hook-form';

import Form from './form';
import FormRow from './row';
import Button from './button';
import Input from './input';
import Select from './select';

import Horizontal from '../layout/horizontal';

import { formatFirstName, formatToUpperCase } from '../../form_utilities/formatters';

//custom functions

import { doesInputHasValue, matchPassportId, doesNotMatchEmailRegexp } from '../../form_utilities/validators'

/**
 * @desc    User form component
 * @returns {Node}
 * @constructor
 */


const UserForm = () => {


  const { watch, getValues } = useFormContext();

  const { gender, firstname, lastname, nationality, email } = watch();
  const passportId = watch('passport-id');

  const validateForm = ( event ) => {
    event.preventDefault();
    doesInputHasValue(getValues());
    console.log('get values: ', getValues());
    console.log('doesInputHasValue: ', doesInputHasValue(getValues()));
    console.log('match password id', matchPassportId(getValues()));
  };


  return (
    <Form
      formTitle='Vos informations'
      handleSubmit={validateForm}
    >
      <FormRow>
        <span className='validationCheck'>
          <Select
            name='gender'
            label='Titre'
          >
            <option
              key='mr'
              value='mr'
            >
              Mr
            </option>
            <option
              key='mrs'
              value='mrs'
            >
              Mme
            </option>
          </Select>
          {gender ? (<span>Choose!</span>) : null}
        </span>
        <span className='validationCheck'>
          <Input
            type='text'
            name='firstname'
            label='Prénom'
            placeholder='Prénom'
            normalize={formatFirstName}
          />
          {firstname && firstname.length < 3 ? (<span>min 3 caracters needed</span>) : null}
        </span>
        <span className='validationCheck'>
          <Input
            type='text'
            name='lastname'
            label='Nom'
            placeholder='Nom'
            normalize={formatToUpperCase}
          />
          {lastname && lastname.length < 3 ? (<span>min 3 caracters needed</span>) : null}
        </span>
      </FormRow>
      <FormRow>
        <span className='validationCheck'>
          <Select
            name='nationality'
            label='Nationalité'
            defaultValue='nationality-fr'
          >
            <option
              key='nationality-fr'
              value='nationality-fr'
            >
              Française
            </option>
            <option
              key='nationality-br'
              value='nationality-br'
            >
              Brésilienne
            </option>
          </Select>
          <Input
            type='text'
            name='passport-id'
            label='Numéro de passport'
            placeholder={
              nationality === 'nationality-br' ?
                'Passport Brésilien' :
                'Passport Français'
            }
            normalize={formatToUpperCase}
          />
          <span>{matchPassportId(nationality, passportId)}</span>
        </span>
      </FormRow>
      <FormRow>
        <span className='validationCheck'>
          <Input
            type='email'
            name='email'
            label='email'
            placeholder='monemail@example.fr'
          />
          {/*<span>{doesNotMatchEmailRegexp(email)}</span>*/}
        </span>
      </FormRow>
      <Horizontal>
        <Button
          type='submit'
          disabled={ false ? 'disabled' : ''}
        >
          { false ? 'Envoyé' : 'Envoyer'}
        </Button>
      </Horizontal>
    </Form>
  );
};

export default UserForm;
