import ora from "ora";
import Git from "./Git.js";
export default class Charisma {
    constructor(options) {
        this.options = options
        this.git = null
    }
   help(){
       return this.git?this.git:(this.git = new Git())
   } 
    run() {
        let url, defOpts = {
            cwd:'D:/nodeSpace/dev'
        };
        let template = this.options.template;
        let dir = this.options.project
        if (template) {
            this.fetch(url, defOpts)
        } else {
            url = 'https://github.com/Doniyang/mux-ui.git';
            this.fetch(url, dir, defOpts)
        }
    }

    fetch(url, dest,opts) {
        const spinner = ora('generate project start');
        spinner.start('download ...');
        console.log(dest)
        this.help().clone(url,dest,opts).then(data=>{
            spinner.succeed("success")
        }).catch(err=>{
            spinner.fail("download fail")
        })

        // download(url, dest+"/", opts, err=>{
        //    if(err){
        //        spinner.fail("download fail")
        //        this.fetch(url,dest,opts)
        //    }else{
        //        spinner.succeed("success")
        //    }
        // })
    }
};

