import assert from 'node:assert/strict';
import { test } from 'node:test';
import { reverseWords } from '../src/words.ts';

test('reverseWords reverses word order', () => {
  assert.equal(reverseWords('hello brave world'), 'world brave hello');
});

test('reverseWords handles empty string', () => {
  assert.equal(reverseWords(''), '');
});

test('reverseWords handles whitespace-only string', () => {
  assert.equal(reverseWords('   '), '');
});

test('reverseWords handles single word', () => {
  assert.equal(reverseWords('hello'), 'hello');
});
