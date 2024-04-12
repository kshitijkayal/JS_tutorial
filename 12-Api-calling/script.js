const button = document.getElementById("search-button");
const city = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(data){
    const promise  = await fetch(`http://api.weatherapi.com/v1/current.json?key=3c9ebd2c4a18433c9f0154739242403&q=${data}&aqi=no`);
    return (await promise.json());
}

button.addEventListener("click", async()=>{
    const value = city.value;
    const res = await getData(value);
    cityName.innerText = `${res.location.country}, ${res.location.name}, ${res.location.region}`
    cityTime.innerText = res.location.localtime;
    cityTemp.innerText = res.current.temp_c;
})