// @flow

import test from 'ava';
import extractPrice from '../../../../src/utilities/extractPrice';

test('extracts currency symbol', (t) => {
  t.deepEqual(extractPrice('foo USD100 bar'), [
    {
      amount: 10000,
      currencyCode: 'USD'
    }
  ]);

  t.deepEqual(extractPrice('foo 100USD bar'), [
    {
      amount: 10000,
      currencyCode: 'USD'
    }
  ]);

  t.deepEqual(extractPrice('foo 100USD, bar'), [
    {
      amount: 10000,
      currencyCode: 'USD'
    }
  ]);
});

test('extracts currency symbol (with space)', (t) => {
  t.deepEqual(extractPrice('foo USD 100 bar'), [
    {
      amount: 10000,
      currencyCode: 'USD'
    }
  ]);

  t.deepEqual(extractPrice('foo 100 USD bar'), [
    {
      amount: 10000,
      currencyCode: 'USD'
    }
  ]);

  t.deepEqual(extractPrice('foo 100 USD, bar'), [
    {
      amount: 10000,
      currencyCode: 'USD'
    }
  ]);
});
