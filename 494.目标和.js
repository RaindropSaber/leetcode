/*
 * @lc app=leetcode.cn id=494 lang=javascript
 *
 * [494] 目标和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S,index = 0) {
	//dfs 递归
	// if(nums.length === index){
	// 	return	S === 0 ? 1 : 0
	// }
	// return findTargetSumWays(nums,S+nums[index],index+1) + findTargetSumWays(nums,S-nums[index],index+1)

	//暴力  超时
	// let a = [S]
	// let b = []
	// let r = 0
	// nums.forEach((v,i)=>{
	// 	// console.log(i)
	// 	while(a.length){
	// 		console.log(a.length)
	// 		let val = a.shift()
	// 		let xxx = val+v
	// 		let zzz = val-v
	// 		b.push(xxx)
	// 		b.push(zzz)
	// 		if(i === nums.length-1 ){
	// 			xxx === 0 && r++
	// 			zzz === 0 && r++
	// 		}
	// 	}
	// 	a = b
	// 	b = []
	// })
	// return r

	//dp
	let sum =  nums.reduce((acc,v)=>acc+v)
    if (sum < S || (sum + S) % 2 === 1) return 0;
	let target = (sum + S) / 2;

    let dp = new Array(target+1).fill(0);
    dp[0] = 1;
    for (let num of nums) {
        for (let i = target; i >= num; i--) {
            dp[i] += dp[i - num];
        }
    }
    return dp[target];

};
let testNums = [1, 2, 3, 4, 5] ,S = 3
// let testNums = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1] ,S = 1
let res = findTargetSumWays(testNums,S)
console.log(res)
// @lc code=end

