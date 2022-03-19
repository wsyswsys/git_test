function favoriteAnimal(animal){
    console.log(animal + " is my favorite animal!")
}

favoriteAnimal('Dog')
favoriteAnimal('Cat')

let userName= 'Goldie'

function showMessage(){
    let message = 'Hello, I\'m Javascript!'
    userName='Hamza'
    console.log(message , userName)
}
//console.log(userName)
//showMessage()

function showMessage(from , text ="no text again"/*anotherFunction()*/){
    from = '*' + from + '*'
    //console.log(from + ': ' + text )
}
let from =' Ann'
//console.log(from)
//showMessage(from, 'Hello!')
//showMessage(from, "What's up?")
//showMessage('Ann')
function showMessage(text){
    /*if(text === undefined){
        text = 'empty message'
    }*/
    text = text || 'empty'
    console.log(text)
}
//showMessage()

function showCount(count){
    console.log(count ?? 'unknown')
}
/*showCount(0)
showCount(null)
showCount()*/

/*
function Sum(a,b){
    return a+b
}
let result = Sum(1,2)
//console.log(result)
function checkAge(age){
    if(age >= 18){
        return true;
    }else{
        return confirm('Do you have permission from your parents?')
    }
}
//let age=prompt('How old are you?' , 18)

if(checkAge(age)){
    console.log('Access granted')
}else{
    console.log('Access denied')
}

function showMovie(age){
    if(!checkAge(age)){
        return;
    }
    console.log('Showing you the movie')
}*/

function pow( num, p){
    let result = num;
    //console.log(result)
    for(let i=1;i<p;i++){
        result *= num
    }
    console.log(result)
}
//pow(2,3)

function sayHi(){
    console.log('Hello')
}
//sayHi()
//let sayHi = function (){
    //console.log('Hello say Hi')
//}
//console.log(sayHi)
/*
function ask(question, yes, no){
    if(confirm(question)) {yes()}
    else no()
}*/
/*
function showOk(){
    console.log('You agreed')
}

function showCancel(){
    console.log('You canceled the exection.')
}

ask('Do you agree?', showOk, showCancel)*/
/*
ask('Do you agree?', () => {
    console.log('You agreed')
}, () => {
    console.log('You disagreed/canceled')
})*/

let age=prompt('What is your age?',18)
if(age < 18){
    function welcome(){
        console.log('Hello!')
    }
}else{
    function welcome(){
        console.log('Greeting')
    }
}
welcome()