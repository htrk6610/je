'use strict';

// Challenge button functionality
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", function() {
    console.log("Challenge Accepted! Your background color will change.");
    function getRandomHexColor() {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        return `#${randomColor.padStart(6, '0')}`;
    }
    document.body.style.backgroundColor = getRandomHexColor();
    console.log("Background color changed to:", document.body.style.backgroundColor);
});

// Weather form functionality
const weatherForm = document.getElementById("weatherForm");
weatherForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const locationInput = document.getElementById("locationInput") || { value: '' };
    const location = locationInput.value;
    console.log("Weather check initiated for location:", location);
    // Here you can add the actual weather fetching logic
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a4b1f23a347a948bf30a50fac5ab2023`)
        .then(response => response.json())
        .then(data => {
            console.log("Weather data fetched successfully:", data);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});

// Geocoding API request
const location = document.getElementById("locationInput") ? document.getElementById("locationInput").value : 'Kyiv';
console.log("Preparing to fetch geocoding data for location:", location);
const logFormConsole = document.getElementById("logFormConsole");
logFormConsole.innerHTML += `<p>Preparing to fetch geocoding data for location: ${location}</p>`;

const weatherResult = document.getElementById("weatherResult");
weatherResult.innerHTML = `
<p id="weatherResultCity">Weather in ${data.name}</p>
<p id="weatherResultTemp">Temperature: ${(data.main.temp - 273.15).toFixed(2)} °C</p>
<p id="weatherResultDesc">Weather: ${data.weather[0].description}</p>
<p id="weatherResultHumidity">Humidity: ${data.main.humidity}%</p>
<p id="weatherResultWind">Wind Speed: ${data.wind.speed} m/s</p>
<p id="weatherResultCoords">Coordinates: [${data.coord.lat}, ${data.coord.lon}]</p>`;