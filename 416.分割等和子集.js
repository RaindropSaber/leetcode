/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 *
 * https://leetcode-cn.com/problems/partition-equal-subset-sum/description/
 *
 * algorithms
 * Medium (38.91%)
 * Total Accepted:    3.2K
 * Total Submissions: 8.2K
 * Testcase Example:  '[1,5,11,5]'
 *
 * 给定一个只包含正整数的非空数组。是否可以将这个数组分割成两个子集，使得两个子集的元素和相等。
 *
 * 注意:
 *
 *
 * 每个数组中的元素不会超过 100
 * 数组的大小不会超过 200
 *
 *
 * 示例 1:
 *
 * 输入: [1, 5, 11, 5]
 *
 * 输出: true
 *
 * 解释: 数组可以分割成 [1, 5, 5] 和 [11].
 *
 *
 *
 *
 * 示例 2:
 *
 * 输入: [1, 2, 3, 5]
 *
 * 输出: false
 *
 * 解释: 数组不能分割成两个元素和相等的子集.
 *
 *
 *
 *
 */
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums,avg) {
	if(avg===undefined){
		nums=nums.sort((a,b)=>b-a)
		let sum=nums.reduce((acc,v)=>acc+v)
		if(sum%2)return false
		avg= sum/2
		if(nums.some((a)=>a>avg))return false
	}
	if(avg==0)return true
	if(avg<0)return false
	if(!nums.length)return false
	return nums.some((v,i,a)=>{
		let newarray =[...a]
		newarray.splice(i,1)
		return canPartition(newarray,avg-v)
	})

	// let needs=new Map()
	// let sum=nums.reduce((acc,v)=>{
	// 	// needs.set(v,0)
	// 	return acc+v
	// },0)
	// if(sum%2)return false
	// let avg= sum/2
	// let diyige=nums[0]
	// let he=avg-diyige
	// nums.splice(0,1)
	// console.log(avg)
	// console.log(diyige)
	// console.log(he)

	// return nums.some((v,i,a)=>{

	// })
	// console.log(nums)


};
// let testcase=[
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,1,1,
// 				1,1,1,1,1,1,1,1,93,95]
// let testcase=[3,2,5,12,5]
// console.log(canPartition(testcase))

