/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	if(k===0)return head
	let curl = head
	let prev = null
	let i = 0
	while(curl&&!prev){
		if(!curl.next){
			curl.next = head
			prev = curl
		}
		i++
		curl = curl.next

	}
	k = i - k%i
	while(k){
		prev = curl
		curl = curl.next
		k--
	}
	prev&&(prev.next = null)
	return curl

};
// @lc code=end

// class ListNode{
// 	constructor(val,next=null){
// 		this.val = val;
// 		this.next = next;
// 	}
// }
// function getList(node){
// 	let list = []
// 	while(node){
// 		list.push(node.val)
// 		node = node.next
// 	}
// 	console.log(list)
// 	return list
// }
// let a1 = new ListNode(1)
// let a2 = new ListNode(2)
// let a3 = new ListNode(3)
// let a4 = new ListNode(4)
// let a5 = new ListNode(5)

// a1.next = a2
// // a2.next = a3
// // a3.next = a4
// // a4.next = a5
// let res = rotateRight(a1,2)
// getList(res)
// console.log(res)