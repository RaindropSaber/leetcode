/*
 * @lc app=leetcode.cn id=48 lang=javascript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
	let m = matrix.length-1
	for(let i = 0;i<m/2;i++){
		for(let j=i;i+j<m;j++){
			let temp = matrix[i][j]
			matrix[i][j] = matrix[m-j][i] 
			matrix[m-j][i] = matrix[m-i][m-j]
			matrix[m-i][m-j] = matrix[j][m-i]
			matrix[j][m-i] = temp
		}
	}
};
// let matrix = [
// 	[5,1,9,11],
// 	[2,4,8,10],
// 	[13,3,6,7],
// 	[15,14,12,16]
// ]
// matrix = [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9]
// ]
// rotate(matrix)
// console.log(matrix)
// @lc code=end

