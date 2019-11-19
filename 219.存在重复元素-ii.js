/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
	let o = {}
	for (i in nums){
		let v = nums[i]
		if(!o[v]){
			o[v] = i
		}else{
			if(Math.abs(i-o[v])<=k){
				return true
			}else{
				o[v] = i
			}
		}
	}
	return false



	// const set = new Set();
    // for(let i = 0; i < nums.length; i++) {
    //     if(set.has(nums[i])) {
    //         return true;
    //     }
    //     set.add(nums[i]);
    //     if(set.size > k) {
    //         set.delete(nums[i - k]);
    //     }
    // }
    // return false;
};
// @lc code=end
// let nums = [1,2,3,1], k = 3
// let res = containsNearbyDuplicate(nums, k)
// console.log(res)
