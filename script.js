// Here we put all the code that executes all the different functiontions and views
const forecastContainer = document.getElementById ("forecast");
const weatherContainer = document.getElementById("weather");
const iconElement = document.getElementById ("icon");
const sunriseElement = document.getElementById ("sunrise");
const sunsetElement = document.getElementById ("sunset");
const todaysDescription = document.getElementById ("todaysDescription");
const statusElement = document.getElementById ("status");
const temperatureElement = document.getElementById ("temperature");
const body = document.getElementById("body");

// We save our config settings in the weatherApp object
const weatherApp = {
  apiKey: "b519b073de061051721cf997e13c4842",
  apiUrl: "https://api.openweathermap.org/data/2.5/",
  units: "metric",
  // we use this to store our weatherData globally for testing
  data: {}
};

document.addEventListener("DOMContentLoaded", function () {
  fetchWeatherData("Stockholm", "Sweden")
    .then((data) => {
      weatherApp.data = data;
      displayWeather(data);
      displayforecast(data.forecast); // Display the forecast data
    });
});
