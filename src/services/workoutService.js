const {v4:uuid} = require('uuid');
const workout = require("../database/workout"); 
const getAllWorkouts = ()=>{
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;   
}

const getOneWorkout = (workoutId)=>{
    const workout = workout.getAllWorkouts(workoutId);
    return workout;
  // return;
}

const createNewWorkout = (newWorkout)=>{
    const workoutToInsert = {
    ...newWorkout,
    id:uuid(),
    createdAt: new Date().toLocaleString("en-us",{timeZone:"UTC"}),
    updateAt:new Date().toLocaleString("en-us",{timeZone:"UTC"}),
    }
const createdWorkout = workout.createNewWorkout(workoutToInsert);
return createdWorkout;

}

const updateOneWorkout = (workoutId,changes) =>{
   const updatedWorkout = workout.updateOneWorkout(workoutId,changes) 
   return updatedWorkout;

}

const deleteOneWorkout =(workoutId)=>{
    workout.deleteOneWorkout(workoutId);
  //  return ;
} 

module.exports ={
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout,
}
/*It's also a good practice to name the service 
methods the same as the controller 
methods so that you have a connection between those. */