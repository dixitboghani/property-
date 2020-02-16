// user.js - user route module.

let express = require('express');
let router = express.Router();

const moment = require('moment');
const User = require('./models/User');
const UserSession = require('./models/UserSession');
// route for example.com/info



router.post('/',  (req, res) => {
    const {body} = req;
    const {password} = body;
    let {email} = body;


    if(!email) {
        return res.send({
            success: false,
            message: 'Error: Something is empty'
        })
    }

    if(!password) {
        return res.send({
            success: false,
            message: 'Error: Something is empty'
        })
    }

    email = email.toLowerCase();

    User.find({
        email:email
    }, async (err,users) => {
        if(err) {
            console.log(err);
            return res.send({
                success: false,
                message: "Error: User not found"
            });
        }
        if(users.length != 1){
            return res.send({
                success: false,
                message: 'Error: User Not Found'
            })
        }

        const user = users[0];
        if(!user.validPassword(password,user.password)){
            return res.send({
                success: false,
                message: 'Error: Incorrect Password'
            })
        }

        const userSession = new UserSession();
        userSession.userId = user._id;
        userSession.timestamp = moment().unix();
        userSession.expire_timestamp = moment().add(7,'days').unix();
        userSession.save((err,doc) => {
            if(err){
                console.log(err);
                return res.send({
                    success: false,
                    message: 'Something went wrong'
                })

            
            }
            return res.send({
                success:true,
                message: 'Validated user',
                token: doc._id
            })
        })
    })
})

module.exports = router;