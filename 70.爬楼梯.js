/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 *
 * https://leetcode-cn.com/problems/climbing-stairs/description/
 *
 * algorithms
 * Easy (44.92%)
 * Total Accepted:    42.5K
 * Total Submissions: 94.5K
 * Testcase Example:  '2'
 *
 * 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
 *
 * 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 *
 * 注意：给定 n 是一个正整数。
 *
 * 示例 1：
 *
 * 输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 * 示例 2：
 *
 * 输入： 3
 * 输出： 3
 * 解释： 有三种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶 + 1 阶
 * 2.  1 阶 + 2 阶
 * 3.  2 阶 + 1 阶
 *
 *
 */
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
	// switch (n) {
	// 	case 0:
	// 	case 1:
	// 		return 1
	// 	default:
	// 		return climbStairs(n-2)+climbStairs(n-1)
	// }
	let a=[]
	for (let i = 0; i <=n; i++) {
		switch (i) {
			case 0:
			case 1:
				a.push(1)
				break
			default:
				a.push(a[i-2]+a[i-1])
				break
		}
	}
	return a[n]
}
