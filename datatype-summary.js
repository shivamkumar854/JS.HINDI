// Primitime

// 7 type: string, number, bigint, boolean, null, undefined, symbol,
// BigInt


const score = 100;
const scoreValue=100.3

const isLoggedIn = false;
const outsideTemp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber=345654357664356754n

// Reference (Non primitive)

// 3 type: object, array, function

const heros = ['superman', 'batman', 'spiderman'];
let myObj ={
    name :"shivam",
    age:20,
}

const myFunction = function(){
    console.log('hello world');
}

console.log(typeof myObj);