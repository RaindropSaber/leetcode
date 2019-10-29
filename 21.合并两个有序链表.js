/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (53.74%)
 * Total Accepted:    60.8K
 * Total Submissions: 112.9K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
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
var mergeTwoLists = function(l1, l2) {
	let head = null
	let curl = {}
	while (l1&&l2){
		if(l1.val<l2.val){
			!head&&(head = l1)
			curl.next = l1
			l1 = l1.next
		}else{
			!head&&(head = l2)
			curl.next = l2
			l2 = l2.next
		}
		// getList(curl)
		// getList(head)
		curl = curl.next
	}
	!head&&(head = l1||l2)
	curl.next = l1||l2
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
// let a2 = new ListNode(2)
// let a3 = new ListNode(4)
// let a4 = new ListNode(1)
// let a5 = new ListNode(3)
// let a6 = new ListNode(4)

// a1.next = a2
// a2.next = a3
// a4.next = a5
// a5.next = a6
// let res = mergeTwoLists(a1,a4)
// console.log(res)
// getList(res)