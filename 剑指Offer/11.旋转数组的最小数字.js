/**
 * @param {number[]} numbers
 * @return {number}
 */
 var minArray = function(numbers) {
    if(numbers.length === 1)return numbers[0]
    for (let  i = 1;i<numbers.length;i++){
        const v1 = numbers[i-1]
        const v2 = numbers[i]
        if(v1>v2)return v2
    }
    return numbers[0]

};

console.log(minArray([2,2,2,0,1]))
// console.log(minArray([1,3,5]))