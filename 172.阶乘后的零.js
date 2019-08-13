/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
	let www=n
	let iii=0
	while (www>5){
		iii++
		www=www/5|0
	}
	console.log(iii)

	// s=n.toString(5)
	// console.log(s)
	// let res=parseInt(s)/10|0
	// res=parseInt(res,5)
	// return res
};
let res = trailingZeroes(11000)
console.log(res)
