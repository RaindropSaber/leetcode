/*
 * @lc app=leetcode.cn id=328 lang=javascript
 *
 * [328] 奇偶链表
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
 * @return {ListNode}
 */
var oddEvenList = function(head) {
	let o = {}
	let j = {}
	let oH = null
	let target = head
	let i = 1
	while (target){
		if(i%2){
			j.next = target
			j = j.next
		}else{
			if(!oH){
				oH = target
			}
			o.next = target
			o = o.next
		}
		i++
		target = target.next
	}
	j.next = oH
	o.next = null
	return head
};


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
// a2.next = a3
// a3.next = a4
// a4.next = a5
// let res = oddEvenList(a1,1)
// getList(res)
// @lc code=end

