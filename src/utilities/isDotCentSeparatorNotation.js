// @flow

export default (subject: string): boolean => {
  return /(?:\.\d{2}$)|(?:\d+(,\d{3}))/.test(subject);
};
