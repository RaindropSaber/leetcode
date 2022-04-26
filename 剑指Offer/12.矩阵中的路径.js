/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const dfs = (i,j,k)=>{
        if( i>=m||i<0||j>=n||j<0|| board[i][j] !== word[k] )return false
        if(k === word.length-1)return true
        board[i][j] = ''
        if(dfs(i-1,j,k+1) ||dfs(i+1,j,k+1)||dfs(i,j-1,k+1)||dfs(i,j+1,k+1))return true
        board[i][j] = word[k]
        return false
    }



    let m = board.length; n = board[0].length;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if( dfs(i, j, 0))return true
        }
    }
    return false

};



// const board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
const board = [["a","b"]], word = "ba"

console.log(exist(board,word))