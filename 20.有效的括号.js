/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	let sta = []
	let S = {'{':'}','}':'{','(':')',')':'(','[':']',']':'['}
	for(let i=0;i<s.length;i++){
		let t = s.charAt(i)
		let l = sta[sta.length-1]
		if(S[l]===t){
			sta.pop()
		}else{
			sta.push(t)
		}
	}
	// console.log(sta)
	return !sta.length
};
// @lc code=end
// let test = `({{)}})`
// let res = isValid(test)
// console.log(res)

