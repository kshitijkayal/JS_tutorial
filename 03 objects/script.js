let firstName = 'Kshitij'
let lastName = 'Hello'

console.log(firstName + ' ' + lastName)

let isLoggedIn = false

let lastLoginDate = null //isko space allot hoti hai
let lastKuch = undefined // ye space nahi leta

console.log(isLoggedIn)
console.log(isLoggedIn + 10)

console.log(lastLoginDate)  //any kuch bhi hosakta baadme jo assign karenge vo hojaega

//Objects

const person = {
    firstName : 'Kshi',
    lastName : 'yo',
    age : 22,
    isLoggedIn : false,
}
console.log(person.firstName)

//strings
console.log('1'+'1');
console.log('1' + 11); // string + number = string
console.log('1' * 11); // string * number = number...in JS if  string is multipled by number then both is treated as a number
console.log('a'*1);

console.log(typeof(firstName))