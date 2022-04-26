class Stack {
    constructor(){
        this.database = []
    }
    push(v){
        this.database.push(v)
    }
    pop(){
        return this.database.pop()
    }
    isEmpty(){
        return this.database.length === 0
    }
}

var CQueue = function() {
    this.s_in = new Stack()
    this.s_out = new Stack()
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.s_in.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if(!this.s_out.isEmpty()){
        return this.s_out.pop()
    }else{
        console.log(this.s_in)
        if(this.s_in.isEmpty())return -1
        while(!this.s_in.isEmpty()){
            this.s_out.push(this.s_in.pop())
        }
        return this.deleteHead()
    }

};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */


var obj = new CQueue()
console.log(obj.appendTail(3))
console.log(obj.deleteHead())
console.log(obj.deleteHead())
console.log(obj.deleteHead())