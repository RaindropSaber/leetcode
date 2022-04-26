/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var spiralOrder = function(matrix) {

    const m = matrix.length
    if(!m)return []
    const n = matrix[0].length

    const right = (i,j)=> [i,j+1]
    const down = (i,j)=> [i+1,j]
    const left = (i,j)=> [i,j-1]
    const up = (i,j)=> [i-1,j]

    let run = [right,down,left,up]
    let count = run[0]


    const res = []
    const map = {}
    let j =0,k=-1

    for(let i=0;i<m*n;i++){
        let [_j,_k] = count(j,k)
        console.log(res,_j,_k,count)
        if(_j>=m||_j<0||_k>=n||_k<0||map[`${_j}_${_k}`]){
            run = [run[1],run[2],run[3],run[0]]
            count = run[0]
            i--
        }else{
            res.push(matrix[_j][_k])
            map[`${_j}_${_k}`] = true
            j = _j
            k = _k
        }
    }
    return res

};


const matrix = [[2,5],[8,4],[0,-1]]
console.log(`res`,spiralOrder(matrix))