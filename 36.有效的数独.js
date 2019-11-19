/*
 * @lc app=leetcode.cn id=36 lang=javascript
 *
 * [36] 有效的数独
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
	// let map = {}
	// for(i in board){
	// 	for( j in board[i]){
	// 		let v = board[i][j]
	// 		if(v==='.')continue
	// 		let ij = ''
	// 		if(i<3){
	// 			ij += '0'
	// 		}else if(i<6){
	// 			ij += '3'
	// 		}else{
	// 			ij += '6'
	// 		}
	// 		if(j<3){
	// 			ij += '0'
	// 		}else if(j<6){
	// 			ij += '3'
	// 		}else{
	// 			ij += '6'
	// 		}
	// 		let ms= ['i'+i,'j'+j,ij]
	// 		for( m of ms){
	// 			if(!map[m]){
	// 				map[m] = new Set([v])
	// 			}else{
	// 				if(map[m].has(v)){
	// 					return false
	// 				}else{
	// 					map[m].add(v)
	// 				}
	// 			}
	// 		}
	// 	}
	// }
	// return true

	// for (let i = 0; i < 9; i++) {
	// 	// 遍历行*列
	// 	let row = new Set(), col = new Set()
	// 	for (let j = 0; j < 9; j++) {
	// 	  if (board[i][j] !== '.') {
	// 		if (row.has(board[i][j])) return false
	// 		row.add(board[i][j])
	// 	  }
	// 	  if (board[j][i] !== '.') {
	// 		if (col.has(board[j][i])) return false
	// 		col.add(board[j][i])
	// 	  }
	// 	}
	// 	// 遍历3*3小宫格
	// 	let block = new Set()
	// 	let x = (i / 3 >> 0) * 3, y = i % 3 * 3
	// 	for (let j = 0; j < 9; j++) {
	// 	  if (board[x][y] !== '.') {
	// 		if (block.has(board[x][y])) return false
	// 		block.add(board[x][y])
	// 	  }
	// 	  y++
	// 	  if ((j + 1) % 3 === 0) {
	// 		x += 1
	// 		y -= 3
	// 	  }
	// 	}
	//   }
	//   return true
};
// @lc code=end
// let test = [
// 	["8","3",".",".","7",".",".",".","."],
// 	["6",".",".","1","9","5",".",".","."],
// 	[".","9","8",".",".",".",".","6","."],
// 	["8",".",".",".","6",".",".",".","3"],
// 	["4",".",".","8",".","3",".",".","1"],
// 	["7",".",".",".","2",".",".",".","6"],
// 	[".","6",".",".",".",".","2","8","."],
// 	[".",".",".","4","1","9",".",".","5"],
// 	[".",".",".",".","8",".",".","7","9"]
// ]
// let res = isValidSudoku(test)
// console.log(res)

