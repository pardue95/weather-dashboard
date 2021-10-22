var cityFormEl = document.querySelector("#city-form")
var cityInputEl =  document.querySelector("#selected-city");
console.log(cityInputEl)



var fiveDayForecast = function(cityName){
    var apiUrl ="https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=1a32bd1a7ece5ed4c04eaf133d9d2a51";
console.log(apiUrl)
// make a get request to url
fetch(apiUrl)
.then(function(response) {
  // request was successful
  if (response.ok) {
    // console.log(response);
    response.json().then(function(data) {
      console.log(data);
 
    });
  } else {
    alert('Error: ' + response.statusText);
  }
})
.catch(function(error) {
  alert('Unable to connect to OpenWeather');
});
};

var citySubmitHandler = function() {
    // event.preventDefault();
    console.log(event);
    // get value from input element
var selectedCity = cityInputEl.value.trim();

console.log(selectedCity)
if (selectedCity) {
  fiveDayForecast(selectedCity);
  cityInputEl.value = "";
} else {
  alert("Please enter a city");
}
  };

  cityFormEl.addEventListener("submit", citySubmitHandler)



