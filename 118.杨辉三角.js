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

	// if(!numRows)return []
	// if(numRows===1)return [[1]]
	// let res=[],ans=[1]
	// for (let index = 0; index < numRows; index++) {
	// 	res.push(ans)
	// 	ans=ans.reduce((acc,v,i)=>{
	// 		acc[i]=acc[i]+v
	// 		return acc
	// 	},[0,...ans])

	// }
	// return res

	// let res = []
	// for(let index = 0; index < numRows; index++){
	// 	let s = Math.pow(11,index)
	// 	res.push(s.toString().split('').map(v=>parseInt(v)))
	// }
	// return res

	let res = []
	let list = []
	for(let index = 0; index < numRows; index++){
		list = list.map((v,i,a)=>v+(a[i+1]||0))
		list.unshift(1)
		res.push(list)
	}
	return res




	// if(!numRows)return []
	// if(numRows===1)return [[1]]
	// let res=[],ans=[1]
	// for (let index = 0; index < numRows; index++) {
	// 	res.push(ans)
	// 	ans=ans.reduce((acc,v,i)=>{
	// 		acc[i]=acc[i]+v
	// 		return acc
	// 	},[0,...ans])
	// }

};
// let res=generate(5)
// console.log(res)
