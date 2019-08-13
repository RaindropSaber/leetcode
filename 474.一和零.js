/*
 * @lc app=leetcode.cn id=474 lang=javascript
 *
 * [474] 一和零
 *
 * https://leetcode-cn.com/problems/ones-and-zeroes/description/
 *
 * algorithms
 * Medium (37.68%)
 * Total Accepted:    1.4K
 * Total Submissions: 3.6K
 * Testcase Example:  '["10","0001","111001","1","0"]\n5\n3'
 *
 * 在计算机界中，我们总是追求用有限的资源获取最大的收益。
 *
 * 现在，假设你分别支配着 m 个 0 和 n 个 1。另外，还有一个仅包含 0 和 1 字符串的数组。
 *
 * 你的任务是使用给定的 m 个 0 和 n 个 1 ，找到能拼出存在于数组中的字符串的最大数量。每个 0 和 1 至多被使用一次。
 *
 * 注意:
 *
 *
 * 给定 0 和 1 的数量都不会超过 100。
 * 给定字符串数组的长度不会超过 600。
 *
 *
 * 示例 1:
 *
 *
 * 输入: Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3
 * 输出: 4
 *
 * 解释: 总共 4 个字符串可以通过 5 个 0 和 3 个 1 拼出，即 "10","0001","1","0" 。
 *
 *
 * 示例 2:
 *
 *
 * 输入: Array = {"10", "0", "1"}, m = 1, n = 1
 * 输出: 2
 *
 * 解释: 你可以拼出 "10"，但之后就没有剩余数字了。更好的选择是拼出 "0" 和 "1" 。
 *
 *
 */
/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var findMaxForm = function(strs, m, n) {
	function _a(){
		return strs.map((v)=>{
			let a=v.replace(/1/g,'').length
			return [a,v.length-a]
		})
	}
	function _j(s) {
		j=[j[0]-s[0],j[1]-s[1],]
		return j
	}
	let a=_a()
	let j=[m,n]
	let aaa=new Array(j)
	let q=[]
	a.forEach((v,i,a)=>{
		if(j[0]<v[0]||j[1]<v[1]){
			q[i][j]=q[i-1][j]
		}else{
			q[i][j]=max(q[i-1][j],q[i-1,j-a[i]]+1)
		}
	})
	console.log(a)

}
console.log(findMaxForm(["00",'011','101','1111'],2,6))

// a[i]=[a[i][0],a[i][1]]
// j=[2,6]

// q[i][j]
// if(j[0]<0||j[1]<0){
// 	q[i][j]=q[i-1][j]
// }else{
// 	q[i][j]=max(q[i-1][j],q[i-1,j-a[i]]+1)
// }
