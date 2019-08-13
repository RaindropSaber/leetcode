/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */
/**
 * @param {number} numRows
 * @return {number[][]}
 */
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
var generate = function(numRows) {
	if(!numRows)return []
	if(numRows===1)return [[1]]
	// qqq=(ans)=>{
	// 	return ans.reduce((acc,v,i)=>{
	// 		acc[i]=acc[i]+v
	// 		return acc
	// 	},[0,...ans])
	// }
	let res=[],ans=[1]
	for (let index = 0; index < numRows; index++) {
		res.push(ans)
		ans=ans.reduce((acc,v,i)=>{
			acc[i]=acc[i]+v
			return acc
		},[0,...ans])
	}
	return res
};
// let res=generate(5)
// console.log(res)
