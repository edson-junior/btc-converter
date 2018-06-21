#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');
var convertBTC = require('./ConvertBTC');

program.version(pkg.version).description('A CLI tool that converts bitcoins to any currency provided').option('-C, --currency <currency>', 'Currency to be converted. (Default: USD)').option('-A, --amount <amount>', 'Value in Bitcoins to convert. (Default: 1)').parse(process.argv);

console.log(convertBTC(program.currency, program.amount));