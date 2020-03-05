const NodeGeocoder = require('node-geocoder');
console.log(process.env.NODE_ENV);
const options = {
    provider: process.env.GEOCODER_PROVIDER,
    apiKey: process.env.GEOCODER_API_KEY,
    formatter: null,
    httpAdapter: 'https'
}

const geoCoder = NodeGeocoder(options);
module.exports = geoCoder;