/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	//default
    // let list = []
	// let map = {}
	// nums2.forEach((v)=>{
	// 	if(map[v]){
	// 		map[v]++
	// 	}else{
	// 		map[v] = 1
	// 	}
	// })
	// nums1.forEach((v)=>{
	// 	if(map[v]){
	// 		list.push(v)
	// 		map[v]--
	// 	}
	// })
	// return list


	//sort
	// nums1.sort((a,b)=>a-b)
	// nums2.sort((a,b)=>a-b)
	// let p1 = 0
	// let p2 = 0
	// let l1 = nums1.length
	// let l2 = nums2.length
	// let res = []
	// while(l1>p1&&l2>p2){
	// 	if(nums1[p1]===nums2[p2]){
	// 		res.push(nums1[p1])
	// 		p1++
	// 		p2++
	// 	}else if(nums1[p1]>nums2[p2]){
	// 		p2++
	// 	}else if(nums1[p1]<nums2[p2]){
	// 		p1++
	// 	}
	// }
	// return res
};
// @lc code=end
// let tNums1 = [61,24,20,58,95,53,17,32,45,85,70,20,83,62,35,89,5,95,12,86,58,77,30,64,46,13,5,92,67,40,20,38,31,18,89,85,7,30,67,34,62,35,47,98,3,41,53,26,66,40,54,44,57,46,70,60,4,63,82,42,65,59,17,98,29,72,1,96,82,66,98,6,92,31,43,81,88,60,10,55,66,82,0,79,11,81]
// let tNums2 = [5,25,4,39,57,49,93,79,7,8,49,89,2,7,73,88,45,15,34,92,84,38,85,34,16,6,99,0,2,36,68,52,73,50,77,44,61,48]
// let res = intersect(tNums1,tNums2)
// console.log(res)
