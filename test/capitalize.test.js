const capitalize = require("../src/capitalize");

describe('capitalize', () => {
  it('capitlizes the first character of a word', () => {
    expect(capitalize('date')).toBe('Date');
  });
  it('capitalizes the first word of a string', () => {
    expect(capitalize('i am a cat.')).toBe('I am a cat.');
  });
  it('ignores white space before a string', () => {
    expect(capitalize('    i am a cat.   ')).toBe('I am a cat.');
  });
  it('ignores non letter characters', () => {
    expect(capitalize('/.../ lost in translation')).toBe('/.../ Lost in translation');
  });
});
