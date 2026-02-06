// Get DOM elements
const btn = document.getElementById("getWeatherBtn");
const cityInput = document.getElementById("cityInput");
const weatherResult = document.getElementById("weatherResult");
const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const errorMsg = document.getElementById("errorMsg");

// API key
const API_KEY = "2b8d3e6758d6fa8c1d83f2145759c2a5";

// Event listener for button click
btn.addEventListener("click", getWeather);

// Fetch weather data
async function getWeather() {
  const city = cityInput.value.trim();

  // check for empty input
  if (!city){
    errorMsg.textContent = "Please enter a city";
    errorMsg.classList.remove("hidden");
    weatherResult.classList.add("hidden");
    return;
  }

  try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);

    if (!res.ok) {
      throw new Error("City not found");  // Invalid city
    }

    const data = await res.json();  //  Convert reponse to JSON 
// Update DOM with weather info
    cityName.textContent = data.name;
    temperature.textContent = data.main.temp;
    humidity.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
    description.textContent = data.weather[0].description;

    weatherResult.classList.remove("hidden");
    errorMsg.classList.add("hidden");
  }
  catch (error) {
    errorMsg.textContent = error.message;
    weatherResult.classList.add("hidden");
    errorMsg.classList.remove("hidden");
  }
}
// Event listener for enter key
cityInput.addEventListener("keypress",(e)=>{
  if(e.key === "Enter")
    getWeather();
});