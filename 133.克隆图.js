/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,neighbors) {
 *    this.val = val;
 *    this.neighbors = neighbors;
 * };
 */
/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
	let firstVal = node.val
	// let node = node
	let map = {[node.val]:new Node(node.val,[])}
	let stack = []
	while(node){
		// !map[node.val] && (map[node.val] = new Node(node.val,[]))
		node.neighbors.forEach((itemNode)=> {
			if(!map[itemNode.val]){
				map[itemNode.val] = new Node(itemNode.val,[])
				stack.push(itemNode)
			}
			map[node.val].neighbors.push(map[itemNode.val])

		})
		node = stack.pop()
	}
	return map[firstVal]


};
// @lc code=end
// function Node(val,neighbors) {
// 	this.val = val;
// 	this.neighbors = neighbors;
// };
// let node1 = new Node(1,[])
// let node2 = new Node(2,[])
// let node3 = new Node(3,[])
// let node4 = new Node(4,[])

// node1.neighbors.push(node4)
// node1.neighbors.push(node2)

// node2.neighbors.push(node1)
// node2.neighbors.push(node3)

// node3.neighbors.push(node2)
// node3.neighbors.push(node4)

// node4.neighbors.push(node3)
// node4.neighbors.push(node1)
// // console.log(node1)

// let res = cloneGraph(node1)

// console.log(res)

