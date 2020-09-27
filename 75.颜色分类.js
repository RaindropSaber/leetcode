/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
	// let map = {}
	// nums.forEach((num)=>{
	// 	!map[num] && (map[num]=0)
	// 	map[num]++
	// })
	// for (i in nums){
	// 	for(j of [0,1,2]){
	// 		if(map[j]){
	// 			nums[i] = j
	// 			map[j]--
	// 			break
	// 		}
	// 	}
	// }

	// let j = nums.length
	// for (let i=0;i<j;){
	// 	if(nums[i]===0){
	// 		nums.splice(i,1)
	// 		nums.unshift(0)
	// 		i++
	// 	}else if(nums[i]===2){
	// 		nums.splice(i,1)
	// 		nums.push(2)
	// 		j--
	// 	}else{
	// 		i++
	// 	}
	// }

	let r = nums.length
	let l = 0
	let i = 0
	while(i<r){
		console.log(nums[i])
		if(nums[i]===0){
			[nums[l],nums[i]] = [nums[i],nums[l]]
			l++
			i++
		}else if(nums[i]===2){
			[nums[r-1],nums[i]] = [nums[i],nums[r-1]]
			r--
		}else{
			i++
		}
	}


};
// let nums = [0,1,0]
// sortColors(nums)
// console.log(nums)
// @lc code=end

