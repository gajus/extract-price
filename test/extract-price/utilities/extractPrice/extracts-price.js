// @flow

import test from 'ava';
import extractPrice from '../../../../src/utilities/extractPrice';

test('extracts 100 price', (t) => {
  t.deepEqual(extractPrice('foo 100 bar'), [
    {
      amount: 10000
    }
  ]);

  t.deepEqual(extractPrice('foo 100, bar'), [
    {
      amount: 10000
    }
  ]);
});

test('extracts price with cents', (t) => {
  t.deepEqual(extractPrice('foo 100.50 bar'), [
    {
      amount: 10050
    }
  ]);

  t.deepEqual(extractPrice('foo 100.50, bar'), [
    {
      amount: 10050
    }
  ]);

  t.deepEqual(extractPrice('foo 100,50, bar'), [
    {
      amount: 10050
    }
  ]);
});

test('extracts price with thousands', (t) => {
  t.deepEqual(extractPrice('foo 100,200.50 bar'), [
    {
      amount: 10020050
    }
  ]);

  t.deepEqual(extractPrice('foo 100,200.50, bar'), [
    {
      amount: 10020050
    }
  ]);

  t.deepEqual(extractPrice('foo 100.200,50, bar'), [
    {
      amount: 10020050
    }
  ]);
});
