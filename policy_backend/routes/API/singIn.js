const user= require('../../models/user');
const express = require('express');
const router = express.Router()


router.post('/api/account/register', (req, res, next) => {
   
     const {
        name,
        email,
        password,
        phone  
     } = req.body;

     if(!name){
        return res.status(422).json({
            success: false,
            messege: 'Error: name can not be blank.'
         });
     }

     if(!email){
       return res.status(422).json({
           success: false,
           messege: 'Error: email can not be blank.'
        });
    }

    if(!password){
      return res.status(422).json({
           success: false,
           messege: 'Error: password can not be blank.'
        });
    }

    if(!phone){
      return res.status(422).json({
           success: false,
           messege: 'Error: phone can not be blank.'
        });
    }
    
    console.log("here");

    // email = email.toLowerCase();
    
    //verify
    user.find({
      email
    }, (err, previousUsers) => {
        if (err){
           return res.status(400).json({
           success: false,
           messege: 'Error: Server error.'  
        });
        } else if (previousUsers.length>0){
            return res.status(400).json({
              success: false,
                messege: 'Error: Account already exist.'
            });
        }
        //save
        let newUser = new user();

        newUser.name = name;
        newUser.email = email;
        newUser.password = newUser.generateHash(password);
        newUser.phone = phone;
        newUser.save().then(user => {
            return res.status(201).json({
                success: true,
                messege: 'SingUP'
            });
        }).catch(err => {
            console.log("error" , err)
            return res.status(400).json({
                 success: false,
                 messege: 'Error: phone can not be blank.'
             });
        })
    })
});

module.exports = router