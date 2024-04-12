const students = ["Piyush", 1,true];
console.log(students);
students.push({name: "hola"})   // we can have objects inside js arrays
console.log(students);

function print(n){
    console.log(n);
}

students.forEach(print);
// students.forEach((val) => {console.log(val)});
// students.map((val) => {console.log(val)});    
// let newArr = []
// students.forEach(val => newArr.push(2*val))
// console.log(newArr);

let newArr = students.forEach((val) => val*2)    // .map return a new array whereas .forEach doesn't return anything
console.log(newArr)

let newArri = students.map((val) => val*2)    // .map return a new array whereas .forEach doesn't return anything
console.log(newArri)                       // forEach is for iterating or printing purpose but if we want to make 
                                                //a new array we use .map

const temp = [1,2,3,4,5,6,7,8];
let newTemp = temp.filter(val => val%2==0);
console.log(newTemp)