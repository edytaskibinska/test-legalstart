/**
 * @desc    First Name formatting function
 * @param   {String}    input   First name to format
 * @returns {string}
 */
export const formatFirstName = ( input ) => input.toLocaleLowerCase()
  .replace(
    /(^|\s|-)([\S])/g,
    ( match, p1, p2 ) => p1 + p2.toLocaleUpperCase(),
  );

/**
 * @desc    String to locale uppercase function
 * @param   {String}    input   String to turn into locale uppercase
 * @returns {string}
 */
export const formatToUpperCase = ( input ) => input.toLocaleUpperCase();
