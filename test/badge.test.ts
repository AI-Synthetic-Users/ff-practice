import assert from 'node:assert/strict';
import { test } from 'node:test';
import { badge } from '../src/badge.ts';

test('badge formats the tag', () => {
  assert.equal(badge('pr', 'add median'), '[pr] add median');
});
