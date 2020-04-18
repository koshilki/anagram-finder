function sortWord(current) {
  return current.toLowerCase().split("").sort().join("");
}

function processList(input) {
  let words = [...new Set(input)]; // remove duplicates
  const sorted = {};

  for (const word of words) {
    const sortedWord = sortWord(word);
    if (!sorted[sortedWord]) {
      sorted[sortedWord] = [word];
    } else {
      sorted[sortedWord].push(word);
    }
  }

  return Object.values(sorted)
    .map((val) => val.sort())
    .sort();
}

module.exports = processList;
