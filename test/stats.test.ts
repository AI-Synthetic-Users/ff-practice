import assert from 'node:assert/strict';
import { test } from 'node:test';
import { median } from '../src/stats.ts';

test('median picks the middle value', () => {
  assert.equal(median([3, 1, 2]), 2);
  assert.equal(median([4, 1, 2, 3]), 2.5);
  assert.equal(median([]), 0);
});
