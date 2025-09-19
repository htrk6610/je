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
        .then(response => {
            if (!response.ok) {
                throw new Error(`ERROR: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => {
            console.log("Weather data fetched successfully:", data);
            if (data.weather[0].main === "Clouds") {
                document.body.style.backgroundColor = "#B0C4DE"; // LightSteelBlue for cloudy weather
                document.body.style.color = "#000000"; // Change text color to black for better visibility
                document.querySelector(".weatherResultContainer").style.backgroundColor = "#B0C4DE"; // Change background color to black for better visibility
            }
            else if (data.weather[0].main === "Clear") {
                document.body.style.backgroundColor = "#87CEEB"; // SkyBlue for clear weather
                document.body.style.color = "#000000"; // Change text color to black for better visibility
                document.querySelector(".weatherResultContainer").style.backgroundColor = "#87CEEB"; // Change background color to black for better visibility
            }
            else if (data.weather[0].main === "Rain") {
                document.body.style.backgroundColor = "#778899"; // LightSlateGray for rainy weather
                document.body.style.color = "#FFFFFF"; // Change text color to white for better visibility
                document.querySelector(".weatherResultContainer").style.backgroundColor = "#778899"; // Change background color to black for better visibility
            }
            const weatherData = document.getElementById("weatherResultData");
            weatherData.innerHTML = `Yo from ${data.name}:`;
            console.log("Weather information displayed.");
            const weatherDataCity = document.getElementById("weatherResultCity");
            weatherDataCity.innerHTML = `Weather in City: ${data.name}`;
            const weatherDataCountry = document.getElementById("weatherResultDataCountry");
            weatherDataCountry.innerHTML = `From country: ${data.sys.country}`;
            const weatherTimezone = document.getElementById("weatherResultTimeZone");
            const timezoneHours = (data.timezone / 3600).toFixed(1);
            const weatherLocalTime = document.getElementById("weatherResultLocalTime");
            const localTime = new Date((Date.now()) + (data.timezone * 1000));
            weatherLocalTime.innerHTML = `Local Time: ${localTime.toUTCString().replace("GMT", `UTC ${timezoneHours >= 0 ? '+' : ''}${timezoneHours}`)}`;
            const weatherTemp = document.getElementById("weatherResultTemp");
            weatherTemp.innerHTML = `Temperature: ${data.main.temp}°C`;
            const weatherTempFeel = document.getElementById("weatherResultTempFeel");
            weatherTempFeel.innerHTML = `Feels like: ${data.main.feels_like}°C`;
            const weatherGrndlvl = document.getElementById("weatherResultGrndlvl");
            weatherGrndlvl.innerHTML = `Ground Level: ${data.main.grnd_level} hPa`;
            const weatherHumidity = document.getElementById("weatherResultHumidity");
            weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            const weatherPressure = document.getElementById("weatherResultPressure");
            weatherPressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;
            const weatherSeaLevel = document.getElementById("weatherResultSeaLevel");
            weatherSeaLevel.innerHTML = `Sea Level: ${data.main.sea_level} hPa`;
            const weatherWeather = document.getElementById("weatherResultWeather");
            weatherWeather.innerHTML = `Weather: ${data.weather[0].main}`;
            const weatherIcon = document.getElementById("weatherResultIcon");
            weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
            const weatherWeatherDescription = document.getElementById("weatherResultWeatherDescription");
            weatherWeatherDescription.innerHTML = `Description: ${data.weather[0].description}`;
            const weatherWindSpeed = document.getElementById("weatherResultWindSpeed");
            weatherWindSpeed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
            const weatherWindDeg = document.getElementById("weatherResultWindDeg");
            weatherWindDeg.innerHTML = `Wind Direction: ${data.wind.deg}°`;
            const weatherWindGust = document.getElementById("weatherResultWindGust");
            weatherWindGust.innerHTML = `Wind Gust: ${data.wind.gust} m/s`;
            const weatherCloudsAll = document.getElementById("weatherResultCloudsAll");
            weatherCloudsAll.innerHTML = `Cloudiness: ${data.clouds.all}%`;
            const weatherVisibility = document.getElementById("weatherResultVisibility");
            weatherVisibility.innerHTML = `Visibility: ${data.visibility} meters`;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherResultDataError = document.getElementById("weatherResultData");
            weatherResultDataError.innerHTML = `<span style="color: red;">${error.message}. </span>`;
                if (error.message.includes("404")) {
                    weatherResultDataError.innerHTML += `<span style="color: red;">Check the city name.</span>`;
            }
                if (error.message.includes("401")) {
                weatherResultDataError.innerHTML += `<span style="color: red;">API key issue.</span>`;
            }
                if (error.message.includes("400")) {
                weatherResultDataError.innerHTML += `<span style="color: red;">Enter a city name.</span>`;
            }
        })
});
