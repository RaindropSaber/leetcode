/*
 * @lc app=leetcode.cn id=62 lang=javascript
 *
 * [62] 不同路径
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
	// let map = {}
	// let  ss = (i,j)=>{
	// 	if(map[`${i}-${j}`]) return map[`${i}-${j}`]
	// 	if(i===m-1 && j ===n-1){
	// 		return 1
	// 	}
	// 	let a = 0
	// 	let b = 0
	// 	if(i<m){
	// 		a = ss(i+1,j)
	// 		map[`${i+1}-${j}`] = a
	// 	}
	// 	if(j<n){
	// 		b = ss(i,j+1)
	// 		map[`${i}-${j+1}`] = b

	// 	}
	// 	return a+b
	// }
	// return ss(0,0)
	
	let dp = []
	for(let i=0;i<m;i++){
        dp[i] = []
		for (let j=0;j<n;j++){
			if(i===0||j===0){
                dp[i][j] = 1
			}else{
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
			}
		}
	}
	return dp[m-1][n-1]
};

let res = uniquePaths(3,7)
console.log(res)
// @lc code=end

