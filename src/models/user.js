/**
 * 
 * USER MODEL IS THE DATABASE STRUCTURE OF THE USER TABLE
 * 
 */

 const Sequelize = require('sequelize');

 const sequelize = require('../../utils/connection');

 const User = sequelize.define('users', {
     id: {
         type: Sequelize.STRING,
         allowNull: false,
         unique: true,
         primaryKey: true
     },
     firstName: {
         type: Sequelize.STRING,
         allowNull: false,
     },
     lastName: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: true
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userPassword: {
        type: Sequelize.STRING,
        allowNull: false
    },
    hireDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    },
    birthDate: {
        type: Sequelize.DATEONLY,
        allowNull: false
    }

 }, {});

 module.exports = User;