/**
 * @param {number[]} postorder
 * @return {boolean}
 */
 var verifyPostorder = function(postorder) {
    //  console.log(`postorder`,postorder)
    if(postorder.length<=2)return true
    const rootVal = postorder.pop()

    for(let i = 0;i<=postorder.length;i++){

        const left  = postorder.slice(0,i)
        const right  = postorder.slice(i)

        !left.find((v)=>v>=rootVal)
        !right.find((v)=>v<=rootVal)
        
        
        if((!left.find((v)=>v>=rootVal)) && (!right.find((v)=>v<=rootVal))){
            let leftRes = verifyPostorder(left)
            let rightRes = verifyPostorder(right)
            // console.log(`left,right`,rootVal,leftValue,rightValue,left,leftRes,right,rightRes)

            if(leftRes && rightRes) return true
        }



        
    }
    return false

};


let test

test = [1,3,2,6,5]

test = [4, 6, 7, 5]

// test = [1,2,5,10,6,9]
test = [1, 2, 3, 4, 5]

console.log(verifyPostorder(test))
