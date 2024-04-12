// const button = document.getElementById("click");
// const  container = document.getElementById("my-container");

// button.addEventListener("click", ()=>{
//     container.innerHTML = "<h1>Kshitij</h1>"
// });
//The above adds only one time
//to add innerhtml multiple times on every click

const button = document.getElementById("click");
const  container = document.getElementById("my-container");
const counter = document.getElementById("inc");
let count = 1;
button.addEventListener("click", ()=>{
    const el = document.createElement("h1");
    const tt = document.createElement("li")
    el.innerText = "Kshitij";
    tt.innerText = count;
    counter.appendChild(tt);
    container.appendChild(el);
    count++;
});
