/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
	if(rowIndex===0)return [1]
	if(rowIndex===1)return [1,1]
	let res=[1]
    for (let index = 0; index < rowIndex; index++) {
		res=res.reduce((acc,v,i)=>{
			acc[i]=acc[i]+v
			return acc
		},[0,...res])
	}
	return res
};

