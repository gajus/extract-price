// @flow

export default (subject: string): string => {
  let normalisedSubject = subject;

  while (true) {
    const result = normalisedSubject.replace(/(\d{1,3}|\d+ß) (\d{3})/g, (...args) => {
      return args[1] + args[2] + 'ß';
    });

    if (result === normalisedSubject) {
      normalisedSubject = result.replace(/ß/g, '');

      break;
    } else {
      normalisedSubject = result;
    }
  }

  return normalisedSubject;
};
