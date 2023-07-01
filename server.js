const express = require('express');
const serverConfig = require('./configs/server.config');
//require is used to use the dependencies installed
const app = express();
//app is like a central body from which everthing is controlled 

//starting the server
//port is defined in the server config is the port where the process is running
app.listen(serverConfig.port, ()=>{
    console.log(`server started at ${serverConfig.port}`);
})