const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/connection');
const userRoutes = require('./src/routes/userRoutes');
const accountingRoutes = require('./src/routes/accountingRoutes');
const app = express();

/**
 * 
 * Import of Tables Model from models folder
 * 
 */
const User = require('./src/models/users/user');
const Roles = require('./src/models/users/roles');
const UserRoles = require('./src/models/users/userRole');
const Class = require('./src/models/accounting/class');
const ThreeDigitAccount = require('./src/models/accounting/account').ThreeDigitAccount;
const FourDigitAccount = require('./src/models/accounting/account').FourDigitAccount;



/**
 * PORT NUMBER ON LOCALHOST
*/
const port = 4000;

app.use(bodyParser.json());

app.use('/compta',userRoutes);
app.use('/compta', accountingRoutes);

/**
 * 
 * Database tables relationships 
 * 
 */
User.belongsToMany(Roles, { through: UserRoles})
Roles.belongsToMany(User, { through: UserRoles})

ThreeDigitAccount.belongsTo(Class);
Class.hasMany(ThreeDigitAccount);

FourDigitAccount.belongsTo(ThreeDigitAccount);
ThreeDigitAccount.hasMany(FourDigitAccount);




sequelize
.sync()
.then(result => {
    console.log(`
    APP CONNECTED TO DATABASE -> ${result.config.database} \n
    APP RUNNING ON -> ${result.config.host} \n`);
    app.listen(port, () => {
        console.log('LISTENING ON ' + port);
    })
})
.catch(err => console.log(err));

