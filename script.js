"use strict";
const apiKey = '3647783b95cfa6aba97e7987122c9cc6'; // Replace with your API key
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('searchBtn').addEventListener('click', () => {
    const city = document.getElementById('cityInput').value.trim();
    if (city) {
        getWeather(city); // function call
    } else {
        alert('Please enter a city name');
    }
    document.getElementById('cityInput').value = "";
});

async function getWeather(city) {
    try {
        const response = await fetch(`${apiUrl}?q=${city}&appid=${apiKey}`);
        //console.log(response);
        if (!response.ok) throw new Error('City not found please enter a valid city name !');

        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        document.getElementById('weatherResult').innerText = error.message;
    }
}

function displayWeather(data) {
    const { name, main, weather, visibility, wind, rain, clouds, sys } = data;
    const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    document.getElementById('weatherResult').innerHTML = `
    <div class="center">
        <div class="heading">
            <h1>${name}</h1>
            <img src="${weatherIcon}" alt="${weather[0].description}">
        </div>
        <p><strong>Temperature:</strong> ${main.temp}°C</p>
        <p><strong>Feels Like:</strong> ${main.feels_like}°C</p>
        <p><strong>Humidity:</strong> ${main.humidity}%</p>
        <p><strong>Condition:</strong> ${weather[0].description}</p>
        <p><strong>Pressure:</strong> ${main.pressure} hPa</p>
        <p><strong>Visibility:</strong> ${visibility} meters</p>
        <p><strong>Wind Speed:</strong> ${wind.speed} m/s</p>
        <p><strong>Wind Direction:</strong> ${wind.deg}°</p>
        <p><strong>Rain (last hour):</strong> ${rain?.["1h"] ?? 'No data'} mm</p>
        <p><strong>Sunrise:</strong> ${new Date(sys.sunrise * 1000).toLocaleTimeString()}</p>
        <p><strong>Sunset:</strong> ${new Date(sys.sunset * 1000).toLocaleTimeString()}</p>
        <p><strong>Cloudiness:</strong> ${clouds.all}%</p>
    </div>
  `;
}


const num = new Number(123);
console.log(typeof(num)); // 123

console.log(num.valueOf()); // 123

const myfun = () => {
    console.log('hello');
}
myfun();

$('#weatherResult').hide();
