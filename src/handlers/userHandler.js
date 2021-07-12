const { randomBytes } = require('crypto');
const sequelize = require('../../utils/connection');
/**
 * 
 * Import tables models to make queries
 * 
 */
const Roles = require('../models/users/roles');
const User = require('../models/users/user');
const UserRoles = require('../models/users/userRole');

/**
 * 
 * Import BCRYPT library to hash save into 
 * the database user table the password that user will give
 * 
 */
const bcrypt = require('bcrypt');
const saltRounds = 10;

/**
 * 
 * CREATE ROLES THAT WILL BE ASSIGNED TO USERS
 * 
 */
exports.postRolesHandler = (req, res, next) => {
    const roleTitle = req.body.roleTitle;
    const roleDescription = req.body.roleDescription;

    Roles.create({roleTitle: roleTitle, roleDescription: roleDescription}).then(result => {
        res.status(201).send(JSON.stringify(result))
    }).catch(err => {
        res.status(500).send(JSON.stringify(err.original))
        console.log(err)
    })    
};

/**
 * 
 * GET ALL ROLES FROM THE TABLE ROLES
 * 
 */

exports.getRolesHandler = (req, res, next) => {
    Roles.findAll().then(result => {
        res.status(200).send(result)
    })
    .catch(err => {
        res.status(500).send(JSON.stringify(err.original))
        console.log(err)
    })
}

/**
 * 
 * SIGN UP USER THEN ASSOCIAT HIM WITH A ROLE FROM THE ROLES TABLE
 * 
 */
exports.signUpUserHandler = (req, res, next) => {
    const userId = randomBytes(3).toString('hex');
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = req.body.email;
    const userName = `${req.body.firstName}-${req.body.lastName}`;
    const userPlaintextPassword = req.body.userPassword;
    const hireDate = req.body.hireDate;
    const birthDate = req.body.birthDate;

    bcrypt.hash(userPlaintextPassword, saltRounds)
    .then(hash => {
        // here we create a new user with an encrypted password, we never store the plain text password
        Roles.findOne({where: {roleTitle: 'Administrateur supra'}})
        .then(role => {
            User.create({
                id: userId,
                firstName: firstName,
                lastName: lastName,
                email: email,
                userName: userName,
                userPassword: hash,
                hireDate: hireDate,
                birthDate: birthDate
            }).then(user => {
                res.status(200).send(user);
                return user.addRoles(role, { through: UserRoles })
            })
            .catch(err => {
                res.status(500).send(JSON.stringify(err.original))
                console.log(err)
            })
        })
        .catch(err => console.log(err))
    })
    .catch(err => console.log(err))
}

/**
 * 
 * GET ALL USERS FROM USER TABLE
 * 
 */ 
exports.getAllUsersHandler = (req, res, next) => {
    User.findAll()
    .then(users => {
        res.status(200).send(users)
    })
    .catch(err => {
        res.status(500).send(JSON.stringify(err.original))
        console.log(err)
    })
};

/**
 * 
 * SIGN IN USER 
 * 
 */
exports.signInUserHandler = (req, res, next) => {

    const userName = req.body.userName;
    const userPlaintextPassword = req.body.userPassword;

    User.findOne({where: {userName: userName}})
    .then(user => {
        // console.log(user.dataValues)
        const encryptedPassword = user.dataValues.userPassword
        bcrypt.compare(userPlaintextPassword, encryptedPassword)
        .then(result => {
            if (result) {
                user.getRoles()
                .then(role => {
                    const message = {
                        success: result,
                        message: "User successfully signed in",
                        user: user,
                        role: role[0]
                    }
                    res.status(200).send(message);
                })
            } else {
                return res.status(401).send({sucess: result, message: "User unauthenticated"});
            }
            
        })
    })
    .catch(err => {
        res.status(500).send(JSON.stringify(err.original))
        console.log(err)
    })
}