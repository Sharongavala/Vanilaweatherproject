function updateWeatherData(response) {
  let temperatureElement = document.querySelector("#temperature");
  let Temperature = Math.round(response.data.temperature.current);
  let currentCityElement = document.querySelector("#current-city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img src="${response.data.condition.icon_url}" class="container-icon"/>`;
  currentCityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = Temperature;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = days[date.getDay()];
  return `${day},${hours}:${minutes}`;
}
function searchCity(city) {
  let Apikey = "13dt81a8acado8bdf8d44ea66063d4e7";
  let Apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${Apikey}&units=metric`;
  axios.get(Apiurl).then(updateWeatherData);
}

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}
function displayForecast() {
  let days = ["Tue", "Wed", "Thur", "Fri", "Sat"];
  let forecastHtml = "";
  days.forEach(function (day) {
    forecastHtml =
      forecastHtml +
      ` <div class="weather-forecast-day">
            <div class="weather-forecast-date">${day}</div>
            <div class="weather-forecast-icon">🌧</div>
            <div class="weather-forecast-temperatures">
              <div class="weather-forecast-temperature">
                <strong>15°</strong>
              </div>
              <div class="weather-forecast-temperature">9°</div>
            </div>
            </div>`;
  });

  let forecastElement = document.querySelector("#forecast");
  forecastElement.innerHTML = forecastHtml;
}

let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", search);

searchCity("Nairobi");
displayForecast();
