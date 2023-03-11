//import button and heading tags
const weatherBtn = document.getElementById('weather-btn');
let weatherHead = document.getElementById('weather-data');


//fetch request to the weather API using location
//entered by user
function getWeatherInfo(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=b0afff28fa4d7fcfcd9ede1a41174b11`)
    .then(response => response.json())
    .then(response => {weatherData = displayWeather(response.weather[0].main)});
}

//display weather
function displayWeather(weather) {
    weatherHead.innerText = weather;
}

//prompt for a location
function getUserLocation() {
    const userPrompt = prompt("Enter location for weather info:");
    getWeatherInfo(userPrompt);
}

//event listener for button
weatherBtn.addEventListener('click', () => {
    getUserLocation();
})