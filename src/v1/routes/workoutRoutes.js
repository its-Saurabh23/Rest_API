const express  = require('express');
const router = express.Router();

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