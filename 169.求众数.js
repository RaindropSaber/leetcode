/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 求众数
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
	let res=0
	let count = 0
    nums.forEach((v)=>{
		count == 0 && (res = v)
		v == res?count++:count--
	})
	return res
};
// let res=majorityElement([3,2,3])
// console.log(res)
