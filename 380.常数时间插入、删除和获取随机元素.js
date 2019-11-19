/*
 * @lc app=leetcode.cn id=380 lang=javascript
 *
 * [380] 常数时间插入、删除和获取随机元素
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
	this.map = {}
	this.dateBase = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
	if(this.map.hasOwnProperty(val))return false
	this.dateBase.push(val)
	this.map[val] = this.dateBase.length-1
	return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
	if(!this.map.hasOwnProperty(val))return false
	let index = this.map[val]
	let arr=this.dateBase;
	let end = arr.length - 1
	this.map[arr[end]] = this.map[val]

	temp = arr[end]
	arr[end] = arr[index]
	arr[index] = temp

	delete this.map[val]
	arr.pop()
	return true
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
	return this.dateBase[~~(Math.random()*this.dateBase.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// @lc code=end
// var obj = new RandomizedSet()
// obj.insert(0)
// obj.insert(1)
// obj.remove(0)
// obj.remove(0)
// obj.insert(0)
// obj.getRandom()
// obj.remove(0)
// console.log(obj)
// obj.insert(0)
// obj.insert(2)


// let test1 = ["RandomizedSet","insert","remove","insert","getRandom","remove","insert","getRandom"]
// let test2 = [[],[1],[2],[2],[],[1],[2],[]]
// let res = [null]
// var obj = new RandomizedSet()
// for(i in test1){
// 	if(i>0){
// 		res.push(obj[test1[i]](test2[i][0]))
// 	}
// }
// console.log(res)

