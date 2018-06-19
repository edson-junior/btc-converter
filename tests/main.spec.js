const { expect } = require('chai');
const { exec } = require('child_process');
const btcConverter = './src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) { throw err; }

      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });

  it('should return the description when btc-converter --help', (done) => {
    exec(`${btcConverter} --help`, (err, stdout, stderr) => {
      if (err) { throw err; }

      expect(stdout.includes('A CLI tool that converts bitcoins to any currency provided')).to.be.true;
      done();
    });
  });
});
