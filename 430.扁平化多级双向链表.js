/*
 * @lc app=leetcode.cn id=430 lang=javascript
 *
 * [430] 扁平化多级双向链表
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
	// 递归
	// function digui(curl) {
	// 	let next
	// 	let child
	// 	let last
	// 	if(!curl)return curl
	// 	while(curl){
	// 		next = curl.next
	// 		if(curl.child){
	// 			child = curl.child
	// 			curl.child = null
	// 			curl.next = child
	// 			child.prev = curl
	// 			curl = digui(child)
	// 		}
	// 		if(next){
	// 			curl.next = next
	// 			next.prev = curl
	// 		}else{
	// 			last  = curl
	// 		}
	// 		curl = curl.next
	// 	}
	// 	return last
	// }
	// let c = head
	// if(c){
	// 	digui(c).next = null
	// }
	// return head

	//栈
	let curl = head
	let fNextList = []

	while(curl){
		let next = curl.next
		let child = curl.child
		if(child){
			child.prev = curl
			curl.next = child
			curl.child = null
			let fNext = next
			fNext&&fNextList.unshift(fNext)
			next = child
		}
		if(next){
			curl = next
		}else if(fNextList.length){
			let fNext = fNextList.shift()
			curl.next = fNext
			fNext.prev = curl
			curl = fNext
		}else{
			curl.next = null
			curl = curl.next
		}
	}
	return head

};
// @lc code=end
