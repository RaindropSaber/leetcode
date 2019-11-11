/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = []
	this.mode = 'I'
	this.size = 0
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
	if(this.mode === 'O'){
		this.switch()
	}
	this.size++
	this.stack.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
	if(this.mode === 'I'){
		this.switch()
	}
	this.size--
	return this.stack.pop()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
	if(this.mode === 'I'){
		this.switch()
	}
	return this.stack[this.size-1]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
	return this.stack.length===0
};

MyQueue.prototype.switch = function() {
	let newstack = []
	while(this.stack.length){
		newstack.push(this.stack.pop())
	}
	this.stack = newstack
	this.mode = this.mode==='I'?'O':'I'
};


/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end
// /{\bobj\.\S*}/g
// var obj = new MyQueue()
// console.log(obj.push(1))
// console.log(obj.push(2))
// console.log(obj.peek())
// console.log(obj)
// console.log(obj.pop())
// console.log(obj.empty())


