import assert from 'node:assert/strict';
import { test } from 'node:test';
import { reverseWords } from '../src/words.ts';

test('reverseWords reverses word order', () => {
  assert.equal(reverseWords('hello brave world'), 'world brave hello');
});
