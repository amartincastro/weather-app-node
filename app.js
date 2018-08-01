// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode')
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Address to fetch weather for',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });
//
//
// // 1bfe917aacd88e20fd24bb63ecf35918
//
// request to: https://api.darksky.net/forecast/1bfe917aacd88e20fd24bb63ecf35918/39.524489,-119.717457
// body.currently.temperature

const request = require('request');

request({
  url: 'https://api.darksky.net/forecast/1bfe917aacd88e20fd24bb63ecf35918/39.524489,-119.717457',
  json: true
}, (error, response, body) => {
  if (error) {
    console.log('Unable to connect to the Dark Sky API servers.');
  }
  console.log(body.currently.temperature);
});
