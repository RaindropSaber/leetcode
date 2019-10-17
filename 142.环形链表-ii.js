/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let fast = head
	let slow = head
	let last = head
	while(fast&&fast.next&&fast.next.next){
		slow = slow.next
		fast = fast.next.next
		if(slow==fast){
			while(slow!=last){
				last = last.next
				slow = slow.next
			}
			return last
		}
	}
	return null
};
// let a3={v:3,next:null}
// let a2={v:2,next:a3}
// let a1={v:1,next:a2}
// let a0={v:0,next:null}
// a3.next = a0
// let a = detectCycle(a0)
// console.log(a)

