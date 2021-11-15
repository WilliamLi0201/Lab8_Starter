// sum.test.js
const { test, expect } = require('@jest/globals');
const func = require('../code-to-unit-test/sum.js');

test('adds 1 + 2 to equal 3', () => {
  // TODO
  expect(1 + 2).toBe(3);
});

test('adds 1 + 2 to equal 3', () => {
    expect(func.sum(1,2)).toBe(3);
});
