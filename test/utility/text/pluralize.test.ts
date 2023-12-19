import { pluralize } from '../../../src/utility/text/pluralize';

describe('Testing the pluralize function', () => {
  const singular = 'kot';
  const plural = 'koty';
  const otherPlural = 'kotów';
  const examplePluralize = pluralize(singular, plural, otherPlural);

  it('Should return singular for 1', () => {
    expect(examplePluralize(1)).toBe(singular);
  });

  it.each([2, 4, 22, 23, 24, 52, 102])('Should return plural for %s', (count) => {
    expect(examplePluralize(count)).toBe(plural);
  });

  it.each([0, 5, 6, 10, 11, 12, 14, 20, 21, 100, 101, 111])('Should return otherPlural for %s', (count) => {
    expect(examplePluralize(count)).toBe(otherPlural);
  });
});