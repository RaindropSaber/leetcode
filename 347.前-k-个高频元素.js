/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
	let list = []
	let res = []
	let map = {}
    nums.forEach((v)=>{
		map[v]++||(map[v]=1)
	})
	for(v in map){
		list[map[v]]?list[map[v]].push(v):list[map[v]] = [v]
	}
	for(i in list.reverse()){
		res = res.concat(list[i])
		if(res.length === k)return res
	}
};
// @lc code=end

// let nums = [1,2], k = 2
// let res = topKFrequent(nums, k)
// console.log(res)