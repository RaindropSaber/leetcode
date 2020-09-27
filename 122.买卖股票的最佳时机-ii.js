/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
// var maxProfit = function(prices) {
// 	if(!prices.length){return 0}
// 	let min=prices[0]
// 	let max=prices[0]
// 	let res=0
// 	prices.forEach((v)=>{
// 		if(v>=max){
// 			max=v
// 		}else{
// 			res+=max-min
// 			min=v
// 			max=v
// 		}
// 	})
// 	res+=max-min
// 	return res
// };


function convert(list, parentKey, currentKey, rootValue) {
	let map = {}//{0:[16{},19{}],16,19}
	list.forEach((item)=>{
        map[item.parentId]? map[item.parentId].push(item): map[item.parentId] = [item]
	})
    let getChild = (child,parentId)=>{
      
      	if(child && child.length){
          return child.map((node)=>{
              return {
                  id:node.id,
				  children :getChild(map[node.id],node.id),
				  parentId:parentId
              }
          })
        }else{
        	return []
        }
    }
    let node= {
      	id:rootValue,
      	children :getChild(map[rootValue],rootValue)
	}
    return node
}

const list = [
	{
	  "id": 19,
	  "parentId": 0,
	},
	{
	  "id": 18,
	  "parentId": 16,
	},
	{
	  "id": 17,
	  "parentId": 16,
	},
	{
	  "id": 16,
	  "parentId": 0,
	},
	P
];
const result = convert(list, 'parentId', 'id', 0);
console.log(result)


