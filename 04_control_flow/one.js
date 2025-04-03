// if

// const isUserloggedIn = true
// const temperature = 41

// if(temperature < 50) {
//     console.log("less than 50");
    
// }
// else {
//     console.log("temperature is greater than 50");
    
// }

// const score = 200

// if (score > 100) {
//     let power = "fly"

//  NOTE : if we are using var inatead of let then its scope is global means bracket ke outside v code run karega but it is wrong method
// issiliye hmlog let use karte hai

//     console.log(`User power: ${power}`);
    
// }
// console.log(`User power: ${power}`);


//const balance = 1000

// if(balance > 500) console.log("test"),console.log("test2");

// if(balance < 500){
//     console.log("less than 500");
    
// } else if(balance < 700){
//     console.log("less than 700");
// }
// else if (balance < 900){
//     console.log("less than 900");
// }
// else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromEmail = true

if (userLoggedIn && debitCard  ){
    console.log("Allow to buy course");
    
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logges in");
    
}


