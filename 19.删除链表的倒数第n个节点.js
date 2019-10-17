/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
	let b = head
	let k = {val:0,next:head}
    let a = [k]
    while (b){
        a.unshift(b)
        b = b.next
	}
	let c = a[n] || k
	c.next = c.next?c.next.next:null
	return k.next
};

// function ListNode(val) {
// 	this.val = val;
// 	this.next = null;
// }
// let a1 = new ListNode(1)
// let a2 = new ListNode(2)
// // let a3 = new ListNode(3)
// // let a4 = new ListNode(4)
// // let a5 = new ListNode(5)

// a1.next = a2
// // a2.next = a3
// // a3.next = a4
// // a4.next = a5
// let res = removeNthFromEnd(a1,1)
// console.log(res)