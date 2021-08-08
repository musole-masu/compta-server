const express = require('express');
const router = express.Router();

/**
 * 
 * IMPORT EXPORTED FUNCTIONS FROM USERHANDLERS
 * 
 */
const userHandler = require('../handlers/userHandler');

// router to create roles to be assigned to users
router.post('/roles', userHandler.postRolesHandler);

// router to get all roles created
router.get('/roles', userHandler.getRolesHandler);

// router to sign up a new user
router.post('/sign_up', userHandler.signUpUserHandler);

// router to sign in a user
router.post('/sign_in', userHandler.signInUserHandler);

// router to get all users
router.get('/users', userHandler.getAllUsersHandler);

//router.post('/sign_in', userHandler.getUserSignedIn);

module.exports = router;