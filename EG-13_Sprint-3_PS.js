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

// 05. Majority Element
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // your code goes here
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;

    if (count[num] > nums.length / 2) {
      return num;
    }
  }
};
// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// 06. 3Sum
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  // your code goes here
  const result = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      } else if (sum < 0) {
        left++;
      } else {
        right--;
      }
    }
  }
  return result;
};
// console.log(majorityElement([-1, 0, 1, 2, -1, -4]));

// 07. Subarray Sum Equals K
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
  // your code goes here
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    let sum = 0;

    for (let j = i; j < nums.length; j++) {
      sum += nums[j];

      if (sum === k) {
        count++;
      }
    }
  }
  return count;
};
// console.log(subarraySum([1, 1, 1], 2));

// 08. Top K Frequent Elements
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  // your code goes here
  const count = {};

  for (let num of nums) {
    count[num] = (count[num] || 0) + 1;
  }

  return Object.entries(count)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k)
    .map(([num]) => Number(num));
};
// console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));

// 09. Longest Consecutive Sequence
/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  const set = new Set(nums);
  let longest = 0;

  for (const num of set) {
    if (!set.has(num - 1)) {
      let currentNum = num;
      let currentLength = 1;

      while (set.has(currentNum + 1)) {
        currentNum++;
        currentLength++;
      }

      longest = Math.max(longest, currentLength);
    }
  }

  return longest;
};
// console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// 10. Sort Colors
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let left = 0;
    let current = 0;
    let right = nums.length - 1;

    while (current <= right) {
        if (nums[current] === 0) {
            [nums[left], nums[current]] = [nums[current], nums[left]];

            left++;
            current++;
        } 
        else if (nums[current] === 1) {
            current++;
        } 
        else {
            [nums[current], nums[right]] = [nums[right], nums[current]];

            right--;
        }
    }
};
const nums = [2, 0, 2, 1, 1, 0];
sortColors(nums); 
console.log(nums);

