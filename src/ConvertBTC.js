const request = require('request');

function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  request(url, (error, response, body) => {
    const apiResponse = JSON.parse(body);
    console.log(`1 BTC to USD = ${apiResponse.price}`); // eslint-disable-line
  });
}

module.exports = convertBTC;
