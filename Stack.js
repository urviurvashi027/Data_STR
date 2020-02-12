class Stack{

    constructor(){
        this.item = [];
    }

    //insert
    push(data){
        this.item.push(data);
    }
    //remove
    pop(){
        if(this.item.length == 0){
            return "UnderFlow"
        }
        else{
            this.item.pop()
        }
    }
    //length
    getLen(){
        return this.item.length;
    }
    //peek
    peek(){
        return this.item[length-1];
    }
    //isEmpty
    isEmpty(){
        return this.item.length === 0;
    }
    //PrintStack

    printStack(){
        var str = " ";
        for(var i=0; i< this.item.length;i++){
            str += this.item[i] + " ";
        }
        return str;
    }

}



var stack = new Stack();
console.log(stack.isEmpty(),"Empyt");
console.log(stack.pop(),"underflow");
stack.push(10);
stack.push(30);
stack.push(770);
console.log(stack.printStack(),"print stack");
stack.pop()
console.log("pop");
console.log(stack.printStack())