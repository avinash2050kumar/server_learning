

const request = require('postman-request')
//const chalk = require('chalk')

const url = 'http://api.weatherstack.com/current?access_key=7ded930fede154f77b9a14913f7cdb6d&query=37.8267,-122.4233'

request(url, function (error, response, body) {
    console.log('body',Object.keys(body))
    //console.log(`It is currently ${response.body.current.temperature.toString()} There is  ${'0'}% chance of rain.`)
});
