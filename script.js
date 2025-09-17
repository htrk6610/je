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

const weatherForm = document.getElementById("weatherForm");
weatherForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const locationInput = document.getElementById("locationInput") || { value: '' };
    const location = locationInput.value;
    console.log("Weather check initiated for location:", location);

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=a4b1f23a347a948bf30a50fac5ab2023&units=metric&lang=ru`)
        .then(response => response.json())
        .then(data => {
            console.log("Weather data fetched successfully:", data);

            const weatherDiv = document.getElementById("weatherResult");
            weatherDiv.innerHTML = `Погода в ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
            console.log("Weather information displayed.");
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
});