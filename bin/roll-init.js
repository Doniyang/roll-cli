#!/usr/bin/env node

'use strict'
const program = require('commander');


/*
 * usage
 */

 program
 .usage('<template-name> [project-name]')
 .option('-c,--clone','use git clone')
 .option('--offline','use cache template')

 /*
* help
 */

 program.on('--help',()=>{
 	console.log('  Examples:')
 	console.log()
 	console.log()
 })