/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	let a = new Map()
	let minIndex = Infinity
	for(i of s){
		if(a.has(i)){
			a.set(i,a.get(i)+1)
		}else{
			a.set(i,0)
		}
	}
	a.forEach((v,k,a)=>{
		if(v===0){
			if(s.indexOf(k)<minIndex){
				minIndex = s.indexOf(k)
			}
		}
	})
	return minIndex!==Infinity?minIndex:-1
};
// @lc code=end

