/*
 * @lc app=leetcode.cn id=677 lang=javascript
 *
 * [677] 键值映射
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MapSum = function() {
	this.root = {
		child:new Map(),
		val:0,
		isWorld:false
	}
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
	let node = this.root
	for(let s of key){
		if(!node.child.has(s)){
			node.child.set(s,{
				child:new Map(),
				val:0,
				isWorld:false
			})
		}
		node = node.child.get(s)
	}
	node.val = val
	node.isWorld = true
	// console.log(node)
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
	let node = this.root
	for(let i in prefix){
		let s = prefix[i]
		if(!node.child.get(s)){
			if(i>prefix.length-1) {
				console.log(node.val)
				return node.val
			}
			console.log(0)
			return 0
		}
		node = node.child.get(s)
	}
	let res = 0
	let sum = (node)=>{
		if(!node) {
			console.log(res)
			return res
		}
		res+=node.val
		for (let cn of node.child){
			sum(cn[1])
		}

	}
	sum(node)
	console.log(res)
	return res
};

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

var obj = new MapSum()
// obj.insert('aa',3)
// res1 = obj.sum('a')
// console.log(res1)
// obj.insert('aa',2)
// res2 = obj.sum('a')
// res3 = obj.sum('aa')
// console.log(res2)
// console.log(res3)
// obj.insert('aaa',3)
// res4 = obj.sum('aaa')
// res5 = obj.sum('bbb')
// console.log(res4)
// console.log(res5)



obj.insert('a',3)
obj.sum('ap')
obj.insert('b',2)
// obj.sum('a')







// console.log(obj)
// @lc code=end

