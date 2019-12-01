const express = require("express");
const router = express.Router();
const cors = require("cors");

//User model
const Auth = require("../../models/Auth");
router.use(cors());

router.post("/login", (req, res) => {
    if (req.header('token')) {
        Auth.findAll({where: {username : req.body.username, password: req.body.password} })
        .then(cuenta => {
            if (cuenta) {
                res.json({ value: 'loggedIn' })
            } else {
                res.status(400);
                res.send('account incorrect');
            }
        });
    } else {
        res.send('cant access')
    }
});

module.exports = router;
