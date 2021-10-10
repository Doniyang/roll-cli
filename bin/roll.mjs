#!/usr/bin/env node

'use strict'
import { Command } from 'commander';
import Charisma  from "../libs/Charisma.js";
const program = new Command();
program
      .version('1.0.0',"-V,--version")
      .command("init <name> [tpl>")
      .alias('i')
      .description("init project with template")
      .action(function (pname, tpl) {
            new Charisma({ project: pname, tmplate: tpl }).run()
      })

program.parse(process.argv);