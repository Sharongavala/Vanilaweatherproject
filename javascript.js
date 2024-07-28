function updateWeatherData(response) {
  let TemperatureElement = document.querySelector("#temperature");
  let Temperature = Math.round(response.data.temperature.current);
  let CurrentCityElement = document.querySelector("#current-city");
  CurrentCityElement.innerHTML = response.data.city;
  TemperatureElement.innerHTML = Temperature;
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
let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", search);

searchCity("Nairobi");
