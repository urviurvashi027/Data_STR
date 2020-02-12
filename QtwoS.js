// implement stacks using plain arrays with push and pop functions
var Stack1 = [];
var Stack2 = [];

// implement enqueue method by using only stacks
// and the push and pop functions
function Enqueue(element) {
  Stack1.push(element);
}

// implement dequeue method by pushing all elements
// from stack 1 into stack 2, which reverses the order
// and then popping from stack 2
function Dequeue() {
  if (Stack2.length === 0) {
    if (Stack1.length === 0) { return 'Cannot dequeue because queue is empty'; }
    while (Stack1.length > 0) {
      var p = Stack1.pop();
      Stack2.push(p);
    }
  }
  return Stack2.pop();
}

function printStack1(){
    var str = " ";
    for(var i=0; i< Stack1.length;i++){
        str += Stack1[i] + " ";
    }
    return str;
}

function printStack2(){
    var str = " ";
    for(var i=0; i< Stack2.length;i++){
        str += Stack2[i] + " ";
    }
    return str;
}

Enqueue('a');
Enqueue('b');
Enqueue('c');
console.log(printStack1(),"1");
console.log(printStack2(),"2");
Dequeue(); 
console.log(printStack1(),"1");
console.log(printStack2(),"2");