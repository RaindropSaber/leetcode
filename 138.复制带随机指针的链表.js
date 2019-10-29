/*
 * @lc app=leetcode.cn id=138 lang=javascript
 *
 * [138] 复制带随机指针的链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
	let curl1 = curl2 = head
	while(curl1){
		curl1.copy = new Node(curl1.val,null,null)
		curl1 = curl1.next
	}
	while(curl2){
		let copy = curl2.copy
		let cNext = curl2.next?curl2.next.copy:null
		let cRandom = curl2.random?curl2.random.copy:null
		copy.next = cNext
		copy.random = cRandom
		curl2 = curl2.next

	}
	return head?head.copy:null
};
// @lc code=end

