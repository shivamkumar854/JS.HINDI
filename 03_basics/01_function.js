function sayMyName(){
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("v");
    console.log("A");
    console.log("M");
       
}
// sayMyName()

function addTwoNumbers(number1,number2){
  //   console.log(number1 + number2);
    
}
addTwoNumbers(3,5)

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("shivam"))


function calculateCardPrice(...num1){
    return num1

}

// console.log(calculateCardPrice(200,400,500,2000));

const user = {
    username: "shivam",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject(user)

