/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
	// let sizeA = 0
	// let sizeB = 0
	// let sizeX = 0
	// let headAA = headA
	// let headBB = headB
	// let longNode = headA
	// let shortNode = headB
    // while(headAA){
	// 	sizeA++
	// 	headAA = headAA.next
	// }
	// while(headBB){
	// 	sizeB++
	// 	headBB = headBB.next
	// }
	// sizeX = sizeA - sizeB
	// if(sizeB>sizeA){
	// 	longNode = headB
	// 	shortNode = headA
	//     sizeX = -sizeX
	// }
	// while(sizeX){
	// 	longNode = longNode.next
	// 	sizeX--
	// }
	// while(longNode&&longNode!=shortNode){
	// 	longNode = longNode.next
	// 	shortNode = shortNode.next
	// }
	// return longNode

	let A = headA
	let B = headB
	if(A==null||B==null)return null
	while(A!=B){
		A=A==null?headB:A.next
		B=B==null?headA:B.next
	}
	return A
};

// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }
// let a1 = new ListNode(1)
// let a2 = new ListNode(2)
// let a3 = new ListNode(3)
// let a4 = new ListNode(4)
// let a5 = new ListNode(5)
// let a6 = new ListNode(6)
// let a7 = new ListNode(7)
// let a8 = new ListNode(8)

// a0.next = a1
// a1.next = a2
// a2.next = a3
// a3.next = a4

// a5.next = a6
// a6.next = a7
// a7.next = a2
// // a8.next = a3
// let a = getIntersectionNode(a0,a5)
// console.log(a)
