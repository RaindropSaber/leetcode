/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
	let fast = mid = target = head
	let newHead = midNext = null

	while(fast){
		midNext = mid.next
		if(fast.next){
			fast = fast.next.next
			mid.next = newHead
			newHead = mid
		}else{
			fast = fast.next
			mid.next = newHead
			newHead = mid.next
		}
		mid = midNext
	}
	// getList(mid)
	// getList(newHead)
	let isPalindromeFlag = true
	while(mid){
		if(mid.val !== newHead.val){
			isPalindromeFlag=false
		}
		mid = mid.next
		newHead = newHead.next
	}
	return isPalindromeFlag
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
// let a2 = new ListNode(0)
// let a3 = new ListNode(0)
// let a4 = new ListNode(1)
// // let a5 = new ListNode(1)

// a1.next = a2
// a2.next = a3
// // a3.next = a4
// // a4.next = a5
// let res = isPalindrome(null)
// console.log(res)

