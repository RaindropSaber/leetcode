const memo ={}
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    if(n===0)return 1
    if(n===1)return 1
    if(n===2)return 2

    if(!memo[n]) memo[n] = numWays(n-1)+numWays(n-2)
    return memo[n]%1000000007

};


console.log(numWays(45))//45-1134903170
