const express = require('express');

//remove
const v1Router = require("./v1/routes");

//add
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");

const app = express();

const PORT = process.env.POT || 3000;

//remove 
app.use('/api/v1',v1Router);

// add 
app.use('/api/v1/workouts',v1WorkoutRouter);

// app.get("/",(req,res,next)=>{
//     res.send("<h2>It's Working!</h2>")
// });

// app.use("/api/v1",v1Router);

app.listen(PORT,()=>{
    console.log(`API is listning on port ${PORT}`);
})