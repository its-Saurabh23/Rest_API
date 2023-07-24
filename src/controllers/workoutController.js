
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

const createNewWorkout = (req,res,next)=>{

    const {body} = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){return}

    const newWorkout = {
        name:body.name,
        mode:body.mode,
        equipment:body.equipment,
        exercises: body.exercises,
        trainerTips:body.trainerTips,
    };

    const createdWorkout = workoutService.createNewWorkout(newWorkout);
   
    res.status(201).send({status:"OK",data:createdWorkout});
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