// 地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。请问该机器人能够到达多少个格子？

//  

// 示例 1：

// 输入：m = 2, n = 3, k = 1
// 输出：3
// 示例 2：

// 输入：m = 3, n = 1, k = 0
// 输出：1
// 提示：

// 1 <= n,m <= 100
// 0 <= k <= 20

const logger = (fn,p)=>{
    return (...args)=>{
        let res = fn(...args)
        console.log(p,res)
        return res
    }
}


/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var movingCount = function(m, n, k) {

    const count = (number)=>{
        if(number === 100)return 1
        if(number < 10) return number
        return (number/10|0)+number%10
    }
    let index = 0
    const map = {}

    const dfs = (i,j)=>{
        if(`${i}_${j}` in map)return false
        if(i>=m||i<0||j>=n||j<0)return false
        if((count(i)+count(j))>k)return false
        map[`${i}_${j}`] = true
        index++
        dfs(i-1,j)
        dfs(i+1,j)
        dfs(i,j-1)
        dfs(i,j+1)



    }
    dfs(0,0)
    return index


};
let m = 38, n = 15, k = 9
console.log(movingCount(m,n,k))