const capitalize = (string) => {
  string = string.trim();
  const match = string.match(/[a-z]/i);
  arr = string.split('');
  if (match) {
    const idx = string.indexOf(match[0]);
    arr[idx] = arr[idx].toUpperCase();
  }
  return arr.join('');
}

module.exports = capitalize;
