/*
 * @lc app=leetcode.cn id=279 lang=javascript
 *
 * [279] 完全平方数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
	// BFS
	let q = [n]
	let s = new Set(q)
	let index = 0
	while(true){
		let nq = []
		index++
		while(q.length){
			let on = q.shift()
			for(let i=0;on-i*i>=0;i++){
				let nn = on-i*i
				if(nn === 0)return index
				if(!s.has(nn)){
					s.add(nn)
					nq.push(nn)
				}
			}
		}
		q = nq
	}


	//dp
	// return new Array(n+1).fill(0).map((v,i,a)=>{
	// 	a[i] = i;
	// 	for(let j=1;i-j*j>=0;j++)a[i] = Math.min(a[i],a[i-j*j]+1)
	// 	return a[i]
	// })[n]

};
// @lc code=end
let N = 12
let res = numSquares(N)
console.log(res)
