const express  = require('express');
const router = express.Router();

const workController = require("../../controllers/workoutController");

router.get('/',workController.getAllWorkouts);

router.get('/:workoutId',workController.getOneWorkout);

router.post('/',workController.createNewWorkout);

router.patch('/workoutId',workController.updateOneWorkout);

router.delete('/:workout',workController.deleteOneWorkout);

module.exports = router;

/*
router.get('/',(req,res,next)=>{
    res.send('Get all workout');
})
router.get('/:workoutId',(req,res,next)=>{
    res.send("Get an existing work");
})

router.post('/',(req,res,next)=>{
res.send("Create a new workout");
})

router.patch('/:workoutId',(req,res,next)=>{
    res.send("Update an existing workout");
});

router.delete('/:workoutId',(req,res,next)=>{
    res.send("Delete an existing workout");

});

module.exports = router; 

*/