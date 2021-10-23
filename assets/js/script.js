var cityFormEl = document.querySelector("#city-form")
var cityInputEl = document.querySelector("#selected-city");
var citySearchEl = document.querySelector("#current-city")
var forecastInputEl = document.querySelector("#forecast-container")
var tempOutputEl = document.querySelector("#temp");
var windOutput = document.querySelector("#wind");
var humidityOutputEl = document.querySelector("#humidity")
var uvOutputEl = document.querySelector("#uv-index")

var dateTime = luxon.DateTime.now().toFormat('MMMM dd, yyyy')
console.log(dateTime)


var fiveDayForecast = function(cityName) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=1a32bd1a7ece5ed4c04eaf133d9d2a51";

    // make a get request to url
    fetch(apiUrl)
        .then(function(response) {
            // request was successful
            if (response.ok) {

                response.json().then(function(data) {

                    displayForecast(data, cityName)

                    var lat = data.city.coord.lat
                    var long = data.city.coord.lon
                    getUV(lat, long)

                });
            } else {
                alert('Error: ' + response.statusText);
            }
        })
        .catch(function(error) {
            alert('Unable to connect to OpenWeather');
        });

}





// function for submit
var citySubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
    // get value from input element
    var selectedCity = cityInputEl.value.trim();


    if (selectedCity) {
        fiveDayForecast(selectedCity);
        cityInputEl.value = "";
    } else {
        alert("Please enter a city");
    }
};

var displayForecast = function(forecast, selectedCity) {
    // if (forecast.length === 0) {
    //     forecastInputEl.textContent = "No forecasts found.";
    //     return;
    // }

    // clear old content
    citySearchEl.textContent = "";
    citySearchEl.textContent = "    " + selectedCity + "   (" + dateTime + ")";
    console.log(selectedCity);
};

cityFormEl.addEventListener("submit", citySubmitHandler);


var getUV = function(lat, long) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + long + "&units=imperial&exclude=hourly,minutely,alerts&appid=1a32bd1a7ece5ed4c04eaf133d9d2a51"
    fetch(apiUrl)
        .then(function(response) {
            response.json().then(function(data) {
                console.log(data)
                var uvIndex = data.current.uvi
                displayUvIndex(uvIndex)
                var humidity = data.current.humidity
                humidityOutputEl.innerHTML = " " + humidity + "%";

                var windSpeed = data.current.wind_speed
                windOutput.innerHTML = " " + windSpeed + " MPH";

                var temp = Math.floor(data.current.temp);
                tempOutputEl.innerHTML = " " + temp + " ℉";

                var city = data
            });
        })

    var displayUvIndex = function(uvIndex) {

console.log(uvIndex)

        if (uvIndex <= 2.99) {
            uvOutputEl.className += "has-background-success";
            
        } else if (uvIndex >= 3 && uvIndex <= 5.99) {
            uvOutputEl.className += "has-background-warning";
            
        } else if (uvIndex >= 6 && uvIndex <= 7.99) {
            uvOutputEl.style.backgroundColor = "orange";
            
        } else if (uvIndex >= 8 && uvIndex <= 10.99) {
            uvOutputEl.className += "has-background-danger";
            
        } else {
            uvOutputEl.style.backgroundColor = "#EE82EE";
            
        }
         uvOutputEl.innerHTML = " " + uvIndex
    }
   
};