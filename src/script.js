function formatDate (date){

  
let hours = date.getHours();

if (hours < 10){
hours = `0${hours}`;

}
let minutes = date.getMinutes();

if (minutes < 10){
minutes = `0${minutes}`;

}


let daysIndex = date.getDay();
let days = ["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

let day = days[daysIndex];
    return `${day} ${hours} : ${minutes}`;
}
/* function showPosition (position){
console.log(position);

let latitude = position.coords.latitude;
let longitude = position.coords.longitude;
let apiKey = "72c3892be7b4efbc064a6b2d18164d51";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayWeather)



}


function getCurrentLocation (event){
event.preventDefault();
navigator.geolocation.getCurrentPosition(showPosition);

} */

function displayWeather(response){
console.log(response.data);
document.querySelector("#temperature").innerHTML=Math.round(response.data.main.temp);
document.querySelector("#cityname").innerHTML=response.data.name;
document.querySelector("#humidity").innerHTML=response.data.main.humidity;
document.querySelector("#wind").innerHTML=Math.round(response.data.wind.speed);
document.querySelector("#weatherdescription").innerHTML=response.data.weather[0].main;
}



function search (city){
let apiKey = "72c3892be7b4efbc064a6b2d18164d51";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then (displayWeather);
}


function handleSubmit (event){
event.preventDefault ();
let city = document.querySelector("#city-input").value;

search (city);
}

//feature 1

  let timeElement = document.querySelector("#time");
let currentTime = new Date ();

timeElement.innerHTML = formatDate (currentTime);

//feature 2
let searchForm = document.querySelector ("#search-form");
searchForm.addEventListener ("submit",handleSubmit);


search ("Chennai");
/* 
let currentLocation = document.querySelector ("#currentLocation");
currentLocation.addEventListener("click",getCurrentLocation); */