// 01. Contains Duplicate
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  // your code goes here
  const set = new Set(nums);

  if (set.size < nums.length) {
    return true;
  }
  return false;
};
// console.log(containsDuplicate( [1, 2, 3, 1]));

// 02. Move Zeroes
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // your code goes here
  const moved = [];
  let zerCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zerCount++;
    } else {
      moved.push(nums[i]);
    }
  }
  for (let j = 0; j < zerCount; j++) {
    moved.push(0);
  }

  return moved;
};
// console.log(moveZeroes([0, 1, 0, 3, 12]));

// 03. Valid Anagram
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  // your code goes here
  if (s.length !== t.length) {
    return false;
  }

  const count = {};
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }
  for (let char of t) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
};
// console.log(isAnagram("anagram", "nagaram"));

// 04. Ransom Note
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  // your code goes here
  const count = {};

  for (let char of magazine) {
    count[char] = (count[char] || 0) + 1;
  }

  for (let char of ransomNote) {
    if (!count[char]) {
      return false;
    }
    count[char]--;
  }
  return true;
};
// console.log(canConstruct("aa", "aab"));
