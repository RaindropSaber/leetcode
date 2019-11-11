/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	this.queue = []
	this.size = 0
};

/**
 * Push element x onto stack.
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	this.size++
	this.queue.push(x)
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	let newQueue = []
	while(this.queue.length!==1){
		newQueue.push(this.queue.shift())
	}
	let last = this.queue.shift()
	this.queue = newQueue
	this.size--
	return last
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	let last = this.pop()
	this.push(last)
	return last
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return this.size === 0
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

var obj = new MyStack()
console.log(obj.push(1))
console.log(obj.push(2))
console.log(obj.top())
console.log(obj.pop())
console.log(obj)
console.log(obj.empty())