// @flow

import test from 'ava';
import extractPrice from '../../../../src/utilities/extractPrice';

test('extracts currency symbol', (t) => {
  t.deepEqual(extractPrice('foo $100 bar'), [
    {
      amount: 10000,
      currencySymbol: '$'
    }
  ]);

  t.deepEqual(extractPrice('foo 100$ bar'), [
    {
      amount: 10000,
      currencySymbol: '$'
    }
  ]);

  t.deepEqual(extractPrice('foo 100$, bar'), [
    {
      amount: 10000,
      currencySymbol: '$'
    }
  ]);
});

test('extracts currency symbol (with space)', (t) => {
  t.deepEqual(extractPrice('foo $ 100 bar'), [
    {
      amount: 10000,
      currencySymbol: '$'
    }
  ]);

  t.deepEqual(extractPrice('foo 100 $ bar'), [
    {
      amount: 10000,
      currencySymbol: '$'
    }
  ]);

  t.deepEqual(extractPrice('foo 100 $, bar'), [
    {
      amount: 10000,
      currencySymbol: '$'
    }
  ]);
});
