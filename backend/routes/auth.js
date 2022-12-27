const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

const JWT_SECRET = 'Harryisagoodb$oy';

// Create a user using: POST "/api/auth/createuser" . No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a strong password').isLength({ min: 5 })
], async (req, res) => {

    //If there are errors, return Bad Request and the errors
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    

    try {
        //Check whether the user with this email exists already
        let user = await User.findOne({ email: req.body.email });
        console.log(user);
        if (user) {
            return res.status(400).json({ error: "Sorry a user with this email already exists" });
        }

        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);

        //Inserting the values in the database
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: secPass
        })

        // .then(user=> res.json(user))
        // .catch(err=>{console.log(err)
        // res.json({error: "Please enter a unique value for email", message: err.message})})

        const data = {
            user:{
                id: user.id
            }
        }
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(jwt_data);

        res.json({authToken});
    }
    catch (error) {
        console.error(error.message);
        res.status(500).send("Some error occured");
    }

})

module.exports = router;