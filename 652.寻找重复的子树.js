/*找重复的子树
 * @lc app=leetcode.cn id=652 lang=javascript
 *
 * [652] 寻找重复的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
	let set = new Set()
	let list = []
	let res = []
	function qqq(node) {
		if(!node)return
		let nnn = ''+node.val+qqq(node.left)+qqq(node.right)
		if(set.has(nnn)){
			if(!list.includes(nnn)){
				list.push(nnn)
				res.push(node)
			}
		}else{
			set.add(nnn)
		}
		return nnn

	}
	qqq(root)
	return res



	// const ans = []
	// if (!root) {
	//   return ans
	// }

	// // 记录所有的路径
	// const m = {}
	// help(root)

	// return ans

	// function help (root) {
	//   if (!root) {
	// 	return
	//   }

	//   const path = `${root.val},${help(root.left)},${help(root.right)}`
	//   console.log(path)
	//   m[path] = m[path] || 0
	//   if (m[path]++ === 1) {
	// 	ans.push(root)
	//   }
	//   return path
	// }
};
// @lc code=end

// function TreeNode(val) {
// 	this.val = val;
// 	this.left = this.right = null;
// }
// let a1 = new TreeNode(0)
// let a2 = new TreeNode(0)
// let a3 = new TreeNode(0)
// let a4 = new TreeNode(0)
// let a5 = new TreeNode(0)
// let a6 = new TreeNode(0)

// a1.left = a2
// a1.right = a3
// a2.left = a4
// a3.right = a5
// a5.right = a6
// let res = findDuplicateSubtrees(a1)
// console.log(res)