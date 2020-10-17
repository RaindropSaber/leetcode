/*
 * @lc app=leetcode.cn id=208 lang=javascript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var Trie = function() {
	this.root = {
		child:{},
		isEnd:true,
		path:0,
		isWorld:false
	}
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
	let node = this.root
	for(let s of word){
		node.path++
		if(node.isEnd){
			node.isEnd = false
			node.child[s] = {
				child:{},
				isEnd:true,
				path:0,
				isWorld:false
			}
		}else{
			if(!node.child[s]){
				node.child[s] = {
					child:{},
					isEnd:true,
					path:0,
					isWorld:false
				}
			}
		}
		node = node.child[s]
	}
	node.isWorld=true
	node.path++
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
	let node = this.root
	for(let s of word){
		if(!node || node.isEnd){
			return false
		}
		node = node.child[s]

	}
	return !!(node && node.isWorld)
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
	let node = this.root
	for(let s of prefix){
		if(!node || node.isEnd){
			return false
		}
		node = node.child[s]
	}
	return !!node
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

// var obj = new Trie()
// obj.insert('apple')
// obj.insert('app')
// obj.insert('ccc')

// // console.log(JSON.stringify(obj))
// console.log(obj.search('app'))
// console.log(obj.search('ap2p2'))
// console.log(obj.search('apple'))
// console.log(obj.search('ccc'))
// console.log(obj.startsWith('app'))



// @lc code=end

