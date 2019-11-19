/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	let set = new Set(J.split(''))
	let res = 0
	for(i of S){
		if(set.has(i)){
			res++
		}
	}
	return res

};
// @lc code=end

