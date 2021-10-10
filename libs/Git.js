import Task from "./Task.js"

export default class Git {
    constructor(){
        this.cmd = 'git'
        this.task = null
    }
    help(){
        return this.task?this.task:(this.task = new Task())
    }

    clone(repo,path,options){
        const commands = ['clone',repo,path];
        return this.help().run(this.cmd,commands,options);
    }
}