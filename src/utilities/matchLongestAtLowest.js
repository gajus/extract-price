// @flow

type MatchType = {|
  +index: number,
  +match: string
|};

export default (rules: $ReadOnlyArray<RegExp>, subject: string): MatchType | null => {
  let maybeLongestLowestMatch = null;
  let smallestIndex = Infinity;
  let longestMatch = -Infinity;

  for (const rule of rules) {
    const maybeMatch = subject.match(rule);

    if (maybeMatch) {
      if ((maybeMatch.index < smallestIndex || smallestIndex === maybeMatch.index) && longestMatch < maybeMatch[0].length) {
        smallestIndex = maybeMatch.index;
        longestMatch = maybeMatch[0].length;
        maybeLongestLowestMatch = {
          index: maybeMatch.index + subject.slice(maybeMatch.index).indexOf(maybeMatch[1]),
          match: maybeMatch[1]
        };
      }
    }
  }

  return maybeLongestLowestMatch;
};
