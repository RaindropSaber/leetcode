/*
 * @lc app=leetcode.cn id=724 lang=javascript
 *
 * [724] 寻找数组的中心索引
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
	let map = new Map()
	// let sum = nums.reduce((acc,v,i)=>{
	// 	if(!map.has(acc*2+v)){
	// 		map.set(acc*2+v,i)
	// 	}
	// 	return acc + v
	// },0)


	// let sum = 0
	// for(i in nums){
	// 	let  v = nums[i]
	// 	if(!map.has(sum*2+v)){
	// 		map.set(sum*2+v,i)
	// 	}
	// 	sum += v
	// }
	// // console.log(sum)
	// // console.log(map)
	// if(map.has(sum)){
	// 	return map.get(sum)
	// }else{
	// 	return -1
	// }
	// console.log(sum/2|0)
	// return map[sum/2|0]||-1
	// console.log(map)




	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
	  sum += nums[i];
	}

	let sumLeft = 0;
	for (let i = 0; i < nums.length; i++) {
	  sum -= nums[i];
	  if (sumLeft === sum) return i;
	  sumLeft += nums[i];
	}
	return -1;



};
// @lc code=end
// let test = [-1,-1,0,1,1,-1]
// let res = pivotIndex(test)
// console.log(res)

