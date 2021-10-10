import {spawn} from "child_process"
export default class Task{
     run(cmd,args,opts){
       return new Promise((resolve,reject)=>{
        const runTask = spawn(cmd,args,opts);
        runTask.stdout.on('data',data=>{
            console.log(data.toString())
            if(data){resolve(data)}else{reject(new Error("sss"))}
        })
        runTask.on('error',err=>{
            console.log(err)
            reject(err)
        })
       })    
     }
}