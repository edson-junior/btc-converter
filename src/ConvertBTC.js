const request = require('request-promise-native');
const chalk = require('chalk');
const ora = require('ora');

const spinner = ora({
  text: 'Loading data...',
  color: 'red',
});

async function convertBTC(currency = 'USD', amount = 1) {
  const url = `https://apiv2.bitcoinaverage.com/convert/global?from=BTC&to=${currency}&amount=${amount}`;

  spinner.start();

  await request(url)
    .then((body) => {
      spinner.stop();
      const apiResponse = JSON.parse(body);
      return console.info(`${chalk.red(amount)} BTC to ${chalk.cyan(currency)} = ${chalk.yellow(apiResponse.price)}`); // eslint-disable-line
    })
    .catch((err) => {
      spinner.stop();
      console.info(chalk.red('Something went wrong in the API. Try in a few minutes.')); // eslint-disable-line
      return err;
    });
}

module.exports = convertBTC;
