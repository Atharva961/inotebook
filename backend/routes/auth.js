const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Create a user using: POST "/api/auth/" . Doesnt require Auth
router.post('/', (req, res)=>{

    console.log(req.body);
    // console.log(res.body);
    const user = User(req.body);
    user.save();//Saving in database
    res.send(req.body);
})

module.exports = router;