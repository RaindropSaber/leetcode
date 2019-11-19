/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function(A, B, C, D) {
	let res = 0
	let map = {}
	for(c of C){
		for(d of D){
			let x = c+d
			map[x]++||(map[x]=1)
		}
	}
    for(a of A){
		for(b of B){
			res+=map[0-a-b]||0
		}
	}
	return res
};
// @lc code=end
// let
// A = [-1,1,1,1,-1],
// B = [0,-1,-1,0,1],
// C = [-1,-1,1,-1,-1],
// D = [0,1,0,-1,-1]
// let res = fourSumCount(A,B,C,D)
// console.log(res)