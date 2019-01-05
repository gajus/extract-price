// @flow

import test from 'ava';
import matchLongestAtLowest from '../../../src/utilities/matchLongestAtLowest';

test('finds the longest match at the lowest index position', (t) => {
  const rules = [
    /(\d{1,3}(?:,\d{3})*(?:\.\d{2}))/,
    /(\d{1,3}(?:\.\d{3})*(?:,\d{2}))/
  ];

  t.deepEqual(matchLongestAtLowest(rules, '111,222.22 222.222,22'), {
    index: 0,
    match: '111,222.22'
  });
  t.deepEqual(matchLongestAtLowest(rules, '222.222,22 111,222.22'), {
    index: 0,
    match: '222.222,22'
  });
});
