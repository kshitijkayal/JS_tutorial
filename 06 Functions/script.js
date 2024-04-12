function addNumbers(){
    let sum=0;
    for(let i=0;i<arguments.length;i++){
        sum=sum+arguments[i];
    }
    return sum;
}
console.log(addNumbers(1,2,3,4));

function addNumbersV2(...numbers){  //spread operator
    let sum=0;
    for(let i=0;i<numbers.length;i++){
        sum=sum+numbers[i];
    }
    return sum;
}
console.log(addNumbersV2(1,2,3,4));


// const obj = {
//     value : 20,
//     myFunction : function (){
//         console.log("value is: " + this.value);
//     },
// };

const obj = {
    value : 20,
    myFunction : () => {
        console.log("value is: " + this);  // hence this in arrow function points to the whole window object
                                                 // whereas the normal function refers only to the object.
    },
};

obj.myFunction();

// Higher order Functions- that accepts function as an argument & callback
//agar koi function me time lagta hai tab callback use karte hai ki tum result store karke rakhdo.

function add(a,b,cb){
    let result = a+b;
    cb(result);
}

function print(val){
    console.log(val);
}
add(2,4,print)   //add(2,4, (val)=>console.log(val));

//A function can result a function too

function addi(a,b,cb){
    let result = a+b;
    cb(result);

    return () => console.log(result);
}

let resFunct =addi(2,4,()=>{})
resFunct();

const sayHello = () => {      //arrow function
    console.log("Hello");
}
sayHello();

const addV = (a,b) => a+b ; //one liner
console.log(addV(2,3));

// 'arguments' keyword is not there in arrow function
// hence wqe need to use spread operator

const addin = (...nums) => {
    console.log(nums);
}
addin(10,20,30,40);

//Hoisting
// sayHey();

// const sayHey = () => {
//     console.log("heyy");
// }

sayHey();                //hence hoisting available in normal functions but not in arrow functions

function sayHey() {
    console.log("heyy");
}