// @flow

import parseDecimalNumber from 'parse-decimal-number';

type SeparatorFormatType = ',.' | '.,';

/**
 * @param format a two-character string consisting of the thousands character followed by the decimal point character, e.g. ',.'
 */
export default (price: string, format: SeparatorFormatType): number => {
  const value = Math.trunc(parseDecimalNumber(price, format) * 100);

  if (isNaN(value)) {
    throw new TypeError('Cannot extract price.');
  }

  return value;
};
