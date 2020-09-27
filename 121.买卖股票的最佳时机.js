/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
	return prices.reduce((acc,v)=>{
		let value=v-acc[0]
		value<0?acc[0]=v:acc[1]=(acc[1]>(value))?acc[1]:(value)
		return acc
	},[Infinity,0])[1]
};
let res =maxProfit([7,1,5,3,6,4])
console.log(res)
