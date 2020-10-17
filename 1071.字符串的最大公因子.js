/*
 * @lc app=leetcode.cn id=1071 lang=javascript
 *
 * [1071] 字符串的最大公因子
 */

// @lc code=start
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
	function GCD(a,b){
        var temp;
        while(b != 0){
            temp = a % b;
            a = b;
            b = temp;
        }
        return a;
	}
	
	let getS=(s)=>{
		let l = s.length
		let child
		for(let i = 0 ;i<l;i++){
			if(!(l%(i+1))){
				child = s.slice(0,i+1)
				if(child.repeat(l/(i+1))===s)return child
			}
		}
	}

	let res1 = getS(str1)
	let res2 = getS(str2)
	let l1 = str1.length
	let l2 = str2.length
	let i = GCD(l1,l2)
	return res1 === res2?res1.repeat(i/res1.length):''
};
// let str1 = "ABABABAB", str2 = "ABAB"
let str1 = "ABCABC", str2 = "ABC"
let res = gcdOfStrings(str1,str2)
console.log(res)
// @lc code=end

