const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, (error, response, body) => {
    if (error) {
      callback(error, null);
    }
    if (JSON.parse(body).length === 0) {
      callback(error, "Not a breed!");
    } else {
      let data = JSON.parse(body);
      callback(null, data[0].description);
    }
  });
};


module.exports = { fetchBreedDescription };