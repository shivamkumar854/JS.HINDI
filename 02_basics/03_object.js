//  singleton
// Object.create

// object literals

const mySym= Symbol("key1")

const JsUser = {
    name :"Shivam",
    "full name":"Shivam singh",
    [mySym]: "mykey1",
    age:18,
    location:"Bihar",
    email:"shivam@google.com",
    isLoggedIn:false,
    LastLoginDays:["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);




JsUser.email = "shivam@chatgpt.com"
Object.freeze(JsUser)
JsUser.email="shivam@microsoft.com"
//console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());




