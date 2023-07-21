const workout = require("../database/workout"); 
const getAllWorkouts = ()=>{
    const allWorkouts = workout.getAllWorkouts();
    return allWorkouts;   
}

const getOneWorkout = ()=>{
   return;
}

const createNewWorkout = ()=>{
    return;

}

const updateOneWorkout = () =>{
   return;

}

const deleteOneWorkout =()=>{
    return ;
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