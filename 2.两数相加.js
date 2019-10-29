/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
	let jinwei = 0
	let curl = {next:null}
	let head = null
    while(l1||l2){
		curl = curl.next||{}
		let sum = (l1?l1.val:0)+(l2?l2.val:0)
		let val = sum%10 + jinwei
		jinwei = sum/10|0
		if(val>=10){
			val -=10
			jinwei+=1
		}
		curl.val = val
		l1 = l1?l1.next:null
		l2 = l2?l2.next:null
		curl.next = l2||l1? {next:null}:null
		!head&&(head = curl)
	}
	if(jinwei){
		curl.next = {val:jinwei,next:null}
	}
	return head
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
// let a2 = new ListNode(8)
// let a3 = new ListNode(3)
// let a4 = new ListNode(9)
// let a5 = new ListNode(9)
// let a6 = new ListNode(4)

// // a1.next = a2
// // a2.next = a3
// a4.next = a5
// // a5.next = a6
// let res = addTwoNumbers(a1,a4)
// console.log(res)
// getList(res)

