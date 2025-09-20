// Question : https://www.greatfrontend.com/interviews/study/blind75/questions/algo/string-anagram
const isStringAnagram = (str1, str2) => {
  // 1. first create an object from string s that has a letter in s as key and the count of the letter in the string as value -> O(n)
  const objS = {};
  for (let i = 0; i < str1.length; i++) {
    objS[str1.codePointAt(i)] = (objS[str1.codePointAt(i)] || 0) + 1;
  }

  // 2. iterate over string t and take one count off the value of objS if a letter in t is in objS.
  // If there is only one letter, delete the key. -> O(m)
  for (let j = 0; j < str2.length; j++) {
    if (objS[str2.codePointAt(j)] <= 1) {
      delete objS[str2.codePointAt(j)];
    } else {
      objS[str2.codePointAt(j)] -= 1;
    }
  }

  // 3. If the objS is an empty object, then the two strings are anagrams.
  return Object.keys(objS).length === 0;
};
