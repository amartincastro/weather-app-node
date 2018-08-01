const request = require('request');

var getWeather = () => {
request({
  url: 'https://api.darksky.net/forecast/1bfe917aacd88e20fd24bb63ecf35918/39.524489,-119.717457',
  json: true
}, (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('Unable to fetch weather.');
  }
  });
};

module.exports.getWeather = getWeather;
