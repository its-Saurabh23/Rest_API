
const workoutService = require('../services/workoutService');


const getAllWorkouts = (req,res,next)=>{

    //add
    const allWorkouts = workoutService.getAllWorkouts();
    // res.res("Get all workout");
    res.send({status:"OK",data:allWorkouts});
};

const getOneWorkout = (req,res,next)=>{
      
    const{
        params:{workoutId}
    } = req;
    if(!workoutId){
        return;
    }
     const workout = workoutService.getOneWorkout(workoutId);
     res.send({status:"OK",data:workout});
  //  res.send("Get an existing workout");
}

const createNewWorkout = (req,res,next)=>{

    const {body} = req;
    if(
        !body.name ||
        !body.mode ||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        res.status(400)
        .send({
            status:"FAILED",
            data:{
                error:
                "One of the follwing keys is missing or is empty in request body: 'name','mode','equipment','exercise','trainerTrip'",
            },
        });
        return;
    }

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

    const {
        body,params:{workoutId},
    }  = req;
    if(!workoutId){
        return;
    }
    const updateOneWorkout = workoutService.updateOneWorkout(workoutId,body);
    res.send({status:"OK",data:updateOneWorkout});
    //res.send("Update an existing workout");
}

const deleteOneWorkout =(req,res,next)=>{
    const {
        params:{workoutId},
    } = req;
    if(!workoutId){
        return;
    }
    const deleteOneWorkout = workoutService.deleteOneWorkout(workoutId);
   res.status(404).send({status:"OK"});
    // res.send("Delete an existing workout");
} 

module.exports = {
getAllWorkouts,
getOneWorkout,
createNewWorkout,
updateOneWorkout,
deleteOneWorkout
};