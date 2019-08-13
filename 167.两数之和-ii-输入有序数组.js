/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
	let aa={}
	let res=[]
	numbers.find((v,i)=>{
		return (v>target)||aa[v]!==undefined?(res=[aa[v]+1,i+1],true):(aa[target-v]=i,false)
	})
	return res
};
// let res = twoSum([-1,0],-1)
// console.log(res)
