/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
	let statck = []
	statck.flag = false
	statck.add = function (v){
		if(!!(v==='+'||v==='-'||v==='*'||v==='/')){
			this.push(v)
			this.flag = false
		}else if(!this.flag){
			this.push(v)
			this.flag = true
		}else{
			let v2 = parseInt(this.pop())
			v = parseInt(v)
			let fu = this.pop()
			let res
			let tail = this[this.length-1]
			this.flag = tail&&!(tail==='+'||tail==='-'||tail==='*'||tail==='/')
			switch (fu) {
				case '+':
					res = v + v2
					break;
				case '-':
					res = v - v2
					break;
				case '*':
					res = v * v2
					break;
				case '/':
					res = v / v2 | 0
					break;
			}
			this.add(res.toString())
		}
	}
	tokens.reduceRight((acc,v)=>{
		statck.add(v)
	},'')
	return parseInt(statck[0])
};
// @lc code=end
// let test = ["2", "1", "+", "3", "*"]
// let test = ["4", "13", "5", "/", "+"]
// let test = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
// let res = evalRPN(test)
// console.log(res)