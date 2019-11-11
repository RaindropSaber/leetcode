/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let a1 = new Set(nums1)
	let a2 = new Set(nums2)
	let res = []
	a1.forEach((v)=>{
		a2.has(v)&&res.push(v)
	})
	return res
};
// @lc code=end

