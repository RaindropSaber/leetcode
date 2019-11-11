/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n,a=new Set([n])) {
	let nn = 0
   	for( i of String(n)){
		nn += parseInt(i)*parseInt(i)
	}
	if (nn === 1)return true
	if (a.has(nn))return false
	a.add(nn)
	return isHappy(nn,a)
};
// @lc code=end

