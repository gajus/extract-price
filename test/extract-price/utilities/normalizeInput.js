// @flow

import test from 'ava';
import normalizeInput from '../../../src/utilities/normalizeInput';

test('normalizes price without cents', (t) => {
  t.true(normalizeInput('100 000 000') === '100000000');
});

test('normalizes space separated thousands where notation is ., (100 000 000.00 to 100000000.00)', (t) => {
  t.true(normalizeInput('100 000 000.00') === '100000000.00');
});

test('normalizes space separated thousands where notation is ,. (100 000 000,00 to 100000000,00)', (t) => {
  t.true(normalizeInput('100 000 000,00') === '100000000,00');
});

test('does not normalize non-thousand groups', (t) => {
  t.true(normalizeInput('100 00 00 00') === '100 00 00 00');
});
