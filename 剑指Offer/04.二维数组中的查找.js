/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var findNumberIn2DArray = function(matrix, target) {
    for(let lie of matrix){
        const f = lie[0]
        const e = lie[lie.length-1]
        if(f === target || e === target)return true
        if(f < target && e > target) {
            const flag = lie.find((item)=>item === target)
            if(!!flag)return true
        } 
    }
    return false
};

const ssss=[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]]
const target = 15

const res  = findNumberIn2DArray(ssss,target)
console.log(res)