/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
	this.head = null
	this.length = 0
};
var Node = function(val,next=null) {
    this.val = val
    this.next = next
};


/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
	let cur = this.find(index)
	if(!cur)return -1
	return cur.val
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
	this.addAtIndex(0,val)
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
	this.addAtIndex(this.length,val)
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
	let cur
	if(index<=0){
		cur = this.head
		if(!cur) {
			this.head = new Node(val)
		}else{
			this.head = new Node(val,cur)
		}
	}else if(index<=this.length){
		let prev = this.find(index-1)
		if(!prev){
			return
		}
		cur = new Node(val,prev.next)
		prev.next = cur
	}
	this.length+=1
};
MyLinkedList.prototype.find = function(index) {
	let cur = this.head
	if(index<0||index>=this.length){
		return null
	}
	for(let i=0;i<index;i++){
		cur = cur.next
	}
	return cur
};
/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
	if(index===0&&this.length>0){
		this.head = this.head.next
	}
	let prev = this.find(index-1)
	if(!prev)return
	let cur = prev.next
	if(!cur)return
	let next = cur.next
	prev.next = next
	this.length-=1
};

// MyLinkedList.prototype.getList = function(index) {
// 	let cur = this.head
// 	let list = []
// 	while(cur){
// 		list.push(cur.val)
// 		cur = cur.next
// 	}
// 	return list
// };



// let myNodeList = new MyLinkedList()
// myNodeList.addAtHead(1)
// console.log(myNodeList.getList())

// myNodeList.addAtTail(3);
// console.log(myNodeList.getList())

// myNodeList.addAtIndex(1,2);
// console.log(myNodeList.getList())

// let a=myNodeList.get(1)
// myNodeList.deleteAtIndex(0)
// let b=myNodeList.get(0)
// console.log(a)
// console.log(b)
// console.log(myNodeList)
// console.log(myNodeList.getList())