/*
 * @lc app=leetcode.cn id=498 lang=javascript
 *
 * [498] 对角线遍历
 *
 * https://leetcode-cn.com/problems/diagonal-traverse/description/
 *
 * algorithms
 * Medium (38.27%)
 * Likes:    62
 * Dislikes: 0
 * Total Accepted:    8.5K
 * Total Submissions: 21.8K
 * Testcase Example:  '[[1,2,3],[4,5,6],[7,8,9]]'
 *
 * 给定一个含有 M x N 个元素的矩阵（M 行，N 列），请以对角线遍历的顺序返回这个矩阵中的所有元素，对角线遍历如下图所示。
 *
 *
 *
 * 示例:
 *
 * 输入:
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 4, 5, 6 ],
 * ⁠[ 7, 8, 9 ]
 * ]
 *
 * 输出:  [1,2,4,7,5,3,6,8,9]
 *
 * 解释:
 *
 *
 *
 *
 *
 * 说明:
 *
 *
 * 给定矩阵中的元素总数不会超过 100000 。
 *
 *
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var findDiagonalOrder = function(matrix) {
	let M = matrix.length
	if(!M)return[]
	let N = matrix[0].length
	let f = 1
	let h = 0
	let K = M + N - 1
	let res = []
	while(h!==K){
		let i = 0
		let j = h
		if(f){
			i = h
			j = 0
		}
		do{
			if(M>i&&N>j){
				res.push(matrix[i][j])
			}
			if(f){
				i--
				j++
			}else{
				i++
				j--
			}
		}while(j!==-1&&i!==-1)
		f = 1 - f
		h++
	}
	return res
};
// @lc code=end
// let test = [
// 		[ 1, 2, 3 ],
// 		[ 4, 5, 6 ],
// 		[ 7, 8, 9 ]
// 	]
// let res = findDiagonalOrder(test)
// console.log(res)

