/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function() {
	this.datebase = []
	this.minList = []
	this.size = 0
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
	this.datebase.push(x)
	this.size++
	if(this.minList.length === 0 || x<= this.getMin()){
		this.minList.push(x)
	}
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
	let min = this.top()
	this.datebase.pop()
	this.size--
	if(min ===  this.getMin()){
		this.minList.pop()
	}
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
	return this.datebase[this.size-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
	return this.minList[this.minList.length-1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

// let A = new MinStack()
// console.log(A.push(-2))
// console.log(A.push(0))
// console.log(A.push(-3))
// console.log(A.getMin())
// console.log(A.pop())
// console.log(A.pop())
// console.log(A.getMin())


