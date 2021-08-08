const { DataTypes } = require('sequelize');

const sequelize = require('../../../utils/connection')

const Roles = sequelize.define('roles', {
    roleTitle: {type: DataTypes.STRING, allowNull: false},
    roleDescription: {type: DataTypes.STRING, allowNull: false}
},{});

console.log('exported Roles') 
module.exports = Roles;