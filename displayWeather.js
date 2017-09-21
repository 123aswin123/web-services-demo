var httpRequester = require('sync-request');
var openWeatherApiKey = '5ce6af1a7296ace61d74b84064617831';
var response = httpRequester('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Madurai&appid='+openWeatherApiKey);
console.log(JSON.parse(response.getBody()));
