#!/usr/bin/env node
'use strict';

var program = require('commander');
var pkg = require('../package.json');

program.version(pkg.version).description('A CLI tool that converts bitcoins to any currency provided').parse(process.argv);