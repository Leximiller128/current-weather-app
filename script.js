//variables
var apiKey = "50d3b65446b704a60f74aa38b79d4648";

//fetch data from API
fetch(
  `http://api.openweathermap.org/geo/1.0/direct?q=Denver&limit=1&appid=${apiKey}`
)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    console.log(data[0].lat);
    console.log(data[0].lon);
    fetchCurrentWeather(data[0].lat, data[0].lon);
    fetchForecast(data[0].lat, data[0].lon);
    //call the ones that need lat and lon
  })
  .catch(function (err) {
    console.log(err);
  });

//current weather
function fetchCurrentWeather(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    })
    .catch(function (err) {
      console.log(err);
    });
}
// 5 day forecast
function fetchForecast(lat, lon) {
  fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&units=imperial&lon=${lon}&appid=${apiKey}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (let i = 5; i < data.list.length; i += 8) {
        console.log(data.list[i]);
      }
    })
    .catch(function (err) {
      console.log(err);
    });
}

//search bar and search history
