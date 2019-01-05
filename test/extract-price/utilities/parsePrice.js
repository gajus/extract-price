// @flow

import test from 'ava';
import parsePrice from '../../../src/utilities/parsePrice';

test('parses decimal price into cent representation (,.)', (t) => {
  t.true(parsePrice('1', ',.') === 100);
  t.true(parsePrice('1.1', ',.') === 110);
  t.true(parsePrice('1.01', ',.') === 101);
  t.true(parsePrice('1.029', ',.') === 102);
  t.true(parsePrice('100,000.029', ',.') === 10000002);
});

test('throws an error if input is invalid (,.)', (t) => {
  t.throws(() => {
    parsePrice('1,1', ',.');
  });

  t.throws(() => {
    parsePrice('1,01', ',.');
  });

  t.throws(() => {
    parsePrice('100.000.029', ',.');
  });
});

test('extracts decimal price into cent representation (.,)', (t) => {
  t.true(parsePrice('1', '.,') === 100);
  t.true(parsePrice('1,1', '.,') === 110);
  t.true(parsePrice('1,01', '.,') === 101);
  t.true(parsePrice('1,029', '.,') === 102);
  t.true(parsePrice('100.000,029', '.,') === 10000002);
});

test('throws an error if input is invalid (.,)', (t) => {
  t.throws(() => {
    parsePrice('1.1', '.,');
  });

  t.throws(() => {
    parsePrice('1.01', '.,');
  });

  t.throws(() => {
    parsePrice('100,000,029', '.,');
  });
});
