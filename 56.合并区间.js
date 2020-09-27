/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
	let dmap = {}
	let arr = []
	let curl = []
	intervals.forEach((v)=>{
		let [l,r] = v
		dmap[l] = dmap[l]?(dmap[l]>r?dmap[l]:r):r
	})
	Object.keys(dmap).forEach((v)=>{
		v = parseInt(v)
		if(!curl.length){
			curl = [v,dmap[v]]
		}else{
			if(v>curl[1]){
				arr.push(curl)
				curl = [v,dmap[v]]
			}
			if(dmap[v]>curl[1]){
				curl[1] = dmap[v]
			}
		}
		console.log(curl)
	})
	curl.length && arr.push(curl)
	return arr
};
// let intervals = []
// let res = merge(intervals)
// console.log(res)
// @lc code=end

