const {DataTypes} = require('sequelize');
const sequelize = require('../../../utils/connection');

const Class = sequelize.define('class', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    className: {type: DataTypes.STRING, allowNull: false, unique: true},
    classOtherName: {type: DataTypes.STRING, allowNull: false, unique: true}
})

module.exports = Class;