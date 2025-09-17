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
    const logFormConsole = document.getElementById("logFormConsole");
    logFormConsole.innerHTML += `<p>Background color changed to: ${document.body.style.backgroundColor}</p>`;
});

// Fetch weather data from OpenWeatherMap API
fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=a4b1f23a347a948bf30a50fac5ab2023")
    .then(response => response.json())
    .then(data => {
        console.log("Weather data fetched successfully:", data);
    })
    .catch(error => {
        console.error("Error fetching weather data:", error);
    });

// Weather form functionality
const weatherForm = document.getElementById("weatherForm");
weatherForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const locationInput = document.getElementById("locationInput") || { value: '' };
    const location = locationInput.value;
    console.log("Weather check initiated for location:", location);
    const logFormConsole = document.getElementById("logFormConsole");
    logFormConsole.innerHTML += `<p>Weather check initiated for location: ${location}</p>`;
    console.log(`Fetching weather data for ${location}...`);
    logFormConsole.innerHTML += `<p>Fetching weather data for ${location}...</p>`;
});