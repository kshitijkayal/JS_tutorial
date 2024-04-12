// var -> scope->Global->can be reassign
// let->scope->local->let is more preferable to use->can be reassign
// const->scope->local->values reassign nhi ho sakti ->value needs to be provided at the time of allocation
let age;
console.log(age);
age=10;
console.log(age);
