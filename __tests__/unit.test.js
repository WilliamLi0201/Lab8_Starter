// unit.test.js

const { test, expect } = require('@jest/globals');
const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
test('function isPhoneNumber test 1', () => {
    expect(functions.isPhoneNumber('858-247-9352')).toBe(true);
});

test('function isPhoneNumber test 2', () => {
    expect(functions.isPhoneNumber('888-888-8888')).toBe(true);
});

test('function isPhoneNumber test 3', () => {
    expect(functions.isPhoneNumber('William')).toBe(false);
});

test('function isPhoneNumber test 4', () => {
    expect(functions.isPhoneNumber('chl057@ucsd.edu')).toBe(false);
});

test('function isEmail test 1', () => {
    expect(functions.isEmail('chl057@ucsd.edu')).toBe(true);
});

test('function isEmail test 2', () => {
    expect(functions.isEmail('lch@gmail.com')).toBe(true);
});

test('function isEmail test 3', () => {
    expect(functions.isEmail('William')).toBe(false);
});

test('function isEmail test 4', () => {
    expect(functions.isEmail('858-247-9352')).toBe(false);
});

test('function isStrongPassword test 1', () => {
    expect(functions.isStrongPassword('Kuanye')).toBe(true);
});

test('function isStrongPassword test 2', () => {
    expect(functions.isStrongPassword('ChenghaoLi')).toBe(true);
});

test('function isStrongPassword test 3', () => {
    expect(functions.isStrongPassword('ABC')).toBe(false);
});

test('function isStrongPassword test 4', () => {
    expect(functions.isStrongPassword('1Kuanye')).toBe(false);
});

test('function isDate test 1', () => {
    expect(functions.isDate('02/01/2001')).toBe(true);
});

test('function isDate test 2', () => {
    expect(functions.isDate('2/1/2019')).toBe(true);
});

test('function isDate test 3', () => {
    expect(functions.isDate('0/0/0')).toBe(false);
});

test('function isDate test 4', () => {
    expect(functions.isDate('Kuanye')).toBe(false);
});

test('function isHexColor test 1', () => {
    expect(functions.isHexColor('000000')).toBe(true);
});

test('function isHexColor test 2', () => {
    expect(functions.isHexColor('FFFFFF')).toBe(true);
});

test('function isHexColor test 3', () => {
    expect(functions.isHexColor('QWERTY')).toBe(false);
});

test('function isHexColor test 4', () => {
    expect(functions.isHexColor('0')).toBe(false);
});