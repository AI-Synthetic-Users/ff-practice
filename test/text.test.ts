import assert from 'node:assert/strict';
import { test } from 'node:test';
import { slugify } from '../src/text.ts';

test('slugify lowercases and hyphenates', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
  assert.equal(slugify('  Add PRs! '), 'add-prs');
});
