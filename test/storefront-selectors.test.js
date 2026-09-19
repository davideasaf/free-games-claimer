import assert from 'node:assert/strict';
import test from 'node:test';

import { GOG_LOGIN_SELECTORS, PRIME_LOGIN_SELECTORS } from '../src/storefront-selectors.js';

test('Prime login ignores Amazon hidden email claims', () => {
  assert.match(PRIME_LOGIN_SELECTORS.email, /:not\(\[type="hidden"\]\)/);
  assert.match(PRIME_LOGIN_SELECTORS.email, /:visible$/);
  assert.match(PRIME_LOGIN_SELECTORS.password, /:visible$/);
  assert.match(PRIME_LOGIN_SELECTORS.submit, /:visible$/);
});

test('GOG auth state uses stable hook attributes without nth selectors', () => {
  assert.equal(GOG_LOGIN_SELECTORS.anonymous, '[hook-test="menuAnonymousButton"]');
  assert.equal(GOG_LOGIN_SELECTORS.account, '[hook-test="menuAccountButton"]');
  assert.doesNotMatch(GOG_LOGIN_SELECTORS.anonymous, /nth|first/);
  assert.doesNotMatch(GOG_LOGIN_SELECTORS.account, /nth|first/);
});
