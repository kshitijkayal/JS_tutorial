function showTime(){
    const currTime = new Date();
    const time = `${currTime.getHours()}:${currTime.getMinutes()}:${currTime.getSeconds()}`
    document.getElementById("time").innerText = time;
}
showTime();

setTimeout(()=> console.log("hi"));
let interval = setInterval(showTime,1000)

button = document.getElementById("stopButton");
document.addEventListener("click", ()=>{
    clearInterval(interval);
})