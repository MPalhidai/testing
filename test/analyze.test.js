const analyze = require('../src/analyze');

describe('analyse', () => {
  it('finds the minimum value of an array', () => {
    expect(analyze([1,8,3,4,2,6]).min).toBe(1);
  });
  it('finds the maximum value of an array', () => {
    expect(analyze([1,8,3,4,2,6]).max).toBe(8);
  });
  it('calculates averages when they are decimal number', () => {
    expect(analyze([1,8,3,4,2,6]).average).toBeCloseTo(4);
  });
  it('returns the length of the array', () => {
    expect(analyze([1,8,3,4,2,6]).length).toBe(6);
  });
  it('takes an array and returns an obect', () => {
      expect(analyze([1,8,3,4,2,6])).toEqual({"average": 4, "min": 1, "max": 8, "length": 6});
  });
});
