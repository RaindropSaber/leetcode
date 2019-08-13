/*
 * @lc app=leetcode.cn id=189 lang=javascript
 *
 * [189] 旋转数组
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
	let l=nums.length
	// nums=[...nums,...nums].slice(l-k,2*l-k)
	nums.unshift(nums[l-1])
	nums.splice(l,1)
	console.log(nums)
};
rotate([1,2,3,4,5,6,7,8])
