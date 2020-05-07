const request = require('request');

let args = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=' + args[0], (error, response, body) => {
  if (error) {
    throw error;
  }
  if (JSON.parse(body).length === 0) {
    console.log("Sorry this is not a breed!");
  } else {
    let data = JSON.parse(body);
    console.log(data[0].description);
  }
});