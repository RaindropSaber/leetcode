/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let node = head
	let pre = {next:node}
	let phead = pre
    while(node){
		if(node.val != val){
			pre = node
		}
		node = node.next
		pre.next = node
	}
	return phead.next
};


// class ListNode{
// 	constructor(val,next=null){
// 		this.val = val;
// 		this.next = next;
// 	}
// }
// let a1 = new ListNode(1)
// let a2 = new ListNode(2)
// let a3 = new ListNode(3)
// let a4 = new ListNode(4)
// let a5 = new ListNode(5)

// a1.next = a2
// a2.next = a3
// a3.next = a4
// a4.next = a5
// let res = removeElements(a1,1)
// console.log(res)
// @lc code=end

