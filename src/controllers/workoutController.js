
const workoutService = require('../services/workoutService');


const getAllWorkouts = (req,res,next)=>{

    //add
    const allWorkouts = workoutService.getAllWorkouts();
    // res.res("Get all workout");
    res.send({status:"OK",data:allWorkouts});
};

const getOneWorkout = (req,res,next)=>{

     const workout = workoutService.getOneWorkout();

    res.send("Get an existing workout");
}

const createNewWorkout = (re,res,next)=>{

    const createNewWorkout = workoutService.createNewWorkout();
    
    res.send("Create a new workout");
}

const updateOneWorkout = (req,res,next)=>{

    const updateOneWorkout = workoutService.updateOneWorkout();

    res.send("Update an existing workout");
}

const deleteOneWorkout =(req,res,next)=>{
    const deleteOneWorkout = workoutService.deleteOneWorkout();
    res.send("Delete an existing workout");
} 

module.exports = {
getAllWorkouts,
getOneWorkout,
createNewWorkout,
updateOneWorkout,
deleteOneWorkout
};