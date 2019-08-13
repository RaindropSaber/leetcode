/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
	let res=''
	let s='ZABCDEFGHIJKLMNOPQRSTUVWXY'
	while (n!=0) {
		let yushu=n%26
		n=n/26|0
		!yushu&&(n--)
		res=s[yushu]+res
	}
	return res
};
let res=convertToTitle(26*26*26*1+26*26*1+26+1)
console.log(res)
