const express = require ('express');
const router  = express.Router();

router.route('/').get((req,res,next)=>{
    res.send(`<h2>Hello from ${req.baseUrl}</h2>`);
});

module.exports = router;

