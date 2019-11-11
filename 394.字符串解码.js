/*
 * @lc app=leetcode.cn id=394 lang=javascript
 *
 * [394] 字符串解码
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
	// let stack = []
	// for(let i = 0;i<s.length;i++){
	// 	stack.push(s[i])
	// 	if(s[i]===']'){
	// 		stack.pop()
	// 		let ts = ''
	// 		let count = ''
	// 		while(stack[stack.length-1]!=='['){
	// 			ts = stack.pop() + ts
	// 		}
	// 		stack.pop()
	// 		while(stack[stack.length-1]&&stack[stack.length-1].match(/[0-9]/)){
	// 			count = stack.pop() + count
	// 		}
	// 		count = parseInt(count)
	// 		let tts = ''
	// 		while(count){
	// 			tts += ts
	// 			count--
	// 		}
	// 		stack.push(tts)
	// 	}
	// }
	// let res = ''
	// while(stack.length){
	// 	res = stack.pop() + res
	// }
	// return res
	let num = 0
	let nStack = []
	let sStack = []
	let ts = ''
	let res = ''
	for (i of s){
		// console.log(i)
		if(i.match(/[0-9]/)){
			num = num*10+parseInt(i)
		}else if(i==='['){
			nStack.push(num)
			sStack.push(ts)
			num = 0
			ts = ''
		}else if(i===']'){
			num = nStack.pop()
			ts = sStack.pop() + ts.repeat(num)
			if (!nStack.length) {
                res += ts
                ts = ''
            }
			num = 0
		}else{
			ts+=i
		}
	}
	return res + ts
};
// @lc code=end
// let test = '2[abc]3[cd]ef'
// let res = decodeString(test)
// console.log(res)


