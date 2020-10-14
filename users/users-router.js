const router = require("express").Router();

const Users = require('./users-model');
const restricted = require('../auth/protected')

router.get('/', restricted, (req,res) => {
    // const department = req.body.department;
    // if(department) {

    // } else {

    // }
    Users.get()
        .then(users => {
            res.status(200).json({data:users})        
        })
        .catch(err => res.send(err));
});


module.exports = router;