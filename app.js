// var logger = require('./logger.js')
const path = require('path'); //const so we dont redefine by mistake
//path - inbuilt module 
// console.log(logger);
//path module - working with directories and file paths.
//os module -  gibs info about the computer's os
const os = require('os');
const http = require('http') //importing http 
const fs = require('fs');
var pathObj = path.parse(__filename);

//creating server

const server = http.createServer((req,res)=>{
    if(req.url==='/'){
        res.write('hello Aniket')
        res.end()
    }
    //for urls...
    if(req.url==='/neha'){
        res.write('hello neha');
        res.end();
    }
})

// server.on('connection',(socket)=>{
//     console.log('new connection')
// })

server.listen(3000);
console.log('listening on port 3000');







// const EventEmitter = require('events');
// const emitter = new EventEmitter();
// //register a Listener
// //slap back only when you are slapped 
// emitter.on('slap', function(arg){
//     console.log('slapped back!',arg);
// });
// //raise and event
// emitter.emit('slap',{id:1,url:'bla bla'});

// // console.log(pathObj);
// const totalMemory = os.totalmem();
// const freeMemory = os.freemem();
// // console.log('Total memory: '+totalMemory);
// // console.log('Free memory: '+freeMemory);

// const files = fs.readdirSync('./') 
// //fetching all the files in dir



// //console.log(files);