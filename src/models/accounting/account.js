const { DataTypes } = require('sequelize');

const sequelize = require('../../../utils/connection');
/**
 * 
 * Three digit accounts are the accounts just under the accounting class with one digit identifier
 * e.g 7 for PRODUITS class and 701 for VENTES DE MARCHANDISES account, here the later is related to the class PRODUITS
 * through database one to many relationship
 * 
 */
const ThreeDigitAccount = sequelize.define('threeDigitAccount', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountDescription: {
        type: DataTypes.STRING,
        allowNull: false   
    }
});

/**
 * 
 * Four digit accounts are the accounts just under the Three digit accounts with three digits identifier
 * e.g 701 for VENTES DE MARCHANDISES account and 7011-FARINE DE MAIS MBALE for VENTES DE FARINE DE MAIS MBALE account, here the later is related to the account
 * VENTES DE MARCHANDISES through database one to many relationship. 701 has many 7011-*** account and 7011-*** belongs to one 701 account
 * 
 */
const FourDigitAccount = sequelize.define('FourDigitAccount', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    accountNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountTitle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    accountDescription: {
        type: DataTypes.STRING,
        allowNull: false   
    }
});

module.exports = {ThreeDigitAccount, FourDigitAccount};