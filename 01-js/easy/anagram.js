/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  function countCharacters(str) {
    const charCount = {};
    for (let char of str) {
      if (char !== ' ') {
        charCount[char] = (charCount[char] || 0) + 1;
      }
    }
    return charCount;
  }

  const charCount1 = countCharacters(str1.toLowerCase());
  const charCount2 = countCharacters(str2.toLowerCase());

  // Check if both strings have the same character counts
  return Object.keys(charCount1).length === Object.keys(charCount2).length &&
    Object.keys(charCount1).every(char => charCount1[char] === charCount2[char]);
}

module.exports = isAnagram;
