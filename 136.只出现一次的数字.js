/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	return Object.keys(nums.reduce((acc,v)=>{return acc[v]?delete acc[v]:acc[v]=true, acc},{}))[0]
};

// let res=singleNumber([4,1,2,1,2])
// console.log(res)
