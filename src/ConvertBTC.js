const request = require('request-promise-native');

async function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  await request(url)
    .then((body) => {
      const apiResponse = JSON.parse(body);
      return console.info(`1 BTC to ${currency} = ${apiResponse.price}`); // eslint-disable-line
    })
    .catch((err) => {
      console.info('Something went wrong in the API. Try in a few minutes.');
      return err;
    });
}

module.exports = convertBTC;
