/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
	// let aaa = {}
	// let bbb = {}
	// let nt = ''
	// let ns = ''
	// for( i in s){
	// 	if(aaa[s[i]]){
	// 		nt+=aaa[s[i]]
	// 	}else{
	// 		nt+=t[i]
	// 		aaa[s[i]] = t[i]
	// 	}
	// 	if(bbb[t[i]]){
	// 		ns+=bbb[t[i]]
	// 	}else{
	// 		ns+=s[i]
	// 		bbb[t[i]] = s[i]
	// 	}
	// }
	// return t===nt&&s===ns

	// const mapS = new Map()
	// const mapT = new Map()
	// for (let i = 0; i < s.length; i++) {
	//   const getS = mapS.get(s[i])
	//   const getT = mapT.get(t[i])
	//   if ((getS && getS !== t[i]) || (getT && getT !== s[i])) {
	// 	return false
	//   }
	//   mapS.set(s[i], t[i])
	//   mapT.set(t[i], s[i])
	// }

	// return true


	for (let i = 0; i < s.length; i++) {
		if (s.indexOf(s[i]) !== t.indexOf(t[i])) {
		  return false
		}
	  }
	return true


};
// @lc code=end
// let s = "abaa", t = "aaaa"
// let res = isIsomorphic(s,t)
// console.log(res)