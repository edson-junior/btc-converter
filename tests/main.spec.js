const { expect } = require('chai');
const { exec } = require('child_process');
const btcConverter = './src/main.js';
const pkg = require('../package.json');

describe('Main CLI', () => {
  it('should return version of btc-converter', (done) => {
    exec(`${btcConverter} --version`, (err, stdout, stderr) => {
      if (err) {
        throw err;
      }

      expect(stdout.replace('\n', '')).to.be.equal(pkg.version);
      done();
    });
  });
});
