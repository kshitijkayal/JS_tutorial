// function add(a,b,c){
//     return a+b+c;
// }

// console.log(add(2,5,3));

//now i want to add only if i have all the 3 paremeters

function add(a){
    return function (b){
        return function(c){
            return a+b+c;
        };
    };
}

const res = add(2)(3)(5);
console.log(res)

// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`Send Email ${to} with ${subject} & ${body}`);
//         };
//     };
// }

const sendAutoEmail = to =>subject=>body=>`Send Email ${to} with ${subject} & ${body}`;

let step1 = sendAutoEmail("hello@gmail.com");
let step2 = step1("new order confirmation");
console.log(step2('hey your order should reach'));