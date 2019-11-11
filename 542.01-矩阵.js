/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
    function bfs(sr,sc) {
		let index = 0
		if(sr<0||sc<0||sr>=mr||sc>=mc){
			return false
		}else if(matrix[sr][sc]===0){
			return index
		}else{
			let queue = []
			index++
			queue.push([sr-1,sc])
			queue.push([sr+1,sc])
			queue.push([sr,sc-1])
			queue.push([sr,sc+1])
			return false
		}
	}
	let mr = matrix.length
	let mc = matrix[0].length
	let ccc = new Array(mc).fill(0)
	let res = new Array(mr).fill(ccc)
	for(i in matrix){
		for(j in matrix[i]){
			res[i][j] = bfs(i,j)
		}
	}
	console.log(res)
};
// @lc code=end
let test = [[0,0,0],[0,1,0],[0,0,0]]
let res = updateMatrix(test)
console.log(res)
