/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {

	//暴力
	// let O = []
	// let C = []
	// T.forEach((v,i)=>{
	// 	O.forEach((v2,i2)=>{
	// 		if(v2===null)return
	// 		if(v>v2[0]){
	// 			C[i2] = v2.length
	// 			O[i2] = null
	// 		}else{
	// 			v2.push(v)
	// 			C[i2] = 0
	// 		}
	// 	})
	// 	O[i] = [v]
	// })
	// C.push(0)
	// return C


	单调栈
	let res2 = []
	let kkk2 = new Array(T.length)
    for (let i = 0; i < T.length; i++) {
        while (res2.length && T[res2[res2.length - 1]] < T[i]) {
			let c = res2.pop()
			kkk2[c] = i - c
		}
		kkk2[i] = 0
		res2.push(i)
	}
	return kkk2


	//dp
	dp = new Array(T.length).fill(0)
	for(let i = 0;i<T.length;i++){
		let curl = T.length - 1 - i
		let next = curl+1
		while(next<T.length){
			if(T[next]>T[curl]){
				dp[curl] += 1
				break
			}else{
				if(!dp[next]) {
					dp[curl] = 0
					break
				}
				next = next + dp[next]
				dp[curl] = next-curl-1
			}
		}
	}
	return dp
};
// @lc code=end
// let test = [73,73,73,73,73,73,73,73]
// let test = [73, 74, 75, 71, 69, 72, 76, 73]
// let test = [89,62,70,58,47,47,46,76,100,70]
// let test = [55,38,53,81,61,93,97,32,43,78]
// let test = [73,74,75,71,69,72,76,73]
// let res = dailyTemperatures(test)
// console.log(res)