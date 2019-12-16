import { EMAIL_REGEX, FR_ID_REGEX, BR_ID_REGEX } from '../config';

/**
 * @desc    Function used to test if the given string matches the email pattern from chromium
 * @param   {String}    input   String to test
 * @returns {string|undefined}
 */
export const doesNotMatchEmailRegexp = ( input ) => {
  if ( input && !input.match( EMAIL_REGEX ) ) {
    return 'The field does not match email pattern';
  }

  return undefined;
};

export const doesInputHasValue = ( stateValues ) => {
  let valid = true;
  Object.values(stateValues).forEach( val => {
    val === "" && (valid = false);
  });
  return valid;
};

export const matchPassportId = ( nationality, pwdId ) => {
  let error = ' ';
  if(nationality ) {
    console.log(nationality)
    switch(nationality) {
      case 'nationality-fr':
        if (pwdId[ 'passport-id' ] && !pwdId[ 'passport-id' ].match( FR_ID_REGEX )) {
          error = 'The Id is wrong, please set the french id';
        }
        break;
      case 'nationality-br':
        if (pwdId[ 'passport-id' ] && !pwdId[ 'passport-id' ].match( BR_ID_REGEX )) {
          error = 'The Id is wrong, please set the brasilian id';
        }
        break;
      default:
        break;
    }
  }

  return error;
};
