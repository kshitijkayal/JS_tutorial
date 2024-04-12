const button = document.getElementById("buttonClick");

async function gotLocation(position){
    const res = await getData(position.coords.latitude, position.coords.longitude)
    console.log(res);
}

function failedToGet(){
    console.log("Error");
}

async function getData(lat,long){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=3c9ebd2c4a18433c9f0154739242403&q=${lat},${long}&aqi=no`);
    return await promise.json();
}

button.addEventListener("click", async ()=>{
    const result = navigator.geolocation.getCurrentPosition(gotLocation,failedToGet);
})