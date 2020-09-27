/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
	let l = nums.length
	let last = nums[l-1]
	let arr = []
	let i = 1
	while(l-i>=0){
		let curl = nums[l-i]
		if(curl<last){
			let change = curl+1
			while(!arr[change]){
				change++
			}
			nums[l-i] = change
			arr[change]--
			arr[curl]?arr[curl]++:arr[curl]=1
			break
		}else{
			arr[curl]?arr[curl]++:arr[curl]=1
			last = curl
		}
		i++
	}
	nums.length = l-i+1
	console.log(arr)
	arr.forEach((v,i)=>{
		while(v){
			nums.push(i)
			v--
		}
	})
	// console.log(arr)
};
// @lc code=end

// let test = [1,2,3]
// // let test = [16,27,25,23,25,16,12,9,1,2,7,20,19,23,16,0,6,22,16,11,8,27,9,2,20,2,13,7,25,29,12,12,18,29,27,13,16,1,22,9,3,21,29,14,7,8,14,5,0,23,16,1,20]
// nextPermutation(test)
// console.log(test)