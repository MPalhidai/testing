const caesar = require('../src/caesar');

describe('caesar', () => {
  it('encrypts a lower case letter', () => {
      expect(caesar('a', 0)).toBe('a');
  });
  it('encrypts a lower case letter', () => {
    expect(caesar('a', 1)).toBe('b');
  });
  it('encrypts a lower case letter', () => {
    expect(caesar('a', 26)).toBe('a');
  });
  it('encrypts an Upper case letter', () => {
    expect(caesar('Z', 0)).toBe('Z');
  });
  it('wraps z to a in lower case', () => {
    expect(caesar('z', 1)).toBe('a');
  });
  it('wraps Z to A in upper case', () => {
    expect(caesar('Z', 1)).toBe('A');
  });
  it('encrypts words', () => {
    expect(caesar('OMG', 5)).toBe('TRL');
  });
  it('encrypts sentences', () => {
    expect(caesar('The quick brown fox jumps over the lazy dog.', 13)).toBe('Gur dhvpx oebja sbk whzcf bire gur ynml qbt.');
  });
  it(`doesn't encrypt puctionation like ' and .`, () => {
    expect(caesar('Let\'s eat, Grandma!', 21)).toBe('Gzo\'n zvo, Bmviyhv!');
  });
  it(`doesn't encrypt numbers`, () => {
    expect(caesar('Testing 1 2 3 testing', 4)).toBe('Xiwxmrk 1 2 3 xiwxmrk');
  });
  it(`doesn't encrypt spaces`, () => {
    expect(caesar('O M G', 5)).toBe('T R L');
  });
});
