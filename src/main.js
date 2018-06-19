#!/usr/bin/env node

const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version)
  .description('A CLI tool that converts bitcoins to any currency provided')
  .parse(process.argv);
