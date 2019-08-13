/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 *
 * https://leetcode-cn.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (32.69%)
 * Total Accepted:    70.7K
 * Total Submissions: 215.8K
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 *
 * 示例 1:
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 *
 * 示例 2:
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 *
 *
 * 说明:
 *
 * 所有输入只包含小写字母 a-z 。
 *
 */
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	if(!strs.length)return ''
	// return strs.reduce((acc,a)=>{
	// 	let com=''
	// 	for(i=0,length=acc.length;i<length;i++){
	// 		if(acc[i]===a[i]){
	// 			com+=a[i]
	// 		}else{
	// 			break
	// 		}
	// 	}
	// 	return com
	// })
	let a=strs[0]
	let b=''
	for (i=0,l1=a.length;i<l1;i++){
		for(j=0,l2=strs.length;j<l2;j++){
			if(a[i]!==strs[j][i]){
				return b
			}
		}
		b+=a[i]
	}
	return b
}
