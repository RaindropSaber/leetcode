/*
 * @lc app=leetcode.cn id=622 lang=javascript
 *
 * [622] 设计循环队列
 */
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
	this.dateBase = new Array(k)
	this.head = 0
	this.tail = 0
	this.size = k
	this.length = 0
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful.
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
	if(this.isFull()) return false
	this.dateBase[this.tail] = value
	this.length++
	this.tail = (this.tail+1)%this.size
	return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
	if(this.isEmpty()) return false
	this.dateBase[this.head] = null
	this.length --
	this.head = (this.head+1)%this.size
	return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
	if(this.isEmpty())return -1
	return this.dateBase[(this.head+this.size)%this.size]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
	if(this.isEmpty())return -1
	return this.dateBase[(this.tail+this.size-1)%this.size]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
	return this.length === 0
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
	return this.length === this.size
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */
// let obj = new MyCircularQueue(3)
// obj.enQueue(2)
// obj.Rear()
// obj.Front()



// obj.enQueue(2)
// obj.enQueue(3)
// obj.enQueue(4)
// console.log(obj)
// obj.Rear()
// obj.isFull()
// obj.deQueue()
// obj.enQueue(4)
// obj.Rear()
