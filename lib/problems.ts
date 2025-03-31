export type Problem = {
  id: string
  title: string
  difficulty: "Easy" | "Medium" | "Hard"
  description: string
  examples: {
    input: string
    output: string
    explanation?: string
  }[]
  constraints: string[]
  starterCode: {
    javascript: string
    python: string
  }
  testCases: {
    input: any[]
    output: any
  }[]
}

export const problems: Problem[] = [
  {
    id: "two-sum",
    title: "Two Sum",
    difficulty: "Easy",
    description:
      "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
    examples: [
      {
        input: "nums = [2,7,11,15], target = 9",
        output: "[0,1]",
        explanation: "Because nums[0] + nums[1] == 9, we return [0, 1].",
      },
      {
        input: "nums = [3,2,4], target = 6",
        output: "[1,2]",
      },
    ],
    constraints: [
      "2 <= nums.length <= 10^4",
      "-10^9 <= nums[i] <= 10^9",
      "-10^9 <= target <= 10^9",
      "Only one valid answer exists.",
    ],
    starterCode: {
      javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Your code here
}`,
      python: `class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Your code here
        pass`,
    },
    testCases: [
      {
        input: [[2, 7, 11, 15], 9],
        output: [0, 1],
      },
      {
        input: [[3, 2, 4], 6],
        output: [1, 2],
      },
      {
        input: [[3, 3], 6],
        output: [0, 1],
      },
    ],
  },
  {
    id: "palindrome-number",
    title: "Palindrome Number",
    difficulty: "Easy",
    description:
      "Given an integer x, return true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same forward and backward.",
    examples: [
      {
        input: "x = 121",
        output: "true",
        explanation: "121 reads as 121 from left to right and from right to left.",
      },
      {
        input: "x = -121",
        output: "false",
        explanation:
          "From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.",
      },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    starterCode: {
      javascript: `/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Your code here
}`,
      python: `class Solution:
    def isPalindrome(self, x: int) -> bool:
        # Your code here
        pass`,
    },
    testCases: [
      {
        input: [121],
        output: true,
      },
      {
        input: [-121],
        output: false,
      },
      {
        input: [10],
        output: false,
      },
    ],
  },
  {
    id: "valid-parentheses",
    title: "Valid Parentheses",
    difficulty: "Easy",
    description:
      "Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if: Open brackets must be closed by the same type of brackets. Open brackets must be closed in the correct order. Every close bracket has a corresponding open bracket of the same type.",
    examples: [
      {
        input: 's = "()"',
        output: "true",
      },
      {
        input: 's = "()[]{}"',
        output: "true",
      },
      {
        input: 's = "(]"',
        output: "false",
      },
    ],
    constraints: ["1 <= s.length <= 10^4", "s consists of parentheses only '()[]{}'."],
    starterCode: {
      javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Your code here
}`,
      python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Your code here
        pass`,
    },
    testCases: [
      {
        input: ["()"],
        output: true,
      },
      {
        input: ["()[]{}"],
        output: true,
      },
      {
        input: ["(]"],
        output: false,
      },
    ],
  },
  {
    id: "reverse-linked-list",
    title: "Reverse Linked List",
    difficulty: "Medium",
    description: "Given the head of a singly linked list, reverse the list, and return the reversed list.",
    examples: [
      {
        input: "head = [1,2,3,4,5]",
        output: "[5,4,3,2,1]",
      },
      {
        input: "head = [1,2]",
        output: "[2,1]",
      },
    ],
    constraints: ["The number of nodes in the list is the range [0, 5000].", "-5000 <= Node.val <= 5000"],
    starterCode: {
      javascript: `/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    // Your code here
}`,
      python: `# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Your code here
        pass`,
    },
    testCases: [
      {
        input: [[1, 2, 3, 4, 5]],
        output: [5, 4, 3, 2, 1],
      },
      {
        input: [[1, 2]],
        output: [2, 1],
      },
      {
        input: [[]],
        output: [],
      },
    ],
  },
  {
    id: "longest-substring",
    title: "Longest Substring Without Repeating Characters",
    difficulty: "Medium",
    description:
      "Given a string s, find the length of the longest substring without repeating characters.",
    examples: [
      {
        input: 's = "abcabcbb"',
        output: "3",
        explanation: 'The answer is "abc", with the length of 3.',
      },
      {
        input: 's = "bbbbb"',
        output: "1",
        explanation: 'The answer is "b", with the length of 1.',
      },
    ],
    constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols, and spaces."],
    starterCode: {
      javascript: `/**
   * @param {string} s
   * @return {number}
   */
  function lengthOfLongestSubstring(s) {
      // Your code here
  }`,
      python: `class Solution:
      def lengthOfLongestSubstring(self, s: str) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: ["abcabcbb"],
        output: 3,
      },
      {
        input: ["bbbbb"],
        output: 1,
      },
      {
        input: ["pwwkew"],
        output: 3,
      },
    ],
  },
  {
    id: "merge-sorted-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description:
      "You are given two sorted linked lists. Merge them into one sorted list.",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
      {
        input: "list1 = [], list2 = []",
        output: "[]",
      },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50].", "-100 <= Node.val <= 100"],
    starterCode: {
      javascript: `/**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  function mergeTwoLists(list1, list2) {
      // Your code here
  }`,
      python: `# Definition for singly-linked list.
  # class ListNode:
  #     def __init__(self, val=0, next=None):
  #         self.val = val
  #         self.next = next
  class Solution:
      def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[1, 2, 4], [1, 3, 4]],
        output: [1, 1, 2, 3, 4, 4],
      },
      {
        input: [[], []],
        output: [],
      },
      {
        input: [[], [0]],
        output: [0],
      },
    ],
  },
  {
    id: "kth-largest-element",
    title: "Kth Largest Element in an Array",
    difficulty: "Medium",
    description:
      "Given an integer array nums and an integer k, return the k-th largest element in the array.",
    examples: [
      {
        input: "nums = [3,2,1,5,6,4], k = 2",
        output: "5",
      },
      {
        input: "nums = [3,2,3,1,2,4,5,5,6], k = 4",
        output: "4",
      },
    ],
    constraints: ["1 <= k <= nums.length <= 10^4", "-10^4 <= nums[i] <= 10^4"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @param {number} k
   * @return {number}
   */
  function findKthLargest(nums, k) {
      // Your code here
  }`,
      python: `class Solution:
      def findKthLargest(self, nums: List[int], k: int) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[3, 2, 1, 5, 6, 4], 2],
        output: 5,
      },
      {
        input: [[3, 2, 3, 1, 2, 4, 5, 5, 6], 4],
        output: 4,
      },
    ],
  },
  {
    id: "median-two-arrays",
    title: "Median of Two Sorted Arrays",
    difficulty: "Hard",
    description:
      "Given two sorted arrays nums1 and nums2, return the median of the two sorted arrays.",
    examples: [
      {
        input: "nums1 = [1,3], nums2 = [2]",
        output: "2.0",
        explanation: "Merged array is [1,2,3], median is 2.0.",
      },
      {
        input: "nums1 = [1,2], nums2 = [3,4]",
        output: "2.5",
        explanation: "Merged array is [1,2,3,4], median is (2+3)/2 = 2.5.",
      },
    ],
    constraints: [
      "0 <= nums1.length, nums2.length <= 1000",
      "-10^6 <= nums1[i], nums2[i] <= 10^6",
    ],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums1
   * @param {number[]} nums2
   * @return {number}
   */
  function findMedianSortedArrays(nums1, nums2) {
      // Your code here
  }`,
      python: `class Solution:
      def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[1, 3], [2]],
        output: 2.0,
      },
      {
        input: [[1, 2], [3, 4]],
        output: 2.5,
      },
    ],
  },
  {
    id: "remove-duplicates",
    title: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
    description:
      "Given a sorted array nums, remove duplicates in-place such that each element appears only once and return the new length.",
    examples: [
      {
        input: "nums = [1,1,2]",
        output: "2, nums = [1,2,_]",
      },
      {
        input: "nums = [0,0,1,1,1,2,2,3,3,4]",
        output: "5, nums = [0,1,2,3,4,_]",
      },
    ],
    constraints: ["1 <= nums.length <= 3 * 10^4", "-100 <= nums[i] <= 100"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @return {number}
   */
  function removeDuplicates(nums) {
      // Your code here
  }`,
      python: `class Solution:
      def removeDuplicates(self, nums: List[int]) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[1, 1, 2]],
        output: 2,
      },
      {
        input: [[0, 0, 1, 1, 1, 2, 2, 3, 3, 4]],
        output: 5,
      },
    ],
  },
  {
    id: "buy-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
    description:
      "You are given an array prices where prices[i] is the price of a stock on the ith day. Return the max profit by buying/selling once.",
    examples: [
      {
        input: "prices = [7,1,5,3,6,4]",
        output: "5",
        explanation: "Buy on day 2, sell on day 5.",
      },
      {
        input: "prices = [7,6,4,3,1]",
        output: "0",
        explanation: "No transaction is done.",
      },
    ],
    constraints: ["1 <= prices.length <= 10^5", "0 <= prices[i] <= 10^4"],
    starterCode: {
      javascript: `/**
   * @param {number[]} prices
   * @return {number}
   */
  function maxProfit(prices) {
      // Your code here
  }`,
      python: `class Solution:
      def maxProfit(self, prices: List[int]) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[7, 1, 5, 3, 6, 4]],
        output: 5,
      },
      {
        input: [[7, 6, 4, 3, 1]],
        output: 0,
      },
    ],
  },
  {
    id: "missing-number",
    title: "Find the Missing Number",
    difficulty: "Easy",
    description:
      "Given an array nums containing n distinct numbers in the range [0, n], return the missing number.",
    examples: [
      {
        input: "nums = [3,0,1]",
        output: "2",
      },
      {
        input: "nums = [0,1]",
        output: "2",
      },
    ],
    constraints: ["n == nums.length", "0 <= nums[i] <= n"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @return {number}
   */
  function missingNumber(nums) {
      // Your code here
  }`,
      python: `class Solution:
      def missingNumber(self, nums: List[int]) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[3, 0, 1]],
        output: 2,
      },
      {
        input: [[0, 1]],
        output: 2,
      },
    ],
  },
  {
    id: "product-array",
    title: "Product of Array Except Self",
    difficulty: "Medium",
    description:
      "Given an integer array nums, return an array answer such that answer[i] is the product of all the elements except nums[i].",
    examples: [
      {
        input: "nums = [1,2,3,4]",
        output: "[24,12,8,6]",
      },
    ],
    constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @return {number[]}
   */
  function productExceptSelf(nums) {
      // Your code here
  }`,
      python: `class Solution:
      def productExceptSelf(self, nums: List[int]) -> List[int]:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[1, 2, 3, 4]],
        output: [24, 12, 8, 6],
      },
    ],
  },
  {
    id: "climbing-stairs",
    title: "Climbing Stairs",
    difficulty: "Easy",
    description:
      "You are climbing stairs. It takes n steps to reach the top. Each time you can climb 1 or 2 steps. Find ways to reach the top.",
    examples: [
      {
        input: "n = 2",
        output: "2",
      },
    ],
    constraints: ["1 <= n <= 45"],
    starterCode: {
      javascript: `/**
   * @param {number} n
   * @return {number}
   */
  function climbStairs(n) {
      // Your code here
  }`,
      python: `class Solution:
      def climbStairs(self, n: int) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [2],
        output: 2,
      },
    ],
  },
  {
    id: "reverse-integer",
    title: "Reverse Integer",
    difficulty: "Easy",
    description:
      "Given an integer x, return its digits reversed. If reversing causes overflow, return 0.",
    examples: [
      {
        input: "x = 123",
        output: "321",
      },
    ],
    constraints: ["-2^31 <= x <= 2^31 - 1"],
    starterCode: {
      javascript: `/**
   * @param {number} x
   * @return {number}
   */
  function reverse(x) {
      // Your code here
  }`,
      python: `class Solution:
      def reverse(self, x: int) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [123],
        output: 321,
      },
    ],
  },
  {
    id: "merge-two-lists",
    title: "Merge Two Sorted Lists",
    difficulty: "Easy",
    description:
      "You are given the heads of two sorted linked lists. Merge them into one sorted linked list.",
    examples: [
      {
        input: "list1 = [1,2,4], list2 = [1,3,4]",
        output: "[1,1,2,3,4,4]",
      },
    ],
    constraints: ["The number of nodes in both lists is in the range [0, 50]."],
    starterCode: {
      javascript: `/**
   * Definition for singly-linked list.
   * function ListNode(val, next) {
   *     this.val = (val===undefined ? 0 : val)
   *     this.next = (next===undefined ? null : next)
   * }
   */
  /**
   * @param {ListNode} list1
   * @param {ListNode} list2
   * @return {ListNode}
   */
  function mergeTwoLists(list1, list2) {
      // Your code here
  }`,
      python: `class Solution:
      def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[1, 2, 4], [1, 3, 4]],
        output: [1, 1, 2, 3, 4, 4],
      },
    ],
  },
  {
    id: "majority-element",
    title: "Majority Element",
    difficulty: "Easy",
    description:
      "Given an array nums of size n, return the majority element. The majority element is the element that appears more than ⌊n/2⌋ times.",
    examples: [
      {
        input: "nums = [3,2,3]",
        output: "3",
      },
    ],
    constraints: ["n == nums.length", "1 <= n <= 5 * 10^4"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @return {number}
   */
  function majorityElement(nums) {
      // Your code here
  }`,
      python: `class Solution:
      def majorityElement(self, nums: List[int]) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[3, 2, 3]],
        output: 3,
      },
    ],
  },{
    id: "merge-intervals",
    title: "Merge Intervals",
    difficulty: "Medium",
    description:
      "Given an array of intervals where intervals[i] = [start, end], merge overlapping intervals.",
    examples: [
      {
        input: "intervals = [[1,3],[2,6],[8,10],[15,18]]",
        output: "[[1,6],[8,10],[15,18]]",
      },
    ],
    constraints: ["1 <= intervals.length <= 10^4"],
    starterCode: {
      javascript: `/**
   * @param {number[][]} intervals
   * @return {number[][]}
   */
  function merge(intervals) {
      // Your code here
  }`,
      python: `class Solution:
      def merge(self, intervals: List[List[int]]) -> List[List[int]]:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[[1, 3], [2, 6], [8, 10], [15, 18]]],
        output: [[1, 6], [8, 10], [15, 18]],
      },
    ],
  },
  {
    id: "valid-anagram",
    title: "Valid Anagram",
    difficulty: "Easy",
    description:
      "Given two strings s and t, return true if t is an anagram of s, and false otherwise.",
    examples: [
      {
        input: "s = 'anagram', t = 'nagaram'",
        output: "true",
      },
    ],
    constraints: ["1 <= s.length, t.length <= 5 * 10^4"],
    starterCode: {
      javascript: `/**
   * @param {string} s
   * @param {string} t
   * @return {boolean}
   */
  function isAnagram(s, t) {
      // Your code here
  }`,
      python: `class Solution:
      def isAnagram(self, s: str, t: str) -> bool:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: ["anagram", "nagaram"],
        output: true,
      },
    ],
  },
  {
    id: "longest-palindrome",
    title: "Longest Palindromic Substring",
    difficulty: "Medium",
    description:
      "Given a string s, return the longest palindromic substring in s.",
    examples: [
      {
        input: "s = 'babad'",
        output: "'bab' or 'aba'",
      },
    ],
    constraints: ["1 <= s.length <= 1000"],
    starterCode: {
      javascript: `/**
   * @param {string} s
   * @return {string}
   */
  function longestPalindrome(s) {
      // Your code here
  }`,
      python: `class Solution:
      def longestPalindrome(self, s: str) -> str:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: ["babad"],
        output: "bab",
      },
    ],
  },
  {
    id: "edit-distance",
    title: "Edit Distance",
    difficulty: "Hard",
    description:
      "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.",
    examples: [
      {
        input: "word1 = 'horse', word2 = 'ros'",
        output: "3",
      },
    ],
    constraints: ["0 <= word1.length, word2.length <= 500"],
    starterCode: {
      javascript: `/**
   * @param {string} word1
   * @param {string} word2
   * @return {number}
   */
  function minDistance(word1, word2) {
      // Your code here
  }`,
      python: `class Solution:
      def minDistance(self, word1: str, word2: str) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: ["horse", "ros"],
        output: 3,
      },
    ],
  },
  {
    id: "minimum-window-substring",
    title: "Minimum Window Substring",
    difficulty: "Hard",
    description:
      "Given strings s and t, return the minimum window substring of s that contains all characters of t.",
    examples: [
      {
        input: "s = 'ADOBECODEBANC', t = 'ABC'",
        output: "'BANC'",
      },
    ],
    constraints: ["1 <= s.length, t.length <= 10^5"],
    starterCode: {
      javascript: `/**
   * @param {string} s
   * @param {string} t
   * @return {string}
   */
  function minWindow(s, t) {
      // Your code here
  }`,
      python: `class Solution:
      def minWindow(self, s: str, t: str) -> str:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: ["ADOBECODEBANC", "ABC"],
        output: "BANC",
      },
    ],
  },
  {
    id: "rotate-array",
    title: "Rotate Array",
    difficulty: "Medium",
    description:
      "Given an integer array nums, rotate the array to the right by k steps.",
    examples: [
      {
        input: "nums = [1,2,3,4,5,6,7], k = 3",
        output: "[5,6,7,1,2,3,4]",
      },
    ],
    constraints: ["1 <= nums.length <= 10^5"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @param {number} k
   * @return {void} Do not return anything, modify nums in-place instead.
   */
  function rotate(nums, k) {
      // Your code here
  }`,
      python: `class Solution:
      def rotate(self, nums: List[int], k: int) -> None:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[1, 2, 3, 4, 5, 6, 7], 3],
        output: [5, 6, 7, 1, 2, 3, 4],
      },
    ],
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    difficulty: "Hard",
    description:
      "Given n non-negative integers representing elevation heights, compute the amount of trapped rainwater.",
    examples: [
      {
        input: "height = [0,1,0,2,1,0,1,3,2,1,2,1]",
        output: "6",
      },
    ],
    constraints: ["n == height.length", "1 <= n <= 2 * 10^4"],
    starterCode: {
      javascript: `/**
   * @param {number[]} height
   * @return {number}
   */
  function trap(height) {
      // Your code here
  }`,
      python: `class Solution:
      def trap(self, height: List[int]) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[0,1,0,2,1,0,1,3,2,1,2,1]],
        output: 6,
      },
    ],
  },
  {
    id: "n-queens",
    title: "N-Queens",
    difficulty: "Hard",
    description:
      "Given an n x n chessboard, return all possible valid arrangements where n queens can be placed.",
    examples: [
      {
        input: "n = 4",
        output: "[['.Q..', '...Q', 'Q...', '..Q.'], ['..Q.', 'Q...', '...Q', '.Q..']]",
      },
    ],
    constraints: ["1 <= n <= 9"],
    starterCode: {
      javascript: `/**
   * @param {number} n
   * @return {string[][]}
   */
  function solveNQueens(n) {
      // Your code here
  }`,
      python: `class Solution:
      def solveNQueens(self, n: int) -> List[List[str]]:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [4],
        output: [[".Q..", "...Q", "Q...", "..Q."], ["..Q.", "Q...", "...Q", ".Q.."]],
      },
    ],
  },
  {
    id: "word-search-ii",
    title: "Word Search II",
    difficulty: "Hard",
    description:
      "Given an m x n board of letters and a list of words, return all words that can be formed using adjacent letters.",
    examples: [
      {
        input: "board = [['o','a','a','n'], ['e','t','a','e'], ['i','h','k','r'], ['i','f','l','v']], words = ['oath','pea','eat','rain']",
        output: "['oath', 'eat']",
      },
    ],
    constraints: ["1 <= board.length, board[i].length <= 12"],
    starterCode: {
      javascript: `/**
   * @param {character[][]} board
   * @param {string[]} words
   * @return {string[]}
   */
  function findWords(board, words) {
      // Your code here
  }`,
      python: `class Solution:
      def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[['o','a','a','n'], ['e','t','a','e'], ['i','h','k','r'], ['i','f','l','v']], ['oath','pea','eat','rain']],
        output: ["oath", "eat"],
      },
    ],
  },
  {
    id: "longest-consecutive-sequence",
    title: "Longest Consecutive Sequence",
    difficulty: "Hard",
    description:
      "Given an unsorted array of integers, return the length of the longest consecutive sequence.",
    examples: [
      {
        input: "nums = [100,4,200,1,3,2]",
        output: "4",
      },
    ],
    constraints: ["0 <= nums.length <= 10^5"],
    starterCode: {
      javascript: `/**
   * @param {number[]} nums
   * @return {number}
   */
  function longestConsecutive(nums) {
      // Your code here
  }`,
      python: `class Solution:
      def longestConsecutive(self, nums: List[int]) -> int:
          # Your code here
          pass`,
    },
    testCases: [
      {
        input: [[100,4,200,1,3,2]],
        output: 4,
      },
    ],
  }  
]

export function getProblemById(id: string): Problem | undefined {
  return problems.find((problem) => problem.id === id)
}

