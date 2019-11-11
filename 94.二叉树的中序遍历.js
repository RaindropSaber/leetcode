/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
var inorderTraversal = function(root,res=[]) {
	//dfs
	if(root){
		inorderTraversal(root.left,res).push(root.val)
		return inorderTraversal(root.right,res)
	}
	return res


	//statck
	// let res = [];
    // let node = root;
    // let stack = [];
    // while (stack.length > 0 || node !== null) {
    //     if (node) {
    //         stack.push(node);
    //         node = node.left
    //     } else {
    //         node = stack.pop();
    //         res.push(node.val);
    //         node = node.right;
    //     }
    // }
    // return res;
};
// @lc code=end

function TreeNode(val) {
	this.val = val;
	this.left = this.right = null;
}

let A = new TreeNode(1)
let B = new TreeNode(2)
let C = new TreeNode(3)
A.right = B
B.left = C
let res = inorderTraversal(A)
console.log(res)