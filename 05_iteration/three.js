
// for of 

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3 ,4,5]

for (const num of arr) {
   // console.log(num);
    
}

const greeting = "hello shivam"

for (const greet of greeting) {
  //  console.log(`Each char is ${greet}`);
    
}

// Maps

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITRD STATES OF AMERICA")
map.set('FR', "FRANCE")

//onsole.log(map);

for (const [key, value]of map) {
    console.log(key, ':-',value);
}  
