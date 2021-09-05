import { request } from "@octokit/request"
import ora from "ora";
import { Buffer } from 'buffer';
import { writeFile } from 'fs';
export default class Charisma {
    constructor(options) {
        this.options = options
    }
    run() {
        let url, defOpts = {
            owner: "Doniyang",
            repo: "Javascript",
            branch: "master"
        };
        let template = this.options.template;
        if (template) {
            this.fetch(url, defOpts)
        } else {
            url = 'GET https://github.com/{owner}/{repo}.git';
            this.fetch(url, defOpts)
        }
    }

    fetch(url, opts) {
        const spinner = ora('generate project start');
        spinner.start('download ...');
        request(url, opts).then(res => {
            spinner.succeed('download template success');
            spinner.start('extra file ...');
            const data = new Uint8Array(Buffer.from(res));
            writeFile('项目描述', data, (err) => {
              if (err) {
                spinner.fail('fail '+err.toString())
              }else{
                spinner.succeed('success');
              }
              
            });
        }).catch(err => {
            spinner.fail('download template '+err.toString())
        })
    }
};

