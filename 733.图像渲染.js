/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
	//dfs
	// function dfs(image, sr, sc, newColor ,oldColor) {
	// 	if(sr<0||sc<0||sr>=mr||sc>=mc||image[sr][sc]!==oldColor){
	// 		return
	// 	}
	// 	image[sr][sc] = newColor
	// 	dfs(image, sr+1, sc, newColor ,oldColor)
	// 	dfs(image, sr-1, sc, newColor ,oldColor)
	// 	dfs(image, sr, sc+1, newColor ,oldColor)
	// 	dfs(image, sr, sc-1, newColor ,oldColor)
	// }
	// let mr = image.length
	// let mc = image[0].length
	// let oldColor = image[sr][sc]
	// if(oldColor===newColor)return image
	// dfs(image, sr, sc, newColor ,oldColor)
	// // console.log(image)
	// return image


	//bfs
	function bfs(image, sr, sc, newColor ,oldColor){
		if(sr<0||sc<0||sr>=mr||sc>=mc||image[sr][sc]!==oldColor){
			return
		}
		image[sr][sc] = newColor
		queue.push([sr-1,sc])
		queue.push([sr+1,sc])
		queue.push([sr,sc-1])
		queue.push([sr,sc+1])
		return queue
	}
	let mr = image.length
	let mc = image[0].length
	let oldColor = image[sr][sc]
	if(oldColor===newColor)return image
	let queue = [[sr,sc]]
	while(queue.length){
		let [sr,sc] = queue.shift()
		bfs(image, sr, sc, newColor ,oldColor)
	}
	return image

};
// @lc code=end

// let image = [
// 	[1,1,1],
// 	[1,1,0],
// 	[1,0,1]
// ]
// let image = [
// 	[0,0,0],
// 	[0,1,1]
// ]
// let sr = 1
// let sc = 1
// let newColor = 2
// let res = floodFill(image, sr, sc, newColor)
// console.log(res)