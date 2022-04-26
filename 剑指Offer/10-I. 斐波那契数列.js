const memo = {}

/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {

    if(n===0)return 0
    if(n===1)return 1
    if(!memo[n]) memo[n] = fib(n-1)+fib(n-2)
    return memo[n]%1000000007
};

console.log(fib(45))//45-1134903170