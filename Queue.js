class Queue{

    constructor(){
        this.item = [];
    }

    //insert
    push(data){
        this.item.push(data);
    }
    //remove
    remove(){
        if(this.item.length == 0){
            return "UnderFlow"
        }
        else{
            this.item.shift()
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

    printQueue(){
        var str = " ";
        for(var i=0; i< this.item.length;i++){
            str += this.item[i] + " ";
        }
        return str;
    }

}



var queue = new Queue();
console.log(queue.isEmpty(),"Empyt");
console.log(queue.remove(),"underflow");
queue.push(10);
queue.push(30);
queue.push(770);
console.log(queue.printQueue(),"print queue");
queue.remove()
console.log("pop");
console.log(queue.printQueue())