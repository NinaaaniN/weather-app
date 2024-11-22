function updateDayTime() {
  let now = new Date();

  let weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = weekDays[now.getDay()];

  let hours = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  dayTime.innerHTML = `${day} ${hours}:${minutes}`;
}
let dayTime = document.querySelector("#day-time");
updateDayTime();

function cityNameUpdate(event) {
  event.preventDefault();
  let city = input.value;
  cityName.innerHTML = city;
  cityConditions(city);
  input.value = "";
}
let form = document.querySelector("form");
let input = document.querySelector(".search-input");
let cityName = document.querySelector("#city-name");

form.addEventListener("submit", cityNameUpdate);

function newCityTemp(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#city-temperature");
  temperatureElement.innerHTML = `${temperature}`;
}

function cityConditions(city) {
  let apiKey = "04a7c8423bffd931f0eo50c50b099bt8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(newCityTemp);
}
