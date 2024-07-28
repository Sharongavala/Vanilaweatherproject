function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let CurrentCityElement = document.querySelector("#current-city");
  CurrentCityElement.innerHTML = searchInput.value;
}
let SearchFormElement = document.querySelector("#search-form");
SearchFormElement.addEventListener("submit", search);
