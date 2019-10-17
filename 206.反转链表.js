/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
var reverseList = function(head) {
	if(!head)return head
	let temp = null
	let target = head
	let targetn = target.next
	while(target){
		targetn = target.next
		target.next = temp
		temp = target
		target = targetn
	}
	return temp
};


let a3={v:3,next:null}
let a2={v:2,next:a3}
let a1={v:1,next:a2}
let a0={v:0,next:a1}
let a = reverseList(a0)
console.log(a)

