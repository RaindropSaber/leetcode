/*
 * @lc app=leetcode.cn id=54 lang=javascript
 *
 * [54] 螺旋矩阵
 *
 * https://leetcode-cn.com/problems/spiral-matrix/description/
 *
 * algorithms
 * Medium (36.88%)
 * Likes:    242
 * Dislikes: 0
 * Total Accepted:    31K
 * Total Submissions: 82.5K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个包含 m x n 个元素的矩阵（m 行, n 列），请按照顺时针螺旋顺序，返回矩阵中的所有元素。
 *
 * 示例 1:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 * 输出: [1,2,3,6,9,8,7,4,5]
 *
 *
 * 示例 2:
 *
 * 输入:
 * [
 * ⁠ [1, 2, 3, 4],
 * ⁠ [5, 6, 7, 8],
 * ⁠ [9,10,11,12],
 * ]
 * 输出: [1,2,3,4,8,12,11,10,9,5,6,7]
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
	let res = []
	let h = matrix.length
	if(!h)return []
	let w = matrix[0].length
	let ii = 0
	let j = 0
	let b = w-j
	let c = 1
	while(b){
		for(let i = 0;i<b;i++){
			ii+=c
			let hi = (ii-1)/w|0
			let wi = (ii-1)%w
			try{
				res.push(matrix[hi][wi])
			}catch{
				return res
			}
		}
		if(c === 1){
			c = w
			j++
			b = h - j
		}else if(c === w){
			c = -1
			b = w - j
		}else if(c === -1){
			c = -w
			j++
			b = h - j
		}else if(c === -w){
			c = 1
			b = w - j
		}
	}
	return res
};
// @lc code=end

// let test = [
// 		[ 1, 2, 3 ],
// 		[ 4, 5, 6 ],
// 		[ 7, 8, 9 ]
// 	]
// test = [
// 	[1, 2, 3, 4],
// 	[5, 6, 7, 8],
// 	[9,10,11,12],
// ]
// test = [[7],[9],[6]]

// let res = spiralOrder(test)
// console.log(res)
