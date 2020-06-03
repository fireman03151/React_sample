/* global expect */

const { sortFiles } = require('./sort-files');
const { challengeFiles } = require('./__fixtures__/challenges');

describe('sort-files', () => {
  describe('sortFiles', () => {
    it('should return an array', () => {
      const sorted = sortFiles(challengeFiles);
      expect(Array.isArray(sorted)).toBe(true);
    });
    it('should not modify the challenges', () => {
      const sorted = sortFiles(challengeFiles);
      const expected = Object.values(challengeFiles);
      expect(sorted).toEqual(expect.arrayContaining(expected));
      expect(sorted.length).toEqual(expected.length);
    });

    it('should sort the objects into html, js, css order', () => {
      const sorted = sortFiles(challengeFiles);
      const sortedKeys = sorted.map(({ key }) => key);
      const expected = ['indexhtml', 'indexjsx', 'indexjs', 'indexcss'];
      expect(sortedKeys).toStrictEqual(expected);
    });

  });
});
