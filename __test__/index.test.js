import { expect, test } from '@jest/globals';

import { readFileSync } from 'node:fs';
import formatter from '../src/formats/index.js';

import diffEngine from '../src/index.js';
import parser from '../src/parser.js';

const stylishResult = readFileSync('__fixtures__/expected.stylish.txt', 'utf-8');
const plainResult = readFileSync('__fixtures__/expected.plain.txt', 'utf-8');
const jsonResult = JSON.stringify(JSON.parse(readFileSync('__fixtures__/expected.json.txt', 'utf-8')), ' ', 2);

test('testing stylish nested', () => {
  expect(diffEngine('__fixtures__/file1.json', '__fixtures__/file2.json')).toBe(stylishResult);
  expect(diffEngine('__fixtures__/file1.yaml', '__fixtures__/file2.yaml')).toBe(stylishResult);
  expect(diffEngine('__fixtures__/file1.yml', '__fixtures__/file2.yml')).toBe(stylishResult);
});

test('testing plain nested', () => {
  expect(diffEngine('__fixtures__/file1.json', '__fixtures__/file2.json', 'plain')).toBe(plainResult);
  expect(diffEngine('__fixtures__/file1.yaml', '__fixtures__/file2.yaml', 'plain')).toBe(plainResult);
  expect(diffEngine('__fixtures__/file1.yml', '__fixtures__/file2.yml', 'plain')).toBe(plainResult);
});