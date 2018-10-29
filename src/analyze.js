const analyse = (array) => ({
  average: array.reduce((acc, cur) => acc + cur, 0) / array.length,
  min: array.reduce((min, cur) => cur > min ? min : cur),
  max: array.reduce((max, cur) => cur < max ? max : cur),
  length: array.length
});

module.exports = analyse;
