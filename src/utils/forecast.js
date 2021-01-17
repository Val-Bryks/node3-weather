const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {

    const url = 'http://api.weatherstack.com/current?access_key=5acf36efcffaa33349cdb584de4195b3&query=' + longitude + ',' + latitude

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location!', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is current " + body.current.temperature + ' degress out. IT is feels like ' + body.current.humidity + ' degress out.')
        }
    })

}

module.exports = forecast