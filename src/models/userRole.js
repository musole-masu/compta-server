const Sequelize = require('sequelize');

const sequelize = require('../../utils/connection');

/**
 * 
 * userRoles is the table that contains roles of users and their details, 
 * later will be used to grant user access to different app layers.
 * 
 */

const UserRoles = sequelize.define('user-roles', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    }
}, {});

module.exports = UserRoles;