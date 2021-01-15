
// const request = require('request-promise-native');
const {printPassTimes} = require(`./index`)
// const { fetchMyIP } = require(`./iss_promised`);
// const { fetchCoordsByIP} = require(`./iss_promised` )
// const {fetchISSFlyOverTimes} = require(`./iss_promised`)

const { nextISSTimesForMyLocation } = require('./iss_promised');

// see index.js for printPassTimes 
// copy it from there, or better yet, moduralize and require it in both files

// Call 
nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });

