/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 *
 * https://leetcode-cn.com/problems/plus-one/description/
 *
 * algorithms
 * Easy (40.22%)
 * Likes:    373
 * Dislikes: 0
 * Total Accepted:    95.1K
 * Total Submissions: 227K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个由整数组成的非空数组所表示的非负整数，在该数的基础上加一。
 *
 * 最高位数字存放在数组的首位， 数组中每个元素只存储单个数字。
 *
 * 你可以假设除了整数 0 之外，这个整数不会以零开头。
 *
 * 示例 1:
 *
 * 输入: [1,2,3]
 * 输出: [1,2,4]
 * 解释: 输入数组表示数字 123。
 *
 *
 * 示例 2:
 *
 * 输入: [4,3,2,1]
 * 输出: [4,3,2,2]
 * 解释: 输入数组表示数字 4321。
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
	let l = digits.length
	let j = 0
	for (i in digits){
		if(digits[l-1-i] === 9){
			digits[l-1-i] = 0
			j = 1
		}else{
			digits[l-1-i] += 1
			j = 0
			return digits
		}
	}
	if(j){
		digits.unshift(1)
	}
	return digits
};
// @lc code=end
// let test = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// let res = plusOne(test)
// console.log(res)

