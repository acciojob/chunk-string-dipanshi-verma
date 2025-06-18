function stringChop(str, size) {
  if (!str) return [];

  const result = [];
  for (let i = 0; i < str.length; i += parseInt(size)) {
    result.push(str.slice(i, i + parseInt(size)));
  }
  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
