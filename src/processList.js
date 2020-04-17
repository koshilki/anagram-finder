const rotate = (str, shift) => {
  return `${str.slice(shift)}${str.slice(0, shift)}`;
};

function processList(input) {
  let words = [...new Set(input)]; // remove duplicates
  const anagrams = {};
  const groups = [];

  while (words.length) {
    const current = words.shift();

    const group = [];
    const matches = [];

    group.push(current);
    groups.push(group);

    for (const [idx, word] of words.entries()) {
      if (anagrams[word]) {
        // find among memoized anagrams
        if (anagrams[word][current.toLowerCase()]) {
          group.push(word);
          matches.push(idx);
        }
      } else {
        // calculate possible anagrams of the word
        anagrams[word] = {};
        let found = false;
        for (let i = 1; i < word.length && !found; i++) {
          const anagram = rotate(word.toLowerCase(), i);
          if (current.toLowerCase() === anagram) {
            // word matches current group
            group.push(word);
            matches.push(idx);
            found = true;
          } else {
            // memoize anagram for future search
            anagrams[word][anagram] = true;
          }
        }
      }
    }

    // remove matches from initial array
    words = words.filter((_, idx) => matches.indexOf(idx) === -1);
    // on a larger data set it would probably make sense to
    // implement insertion at index rather than sorting,
    // but for the purpose of this test the overhead is too big
    group.sort();
  }

  return groups.sort();
}

module.exports = processList;
