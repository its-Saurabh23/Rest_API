// creating a local server
const express = require('express');

const Path = require('path')
const app = express();

app.use (express.json());
app.use(express.urlencoded({extended:true})); 
const port = 3000;

app.all('/test',(req,res,next)=>{
    // '/:id/:name'
    // console.log(req.query);
    // res.send(req.query);
    // console.log( req.params)
    // res.send(req.params);
    console.log(req.body);
    res.send(req.body);
})

app.listen(port,()=>{
    console.log(`Server is run ing on port  ${port}`);
})