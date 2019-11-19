/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
	let sum = Infinity
	let res = []
	list1.forEach((v,i1) => {
		let i2 =  list2.indexOf(v)
		if(i2>-1){
			let newSum = i2 + i1
			if(newSum<sum){
				sum=newSum
				res = [v]
			}
			else if(newSum===sum){
				res.push(v)
			}
		}
	})
	// console.log(res)
	return res
};
// @lc code=end
// let tList1 = ["Shogun","Tapioca Express","Burger King","KFC"]
// let tList2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// let res = findRestaurant(tList1,tList2)
// console.log(res)

