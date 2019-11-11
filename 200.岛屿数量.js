/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {



	//BFS
	// let width = grid.length
	// if(!width||!grid[0]) return 0
	// let length = grid[0].length
	// let area = width*length
	// let index = 0
	// let count = 0

	// while(index<area){
	// 	let [x,y] = [index%width,index/width|0]
	// 	if(grid[x][y]==='1'){
	// 		let queue = [[x,y]]
	// 		while(queue.length){
	// 			let [tx,ty] = queue.shift()
	// 			grid[tx][ty] = '0'

	// 			let rx = tx+1
	// 			rx<width && grid[rx][ty] === '1' && queue.push([rx,ty]) && (grid[rx][ty] = '0')
	// 			// console.log(grid)

	// 			let lx = tx-1
	// 			lx>=0 && grid[lx][ty] === '1' && queue.push([lx,ty]) && (grid[lx][ty] = '0')
	// 			// console.log(grid)

	// 			let uy = ty-1
	// 			uy>=0 && grid[tx][uy] === '1' && queue.push([tx,uy]) && (grid[tx][uy] = '0')
	// 			// console.log(grid)

	// 			let dy = ty+1
	// 			dy<length && grid[tx][dy] === '1' && queue.push([tx,dy]) && (grid[tx][dy] = '0')
	// 			// console.log(grid)
	// 		}
	// 		count++
	// 	}
	// 	index++
	// }
	// return count


	//dfs
	function dfs(x,y) {
		grid[x][y] = '0'
		grid[x+1] && grid[x+1][y]==='1' && dfs(x+1,y)
		grid[x-1] && grid[x-1][y]==='1' && dfs(x-1,y)
		grid[x][y+1] && grid[x][y+1]==='1' && dfs(x,y+1)
		grid[x][y-1] && grid[x][y-1]==='1' && dfs(x,y-1)
	}

	//DFS
	let width = grid.length
	if(!width||!grid[0]) return 0
	let length = grid[0].length
	let area = width*length
	let index = 0
	let count = 0
	while(index<area){
		let [x,y] = [index%width,index/width|0]
		if(grid[x][y]==='1'){
			dfs(x,y)
			count++
		}
		index++
	}
	return count



};

// @lc code=end
// let grid = [
// 	["1","1","1","1","0"],
// 	["1","1","0","1","0"],
// 	["1","1","0","0","0"],
// 	["0","0","1","0","0"]
// ]
// // grid = [
// // 	["1","1","1"],
// // 	["0","1","0"],
// // 	["1","1","1"]
// // ]
// let res = numIslands(grid)
// console.log(res)


// 1 0 1
// 1 1 1
// 1 0 1