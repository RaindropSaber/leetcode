/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
	// let a = `QWERTYUIOPqwertyuiop`
	// let b = `ASDFGHJKLasdfghjkl`
	// let c = `ZXCVBNMzxcvbnm`
	// let map = {}
	// for(s of a){
	// 	map[s] = '1'
	// }
	// for(s of b){
	// 	map[s] = '2'
	// }
	// for(s of c){
	// 	map[s] = '3'
	// }
	let map = {
		Q: '1',
		W: '1',
		E: '1',
		R: '1',
		T: '1',
		Y: '1',
		U: '1',
		I: '1',
		O: '1',
		P: '1',
		q: '1',
		w: '1',
		e: '1',
		r: '1',
		t: '1',
		y: '1',
		u: '1',
		i: '1',
		o: '1',
		p: '1',
		A: '2',
		S: '2',
		D: '2',
		F: '2',
		G: '2',
		H: '2',
		J: '2',
		K: '2',
		L: '2',
		a: '2',
		s: '2',
		d: '2',
		f: '2',
		g: '2',
		h: '2',
		j: '2',
		k: '2',
		l: '2',
		Z: '3',
		X: '3',
		C: '3',
		V: '3',
		B: '3',
		N: '3',
		M: '3',
		z: '3',
		x: '3',
		c: '3',
		v: '3',
		b: '3',
		n: '3',
		m: '3'
	}
	return words.filter((item)=>{
		let flag
		for(s of item){
			if(!flag){
				flag = map[s]
			}else if(flag!==map[s]){
				return false
			}
		}
		return true
	})
};
// findWords(["Hello", "Alaska", "Dad", "Peace"])
// @lc code=end

