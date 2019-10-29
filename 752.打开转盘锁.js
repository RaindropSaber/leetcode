/*
 * @lc app=leetcode.cn id=752 lang=javascript
 *
 * [752] 打开转盘锁
 */

// @lc code=start
/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function(deadends, target) {
	if(deadends.includes('0000'))return -1
	function getNexts(cur){
			let list=[];
			for(let i=0; i<4; i++){
				let curArr=cur.split('');
				let modChar=Number(cur.charAt(i));
				curArr[i]=modChar=='0'?'9':(modChar-1)
				list.push(curArr.join(''));
				curArr[i]=modChar=='9'?'0':(modChar+1);
				list.push(curArr.join(''));
			}
			return list;
	}

	let deadendSet = new Set(deadends)
	let isFind = false
	let targetList = [target]
	let i = 0

	while(targetList.length&&!isFind){
		i++
		targetList = targetList.reduce((acc,v)=>{
			getNexts(v).filter((next)=>{
				if(deadendSet.has(next)){
					return false
				}else{
					if(next === '0000')isFind = true
					deadendSet.add(next)
					acc.push(next)
					return true
				}
			})
			return acc
		},[])
	}

	if(isFind) return i
	return -1
};
let deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// let deadends = ["8888"], target = "0009"
// let deadends = ["0000"], target = "8888"
// let deadends = ["1002","1220","0122","0112","0121"], target = "1200"
// let deadends = ["0201","0101","0102","1212","2002"], target = "0202"
let res = openLock(deadends,target)
console.log(res)
// @lc code=end

