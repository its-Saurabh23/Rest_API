const express = require('express');

const app = express();

const PORT = process.env.POT || 3000;

app.get("/",(req,res,next)=>{
    res.send("<h2>It's Working!</h2>")
});

app.listen(PORT,()=>{
    console.log(`API is listning on port ${PORT}`);
})