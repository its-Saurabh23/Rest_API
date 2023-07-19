const getAllWorkouts = (req,res,next)=>{
    res.res("Getb all workout");
}

const getOneWorkout = (req,res,next)=>{
    res.send("Get an existing workout");
}

const createNewWorkout = (re,res,next)=>{
    res.send("Create a new workout");
}

const updateOneWorkout = (req,res,next)=>{
    res.send("Update an existing workout");
}

const deleteOneWorkout =(req,res,next)=>{
    res.send("Delete an existing workout");
} 