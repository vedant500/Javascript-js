//TODO: Immediately invoked function Expression

// It prevents variables inside the function from becoming global variables.
//Basically it creates a private scope of its own 

(function Butter(){
    console.log("DB Connected");
})();

//FEATURE: After Running a  IIFE we have to use semicolon so that the current context ends and we can use iffe for next function else gives error

(   (name) => {

    console.log(`DB connected ${name}`)
})('vedant')