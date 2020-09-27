/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (49.88%)
 * Likes:    273
 * Dislikes: 0
 * Total Accepted:    53K
 * Total Submissions: 102.7K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
	let l = a
	let s = b
	if(l.length<s.length){
		l = b
		s = a
	}
	let ll = l.length
	let sl = s.length
	let j = '0'
	let res = ''
	ll--
	sl--
	while(ll>=0||sl>=0){
		let li = l[ll]
		let si = s[sl]
		let sum = j
		if(sl<0){
			si = '0'
		}
		if(li===si){
			j = li
		}else if(sum === '1'){
			sum = '0'
			j = '1'
		}else{
			sum = '1'
			j = '0'
		}
		res = sum+res
		ll--
		sl--
	}
	if (j==='1')res= '1'+res
	return res
};
// @lc code=end

// let a = '1'
// let b = '111'
// let res = addBinary(a,b)
// console.log(res)
