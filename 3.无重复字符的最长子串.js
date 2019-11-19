/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
	// let res = 0
	// let l = s.length
	// for(let i = 0;i<l;i++){
	// 	let set = new Set()
	// 	let r = 0
	// 	while(i+r<l){
	// 		let j = i+r
	// 		if(!set.has(s[j])){
	// 			set.add(s[j])
	// 		}else{
	// 			break
	// 		}
	// 		r++
	// 	}
	// 	// console.log(set)
	// 	res<set.size&&(res = set.size)
	// }
	// return res

	//queue
	// let res = 0
	// let set = new Set()
	// let queue = []
	// for(let i = 0;i<s.length;i++){
	// 	if(set.has(s[i])){
	// 		while(queue[0]!==s[i]){
	// 			set.delete(queue.shift())
	// 		}
	// 		queue.shift()
	// 	}
	// 	set.add(s[i])
	// 	queue.push(s[i])
	// 	res<set.size&&(res = set.size)
	// }
	// return res


	let num = 0,res = 0;
	let m = '';
	for (n of s) {
		let ddd = m.indexOf(n)
		m += n;
		if (ddd == -1) {
			num++;
			res = res < num ? num: res;
		} else {
			m = m.slice(ddd+1);
			num = m.length;
		}
	}
	return res;

};
// @lc code=end
// let test = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
// let res = lengthOfLongestSubstring(test)
// console.log(res)
