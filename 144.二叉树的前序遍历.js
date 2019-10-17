/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
		let vvv = []
		if(!root){
			return vvv
		}
		root.left && (vvv = [...vvv,...preorderTraversal(root.left)])
		root.right && (vvv = [...vvv,...preorderTraversal(root.right)])
		return [root.val,...vvv]
};

// let root = {"val":1,"right":{"val":2,"right":null,"left":{"val":3,"right":null,"left":null}}}
// let res = preorderTraversal(root)
// console.log(res)



// @lc code=end

