const user = document.getElementById("username");
const button = document.getElementById("clickButton");
const userin = document.getElementById("uname");

button.addEventListener("click", ()=>{
    const value = userin.value;
    localStorage.setItem("name", value);
    location.reload();
});
window.addEventListener("load", ()=>{
    const val = localStorage.getItem("name");
    user.innerText = val;
})