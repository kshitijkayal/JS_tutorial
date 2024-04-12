// console.log(document);
console.log(document.body)
// document.write("hacked")

//querySelector ko jo bhi pehla div ya vagrah milta hai ye usko change karta hai
//querySelectorAll har ek element specified ko change kardega.

document.querySelector("code").innerHTML="hola"

const username = document.querySelector("#username")
console.log(username.innerText) //since inside username id there is no HTML

const ele = document.querySelectorAll(".block");
ele.forEach((val) => {
    console.log(val.innerHTML)
})

const el = document.getElementById('username');
console.log(el.innerText)
el.classList.add("red-color", "under-line")
el.style.color = "blue"   // adding styles
el.setAttribute("aria", "123")

const temp = document.getElementsByClassName("block");
for(let i=0;i<temp.length;i++){
    temp.item(i).style.background = "blue";
}
// const del = document.getElementsByClassName('block');
// console.log(del);
// for(let i=0;i<del.length;i++){
//     del[i].classList.remove("block");
// }