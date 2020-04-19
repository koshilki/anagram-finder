function rotate(str, shift) {
  return `${str.slice(shift)}${str.slice(0, shift)}`;
}

function* getAnagrams(word) {
  for (let count = 1; count < word.length; count++) {
    yield rotate(word, count);
  }
}

function groupWords(input) {
  let words = [...new Set(input)]; // remove duplicates
  const anagrams = {};
  const groups = [];

  while (words.length) {
    const current = words.shift();
    const currentLC = current.toLowerCase();

    const group = [current];
    groups.push(group);

    for (const word of words) {
      const wordLC = word.toLowerCase();
      // find among memoized anagrams
      if (anagrams[word] && anagrams[word][currentLC]) {
        group.push(word);
      } else if (!anagrams[word]) {
        anagrams[word] = {};
        for (const anagram of getAnagrams(wordLC)) {
          anagrams[word][anagram] = true;
          if (anagram === currentLC) {
            group.push(word);
            break;
          }
        }
      }
    }

    // remove matches from initial array
    words = words.filter((word) => group.indexOf(word) < 0);
    // on a larger data set it would probably make sense to
    // implement insertion at index rather than sorting,
    // but for the purpose of this test the overhead is too big
    group.sort();
  }

  return groups.sort();
}

module.exports = groupWords;
