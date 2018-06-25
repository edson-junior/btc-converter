#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');
const convertBTC = require('./ConvertBTC');

program
  .version(pkg.version)
  .description('A CLI tool that converts bitcoins to any currency provided')
  .option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)')
  .option('-A, --amount <amount>', 'Value in Bitcoins to convert. (Default: 1)')
  .parse(process.argv);

convertBTC(program.currency, program.amount); // eslint-disable-line
