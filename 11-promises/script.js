// let resultFromServer = fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(resultFromServer);
//async task return promises that is pending.

//now if we want to await for the result then we use await

// let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log(resultFromServer);

//so for await we need to have a asyn function

let a = 10;
let b = 20;

let result = a+b;
async function getData(){
    let resultFromServer = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log(await resultFromServer.json());
}
getData();

//OR 

// fetch("https://jsonplaceholder.typicode.com/posts")
// .then((data)=>{
//     console.log(data);
// })
// .catch((errror)=>{
//     console.log(error);
// })

console.log(result) // first this will be executed since the above is 
                    //async function which will be executed after