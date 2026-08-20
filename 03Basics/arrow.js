const user = {

    username:"vedant",

    price:999,

    welcomeMessage : function(){

        console.log(`${this.username} , welcome to website` );
        console.log(this);
    }
}
//    user.welcomeMessage();

//    user.username = "om";

//    user.welcomeMessage();

// console.log(this);
// TODO: In global scope of node js environment it gives empty object
// TODO:in global scope of browser environment it gives windows as a object which gives many options like click etc(imp interview)

//TODO:this keyword checks the current context like (in object currentcontext is username and price which can be used this.username)

// function Chai(){
//     console.log(this);
//     let username ="vedu";
//     console.log(this.username);
// }

// const chai = function(){
//     console.log(this);
//       username ="vedu";
//       console.log(this.username);

// }

// const chai = () =>{
//      console.log(this);
      

// }



//FEATURE: More about arrow function

// const add = (num1 , num2)=>{
//     return (num1 + num2);
//     //this is explicit return
// }

//FEATURE: Another Way Implicit return

const add =(num1 , num2) =>(num1=num2) 

console.log(add(3 ,2));