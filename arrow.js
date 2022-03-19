//arrow functions
/*let func =(arg1, arg2, arg3, ..., argN) => expression ;

let func1 = function(arg1, arg2, ..., argN){
    return expression;
};
*/
'use strict'
const ps= require('prompt-sync')
const prompt = ps()
const confirm =ps()

/*
1.without curly braces ( ...args) => expression - the right side is an expression : the function evaluates it and returns the result
2. With curly braces : (...args) => {body} - brackets allow us to write multiple statements inside the function, but we need an explicit return to return something

*/
let sum = (a,b) => a+b;

let sum1 = function(a,b){
    return a+b;
}
//console.log(sum(1,3))
//console.log(sum1(3,4))

let double = n => n*2;
//console.log('double', double(3))

let sayHi = () => console.log('Hellow Goldie')
//sayHi()

//let age=prompt('What is your age?', 18)

//let welcome = (age<18)? () => console.log('Less than 18'): () => console.log('Greetings!, Greater than 18')

//welcome()

function ask(question, yes, no){
    if(confirm(question)) yes()
    else no()
}

ask(
    'Do yo agree?',
    () => console.log('Yes, agreed'),
    () => console.log('No agreed.')
)
