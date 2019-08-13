/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	if(!prices.length){return 0}
	let min=prices[0]
	let max=prices[0]
	let res=0
	prices.forEach((v)=>{
		if(v>=max){
			max=v
		}else{
			res+=max-min
			min=v
			max=v
		}
	})
	res+=max-min
	return res
};
