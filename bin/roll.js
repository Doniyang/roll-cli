#!/usr/bin/env node

'use strict'
const program = require('commander');
program
    .version(require('../package.json').version)
    .usage('<command> [options]');
    
program
   .command('init','generate a new project from a template')
   .command('list','list available official templates')
   .command('build','prototype a new project')

 program.parse(process.argv)  