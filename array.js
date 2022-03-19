//Fundamentals Part4
/*
-Using arrays
-Using built-in array methods
-Usig loops
-Getting your hands dirty with TDD exercises

*/

//Arrays from w3shools

//const cars =['Saab', 'Volvo', 'BMW']
/*
const cars =[]
cars[0]= 'BMW'
cars[1] = 'Volvo'
cars[2] = 'Saab'

const cars1 = new Array('Volvo1', 'BMW1','Saab1')
//document.getElementById('demo').innerHTML= cars1 + cars
cars[0]='Opel'
document.getElementById('demo').innerHTML= cars[0] +' ,'+ cars1[0]

//for Array
const person=['John', 'Doe', 46] //Array
document.getElementById('demo1').innerHTML= person[0]

//Object type
const personObject= {firstName : 'Jhonn', lastName: 'Doee', age:36}
document.getElementById('objectDemo').innerHTML = personObject.lastName

//Array Properties and Methods

cars.length //Return the number of elements

cars.sort() // Sorts the array

const fruits=['Banana', 'Orange', 'Apple', 'Mango']
fruits.push('Lemon')
let length= fruits.length;
document.getElementById('demo2').textContent = length


let text='<ul>'

for(let i=0; i< length; i++){
    text += "<li>" + fruits[i] + '</li>';
}

text += '</ul>'

document.getElementById('demo3').innerHTML = text

let text1='<ol>'
fruits.forEach(myFunc)
text1 += '</ol>'

function myFunc(value){
    text1 += '<li>' + value + '</li>'
}

document.getElementById('demo4').innerHTML = text1

function addElement(){
    fruits[fruits.length] = 'PineApple'
    document.getElementById('demoArray').innerHTML=fruits
}
document.getElementById('typeCheck').innerHTML= typeof fruits
document.getElementById('isArray').innerHTML = Array.isArray(fruits)
//JavaScript does not support arrays with named indexs
//In JavaScript, arrays always use numbered indexes.

//Array Methods
//toString () method return an array as a comma string

document.getElementById('toString').innerHTML = fruits.toString()

document.getElementById('joinS').innerHTML = fruits.join('*')

//Remove array pop() the last elemets

fruits.pop()
//Remove array shift() the first elements (lower index)
fruits.shift()


//Add array push() after last elements
fruits.push()

//Add array unshift() before first elements or (at the beginning)

fruits.unshift()

//Array elements can be deleted using the JS operator delete
//Using delete leaves "undefined" holes in the array
// Use pop() or shift() instead

delete fruits[0]
*/
//Merging (Concatenation) Arrays

const myGirls=['Cecilie','Lone', 'Silly']
const myBoys =['Emil', 'Tobias','Linus']

// concat() method does not change the existing arrays. 
//It always returns a new array.

const myChildren = myGirls.concat(myBoys)
//console.log(myChildren)

const arr1=['Ceilies', 'Lone']
const arr2 = ['Emil','Tobias','Linus']
const arr3 = ['Robin', 'Morgan']

const myChildren1 = arr1.concat(arr2, arr3)
//console.log(myChildren1)

const myChildren3= arr1.concat('Goldie')
//console.log(myChildren3)
/* ****  Splice () methods is Remove the element ***** */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruit = fruits.splice(2, 0, "Lemon", "Kiwi");
//console.log(fruit)
//console.log(myChildren1)
//console.log(myChildren1.splice(2,0,'Emilly','Goldie','Shilly'))
const myArr = arr1.splice(2,1,'Goldie','Emilly')
//console.log(myArr)

//slice() method slices out  a piece of an array into a new array.


const fruitSlice = fruits.slice(1,2)
console.log(fruitSlice)