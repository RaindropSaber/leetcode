/*
 * @lc app=leetcode.cn id=560 lang=javascript
 *
 * [560] 和为K的子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
	// let map = {}
	// for(i in nums){
	// 	let j = i
	// 	let sum
	// 	while(j<nums.length){
	// 		sum===undefined?sum=nums[j]:sum=sum+nums[j]
	// 		!map[sum] && (map[sum]=0)
	// 		map[sum]++
	// 		j++
	// 	}
	// }
	// return map[k]||0

		const mp = new Map();
		mp.set(0, 1);
		let count = 0, pre = 0;
		for (const x of nums) {
			pre += x;
			if (mp.has(pre - k)) {
				count += mp.get(pre - k);
			}
			if (mp.has(pre)) {
				mp.set(pre, mp.get(pre) + 1);
			} else {
				mp.set(pre, 1);
			}
		}
		return count;

	
};
test = [[1],0]
let res = subarraySum(...test,-682)
console.log(res)
// @lc code=end

