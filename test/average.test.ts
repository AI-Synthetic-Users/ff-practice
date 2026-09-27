import assert from 'node:assert/strict';
import { test } from 'node:test';
import { average } from '../src/average.ts';

test('average returns 0 for an empty list', () => {
  assert.equal(average([]), 0);
});

test('average returns the arithmetic mean of values', () => {
  assert.equal(average([1, 2, 3]), 2);
  assert.equal(average([10, 20]), 15);
  assert.equal(average([5]), 5);
});