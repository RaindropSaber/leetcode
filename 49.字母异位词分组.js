/*
 * @lc app=leetcode.cn id=49 lang=javascript
 *
 * [49] 字母异位词分组
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
	let o = {}
	strs.forEach((v)=>{
		let nv = v.split('').sort().join('')
		if(o[nv]){
			o[nv].push(v)
		}else{
			o[nv] = [v]
		}
	})
	return Object.values(o)
};
// @lc code=end
// let test = ["eat", "tea", "tan", "ate", "nat", "bat"]
// let res = groupAnagrams(test)
// console.log(res)
