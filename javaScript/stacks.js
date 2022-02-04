// Array as Stack implementation in  JAvascrpt

let letters = [] ;
let word = "thisisaStack" ;
let rword = "" ;

//push letter by letter
for (let i = 0; i < word.length; i++) {
    letters.push(word[i]);
 }

// pop off in reverse order
for (i = 0; i < word.length; i++) {
    rword += letters.pop();
}

rword === word ? console.log(`${word} is a palindrome`) : console.log(`${word} is not a palindrome`) ;

//  Stack implementation
var Stack = function() {
    this.count = 0 ;
    this.storage = { };

    this.push = function(value){
        this.storage[this.count] = value ;
        this.count ++;
    }

    this.pop = function(){
        if (this.count === 0 ){
            return undefined;
        }

        this.count --;
        var result = this.storage[this.count] ;
        delete this.storage[this.count] ;
        return result ;
    }

    this.size = function(){
        return this.count ;
    }

    //Return Value At end of stack
    this.peek = function() {
        return this.storage[this.count -1];
    }
}


var myStack = new Stack() ;

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("PythonislessConfusing");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());