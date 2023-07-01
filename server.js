const express = require('express');
//require is used to use the dependencies installed
const app = express();
//app is like a central body from which everthing is controlled 

//starting the server
//3333 is the port where the process is running
app.listen(3333, ()=>{
    console.log("server started");
})