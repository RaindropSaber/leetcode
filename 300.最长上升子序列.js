/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
	if(!nums.length)return 0
	let resMap = {}
	let resMap2 = {}
	let last
	let max = 1
	nums.forEach((num)=>{
		(!last || num < last) && (resMap[num] = [[num,1]],resMap2[num]=1)
		Object.keys(resMap).forEach((v)=>{
			if(num>parseInt(v)){
				resMap[v] && resMap[v].forEach((vv,ii,aa)=>{
					if(num>vv[0] && resMap[v]){
						let nn = vv[1]+1
						!resMap[v].find((item,i)=>{
							if(item[0]===num){
								console.log(i)
								resMap[v][i]=([num,nn])
								return true
							}
						}) && resMap[v].push([num,nn])
						if(nn>max){
							resMap2[v] = nn
							Object.keys(resMap2).forEach((it)=>{
								if(parseInt(it)>v && nn>resMap2[it]) {
									delete resMap[it]
									delete resMap2[it]
								}
							})
							max = nn
						}
					}
				})
			}
		})
		last = num
	})
	console.log(resMap)
	console.log(resMap2)
	return max
	// let res = resList.reduce((acc,v)=>{
	// 	return v && v[2]>acc?v[2]:acc
	// },0)
	// return res

};
// let test = [10,9,2,5]
let test = [3,5,6,2,5,4,19,5,6,7,12]
let res = lengthOfLIS(test)
console.log(res)
// @lc code=end

