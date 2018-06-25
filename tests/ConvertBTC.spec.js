const nock = require('nock');
const chai = require('chai');
const chalk = require('chalk');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;

chai.use(sinonChai);

const convertBTC = require('../src/ConvertBTC');

describe('ConvertBTC', () => {
  let consoleStub;

  const responseMock = {
    time: "2018-06-23 18:44:12",
    success: true,
    price: 6142.77,
  };

  beforeEach(() => {
    consoleStub = sinon.stub(console, 'info');
  });

  afterEach(() => {
    consoleStub.restore();
  });

  it('should use currency USD and 1 as default amount', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 1 })
      .reply(200, responseMock);

    await convertBTC();

    expect(consoleStub).to.have.been.calledWith(`${chalk.red(1)} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(6142.77)}`);
  });


  it('should use currency USD and 10 as amount', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'USD', amount: 10 })
      .reply(200, responseMock);

    await convertBTC('USD', 10);

    expect(consoleStub).to.have.been.calledWith(`${chalk.red(10)} BTC to ${chalk.cyan('USD')} = ${chalk.yellow(6142.77)}`);
  });

  it('should use currency BRL and 1 as amount default', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 1 })
      .reply(200, responseMock);

    await convertBTC('BRL');
    expect(consoleStub).to.have.been.calledWith(`${chalk.red(1)} BTC to ${chalk.cyan('BRL')} = ${chalk.yellow(6142.77)}`);
  });

  it('should message user when api reply with error', async () => {
    nock('https://apiv2.bitcoinaverage.com')
      .get('/convert/global')
      .query({ from: 'BTC', to: 'BRL', amount: 1 })
      .replyWithError('Error');

    await convertBTC('BRL');
    expect(consoleStub).to.have.been.calledWith(chalk.red('Something went wrong in the API. Try in a few minutes.'));
  });
});
